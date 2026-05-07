import { useQuery } from '@tanstack/react-query';
import type { CrystalData } from '@/types/crystal';

async function loadCrystal(jsonFile: string): Promise<CrystalData> {
  const url = `/data/crystals/${jsonFile}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`No se pudo cargar el cristal ${jsonFile} (${res.status})`);
  }
  return res.json();
}

export function useCrystalStructure(jsonFile: string | null | undefined) {
  return useQuery<CrystalData>({
    queryKey: ['crystal', jsonFile],
    queryFn: () => loadCrystal(jsonFile!),
    enabled: !!jsonFile,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
