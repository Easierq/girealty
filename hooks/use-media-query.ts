// src/hooks/use-media-query.ts
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => setMatches(media.matches);

    // Initial check
    handleChange();

    // Add listener
    media.addEventListener("change", handleChange);

    // Cleanup
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
