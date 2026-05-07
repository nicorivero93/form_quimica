const PUBCHEM_BASE = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug';

export async function findCidByName(name: string): Promise<number | null> {
  const url = `${PUBCHEM_BASE}/compound/name/${encodeURIComponent(name)}/cids/JSON`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const cid = data?.IdentifierList?.CID?.[0];
  return typeof cid === 'number' ? cid : null;
}

export async function fetchSdf(cid: number): Promise<{ sdf: string; is3D: boolean }> {
  const try3d = await fetch(`${PUBCHEM_BASE}/compound/cid/${cid}/SDF?record_type=3d`);
  if (try3d.ok) {
    const sdf = await try3d.text();
    if (sdf && sdf.length > 50) return { sdf, is3D: true };
  }
  const try2d = await fetch(`${PUBCHEM_BASE}/compound/cid/${cid}/SDF?record_type=2d`);
  if (try2d.ok) {
    const sdf = await try2d.text();
    return { sdf, is3D: false };
  }
  throw new Error(`No SDF disponible para CID ${cid}`);
}

export async function loadMoleculeByName(name: string): Promise<{
  cid: number;
  sdf: string;
  is3D: boolean;
}> {
  const cid = await findCidByName(name);
  if (cid == null) throw new Error(`Molécula no encontrada en PubChem: ${name}`);
  const { sdf, is3D } = await fetchSdf(cid);
  return { cid, sdf, is3D };
}
