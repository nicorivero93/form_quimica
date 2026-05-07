#!/usr/bin/env python3
"""
Descarga CIFs del Crystallography Open Database (COD) y los pre-procesa con
pymatgen, escribiendo JSONs simples en `public/data/crystals/`.

Cada CrystalSpec tiene una lista de COD IDs candidatos. El script descarga
cada uno en orden, lo parsea con pymatgen y valida contra los elementos
esperados (`expected_elements`) y opcionalmente el grupo espacial. Acepta
el primer candidato que valida y descarta los demás.

Si ninguno valida, busca en COD por fórmula via la API y prueba los
primeros N resultados con la misma validación.

Uso:
    pip install -r scripts/requirements.txt
    python scripts/build_crystals.py            # todos
    python scripts/build_crystals.py Au-fcc Fe-bcc
    python scripts/build_crystals.py --force    # reprocesa aunque exista

Salida:
    public/data/crystals/*.json
"""
from __future__ import annotations
import argparse
import json
import re
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path

import requests
from tqdm import tqdm

try:
    from pymatgen.io.cif import CifParser
except ImportError:
    print("ERROR: pymatgen no instalado. Corré: pip install -r scripts/requirements.txt", file=sys.stderr)
    sys.exit(1)


COD_URL = "https://www.crystallography.net/cod/{cod_id}.cif"
COD_SEARCH = "https://www.crystallography.net/cod/result?formula={formula}&format=lst"
OUT_DIR = Path(__file__).parent.parent / "public" / "data" / "crystals"
CIF_CACHE = Path(__file__).parent / "cif-cache"
SEARCH_TOP_N = 8


@dataclass
class CrystalSpec:
    slug: str
    formula: str                     # display, ej "Au" o "NaCl"
    name: str
    expected_elements: tuple[str, ...]  # set de símbolos químicos esperados
    candidate_cod_ids: tuple[int, ...]  # IDs en orden de prioridad
    search_formula: str = ""         # fórmula para search COD si todo falla
    expected_sg_numbers: tuple[int, ...] = field(default_factory=tuple)
    min_atoms: int = 1
    max_atoms: int = 200


# Lista alineada con src/data/structures.ts.
# IDs validados manualmente o por búsqueda automática del COD.
CRYSTALS: list[CrystalSpec] = [
    # ─────────── Metales FCC (Fm-3m, #225) ───────────
    CrystalSpec("Au-fcc", "Au", "Oro FCC", ("Au",), (9008463, 9013034, 1100137), "Au", (225,)),
    CrystalSpec("Cu-fcc", "Cu", "Cobre FCC", ("Cu",), (9008468, 9013014, 1100132), "Cu", (225,)),
    CrystalSpec("Ag-fcc", "Ag", "Plata FCC", ("Ag",), (9008458, 9013010, 1100136), "Ag", (225,)),
    CrystalSpec("Al-fcc", "Al", "Aluminio FCC", ("Al",), (9008460, 9013002, 1100138), "Al", (225,)),
    CrystalSpec("Pb-fcc", "Pb", "Plomo FCC", ("Pb",), (9008477, 9013096, 1011083), "Pb", (225,)),
    CrystalSpec("Pt-fcc", "Pt", "Platino FCC", ("Pt",), (9013100, 9008514, 1100141), "Pt", (225,)),
    CrystalSpec("Ni-fcc", "Ni", "Níquel FCC", ("Ni",), (9008476, 9013068, 1100139), "Ni", (225,)),

    # ─────────── Metales BCC (Im-3m, #229) ───────────
    CrystalSpec("Fe-bcc", "Fe", "Hierro α BCC", ("Fe",), (9008536, 9013014, 9006637), "Fe", (229,)),
    CrystalSpec("Fe-fcc", "Fe", "Hierro γ FCC", ("Fe",), (9008537, 9013016), "Fe", (225,)),
    CrystalSpec("W-bcc",  "W",  "Wolframio BCC", ("W",), (9008559, 9013147, 1100210), "W", (229,)),
    CrystalSpec("Cr-bcc", "Cr", "Cromo BCC", ("Cr",), (9008527, 9013011, 1100208), "Cr", (229,)),
    CrystalSpec("Na-bcc", "Na", "Sodio BCC", ("Na",), (9008549, 9013071), "Na", (229,)),
    CrystalSpec("K-bcc",  "K",  "Potasio BCC", ("K",), (9008539, 9013047), "K", (229,)),

    # ─────────── Metales HCP (P6_3/mmc, #194) ───────────
    CrystalSpec("Mg-hcp", "Mg", "Magnesio HCP", ("Mg",), (9008506, 9013058), "Mg", (194,)),
    CrystalSpec("Ti-hcp", "Ti", "Titanio α HCP", ("Ti",), (9008517, 9013138), "Ti", (194,)),
    CrystalSpec("Zn-hcp", "Zn", "Zinc HCP", ("Zn",), (9008522, 9013155), "Zn", (194,)),
    CrystalSpec("Co-hcp", "Co", "Cobalto HCP", ("Co",), (9008492, 9008495), "Co", (194,)),

    # ─────────── Otras simples ───────────
    CrystalSpec("Po-sc",      "Po", "Polonio cúbico simple", ("Po",), (9008491, 1011603), "Po", (221,)),
    CrystalSpec("diamond",    "C",  "Diamante",  ("C",), (9008564, 9012290, 9008565), "C", (227,)),
    CrystalSpec("graphite",   "C",  "Grafito",   ("C",), (9008569, 9012230), "C", (194, 166)),
    CrystalSpec("Si-diamond", "Si", "Silicio diamante",  ("Si",), (9008566, 9011998), "Si", (227,)),
    CrystalSpec("Ge-diamond", "Ge", "Germanio diamante", ("Ge",), (9008567, 9012113), "Ge", (227,)),
    CrystalSpec("S8",         "S₈", "Azufre rómbico S₈", ("S",), (9013762, 1011160, 1537087), "S8"),
    CrystalSpec("Bi-rhomb",   "Bi", "Bismuto",      ("Bi",), (9008576, 9012955), "Bi", (166,)),
    CrystalSpec("As-rhomb",   "As", "Arsénico gris", ("As",), (9008574, 9012953), "As", (166,)),

    # ─────────── Compuestos / Minerales ───────────
    CrystalSpec("NaCl",            "NaCl",   "Halita",       ("Na", "Cl"),  (9008670, 9000041, 9008678, 1000041), "Cl Na",   (225,)),
    CrystalSpec("CaF2",            "CaF₂",   "Fluorita",     ("Ca", "F"),   (9009059, 9009060, 1000043, 9007060), "Ca F2",   (225,)),
    CrystalSpec("ZnS-zincblende",  "ZnS",    "Esfalerita",   ("Zn", "S"),   (9009132, 1011195, 1011196, 1100043), "S Zn",    (216,)),
    CrystalSpec("Fe2O3-hematite",  "Fe₂O₃",  "Hematita",     ("Fe", "O"),   (9015064, 9000139, 1011267, 1011240), "Fe2 O3",  (167,)),
    CrystalSpec("Fe3O4-magnetite", "Fe₃O₄",  "Magnetita",    ("Fe", "O"),   (1011084, 9002321, 1010369, 1011032), "Fe3 O4",  (227,)),
    CrystalSpec("FeS2-pyrite",     "FeS₂",   "Pirita",       ("Fe", "S"),   (9000596, 9000598, 1010760, 1011013), "Fe S2",   (205,)),
    CrystalSpec("SiO2-quartz",     "SiO₂",   "Cuarzo α",     ("Si", "O"),   (9000776, 1011174, 9007542),         "O2 Si",   (152, 154)),
    CrystalSpec("CaCO3-calcite",   "CaCO₃",  "Calcita",      ("Ca", "C", "O"), (9000095, 1011162, 9000964),       "C Ca O3", (167,)),
    CrystalSpec("Al2O3-corundum",  "Al₂O₃",  "Corindón",     ("Al", "O"),   (1000058, 1000017, 9000139),         "Al2 O3",  (167,)),
    CrystalSpec("TiO2-rutile",     "TiO₂",   "Rutilo",       ("Ti", "O"),   (9004144, 1010942, 1526931),         "O2 Ti",   (136,)),
    CrystalSpec("HgS-cinnabar",    "HgS",    "Cinabrio",     ("Hg", "S"),   (9000004, 9008848, 9012082),         "Hg S",    (152, 154)),
    CrystalSpec("PbS-galena",      "PbS",    "Galena",       ("Pb", "S"),   (9000001, 9008694, 9013400, 1010748), "Pb S",   (225,)),
    CrystalSpec("MoS2",            "MoS₂",   "Molibdenita",  ("Mo", "S"),   (9007660, 9009144, 1011286),         "Mo S2",   (194, 160, 166)),
]


def http_get(url: str, timeout: int = 30, retries: int = 3) -> bytes | None:
    for attempt in range(retries):
        try:
            r = requests.get(url, timeout=timeout)
            if r.status_code == 200 and r.content:
                return r.content
        except requests.RequestException:
            time.sleep(1.5 * (attempt + 1))
    return None


def download_cif(cod_id: int, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 100:
        return True
    content = http_get(COD_URL.format(cod_id=cod_id))
    if content is None or len(content) < 100:
        return False
    dest.write_bytes(content)
    return True


def search_cod(formula: str) -> list[int]:
    """Devuelve hasta SEARCH_TOP_N COD IDs por búsqueda de fórmula."""
    encoded = formula.replace(" ", "%20")
    content = http_get(COD_SEARCH.format(formula=encoded))
    if content is None:
        return []
    text = content.decode("utf-8", errors="ignore")
    ids: list[int] = []
    for line in text.splitlines():
        line = line.strip()
        if line.isdigit():
            ids.append(int(line))
            if len(ids) >= SEARCH_TOP_N:
                break
    return ids


def parse_and_validate(cif_path: Path, spec: CrystalSpec) -> dict | None:
    """Parsea con pymatgen, valida elementos + sg, y devuelve el JSON o None."""
    try:
        parser = CifParser(str(cif_path))
        structures = parser.parse_structures(primitive=False)
        if not structures:
            return None
        s = structures[0]
    except Exception:
        return None

    # Elementos del cristal parseado
    found_elements = sorted({
        list(site.species.element_composition.elements)[0].symbol
        for site in s.sites
        if list(site.species.element_composition.elements)
    })
    expected = sorted(spec.expected_elements)
    if found_elements != expected:
        return None

    # Validación de tamaño
    if not (spec.min_atoms <= len(s.sites) <= spec.max_atoms):
        return None

    # Validación de space group si hay esperado
    try:
        sg_symbol, sg_number = s.get_space_group_info()
    except Exception:
        sg_symbol, sg_number = "P1", 1
    sg_number = int(sg_number)
    if spec.expected_sg_numbers and sg_number not in spec.expected_sg_numbers:
        return None

    lattice = s.lattice
    atoms = []
    for site in s.sites:
        elements = list(site.species.element_composition.elements)
        element_symbol = elements[0].symbol if elements else "X"
        atoms.append({
            "element": element_symbol,
            "frac": [round(float(c), 6) for c in site.frac_coords],
            "xyz": [round(float(c), 6) for c in site.coords],
        })

    return {
        "id": spec.slug,
        "formula": spec.formula,
        "name": spec.name,
        "spaceGroup": sg_symbol,
        "spaceGroupNumber": sg_number,
        "lattice": {
            "a": round(float(lattice.a), 6),
            "b": round(float(lattice.b), 6),
            "c": round(float(lattice.c), 6),
            "alpha": round(float(lattice.alpha), 4),
            "beta": round(float(lattice.beta), 4),
            "gamma": round(float(lattice.gamma), 4),
        },
        "cellMatrix": [
            [round(float(v), 6) for v in row]
            for row in lattice.matrix
        ],
        "atoms": atoms,
        "source": "COD",
    }


def try_id(cod_id: int, spec: CrystalSpec) -> dict | None:
    cif_path = CIF_CACHE / f"{cod_id}.cif"
    if not download_cif(cod_id, cif_path):
        return None
    data = parse_and_validate(cif_path, spec)
    if data:
        data["codId"] = cod_id
        data["source"] = f"COD {cod_id}"
    return data


def process(spec: CrystalSpec, force: bool = False) -> tuple[bool, str]:
    """Devuelve (ok, msg). msg incluye el COD ID usado."""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    CIF_CACHE.mkdir(parents=True, exist_ok=True)

    out_path = OUT_DIR / f"{spec.slug}.json"
    if out_path.exists() and not force:
        return True, "skip (existe)"

    # 1) Probar IDs candidatos en orden
    for cod_id in spec.candidate_cod_ids:
        data = try_id(cod_id, spec)
        if data:
            out_path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
            return True, f"COD {cod_id}"

    # 2) Si todos fallan y hay search_formula, buscar y probar top-N
    if spec.search_formula:
        for cod_id in search_cod(spec.search_formula):
            if cod_id in spec.candidate_cod_ids:
                continue
            data = try_id(cod_id, spec)
            if data:
                out_path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
                return True, f"COD {cod_id} (auto)"

    return False, "ningún candidato válido"


def main():
    parser = argparse.ArgumentParser(description="Descarga y procesa CIFs del COD a JSON.")
    parser.add_argument("slugs", nargs="*", help="Slugs específicos (default: todos)")
    parser.add_argument("--force", action="store_true", help="Reprocesa aunque exista el JSON")
    args = parser.parse_args()

    specs = CRYSTALS if not args.slugs else [c for c in CRYSTALS if c.slug in args.slugs]
    if not specs:
        print("Ningún spec coincide con los slugs pedidos.", file=sys.stderr)
        sys.exit(1)

    ok = 0
    failed: list[str] = []
    info_lines: list[str] = []
    for spec in tqdm(specs, desc="Procesando cristales"):
        success, msg = process(spec, force=args.force)
        info_lines.append(f"  {spec.slug:24s} -> {msg}")
        if success:
            ok += 1
        else:
            failed.append(spec.slug)

    print(f"\nOK: {ok}/{len(specs)}\n")
    print("\n".join(info_lines))
    if failed:
        print(f"\nFallaron: {', '.join(failed)}", file=sys.stderr)
        sys.exit(2)


if __name__ == "__main__":
    main()
