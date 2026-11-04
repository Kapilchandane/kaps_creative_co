import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const lenis = window.__lenis;
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const section = document.getElementById(id);

        if (section) {
          if (lenis) {
            lenis.scrollTo(section, { offset: -80, duration: 1.2 });
          } else {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      } else {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}