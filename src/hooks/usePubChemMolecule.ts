import { useQuery } from '@tanstack/react-query';
import { loadMoleculeByName } from '@/lib/pubchem-api';
import type { MoleculeData } from '@/types/molecule';

export function usePubChemMolecule(query: string | null | undefined) {
  return useQuery<MoleculeData>({
    queryKey: ['pubchem', 'name', query],
    queryFn: async () => {
      if (!query) throw new Error('No query');
      const { cid, sdf, is3D } = await loadMoleculeByName(query);
      return { cid, name: query, sdf, is3D };
    },
    enabled: !!query,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24 * 30,
  });
}
