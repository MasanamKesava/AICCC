// src/hooks/useThumbnails.ts
import { useEffect, useState } from "react";
import { fetchImageForTerm } from "@/lib/imageSearch";

export function useThumbnails(
  items: Array<{ key: string; query: string; fixed?: string }>,
  placeholder = "https://placehold.co/900x560?text=Image"
) {
  const [map, setMap] = useState<Record<string, string>>({});

  useEffect(() => {
    let alive = true;

    (async () => {
      const entries = await Promise.all(
        items.map(async ({ key, query, fixed }) => {
          try {
            if (fixed) return [key, fixed] as const;
            const url = await fetchImageForTerm(query);
            return [key, url || placeholder] as const;
          } catch {
            return [key, placeholder] as const;
          }
        })
      );
      if (!alive) return;
      const m: Record<string, string> = {};
      entries.forEach(([k, v]) => (m[k] = v));
      setMap(m);
    })();

    return () => { alive = false; };
  }, [items, placeholder]);

  return map;
}
