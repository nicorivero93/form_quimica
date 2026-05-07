import { useQuery } from '@tanstack/react-query';
import { fetchWikipediaSummary, type WikipediaSummary } from '@/lib/wikipedia-api';

export function useWikipediaSummary(slug: string | null | undefined) {
  return useQuery<WikipediaSummary | null>({
    queryKey: ['wikipedia', 'summary', slug],
    queryFn: () => (slug ? fetchWikipediaSummary(slug) : Promise.resolve(null)),
    enabled: !!slug,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 30,
  });
}
