import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => {
        const lenis = window.__lenis;
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (lenis && !reduced) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
        }
      }}
      className="fixed bottom-24 right-7 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-[#20202b] text-white shadow-lg transition hover:bg-violet-500"
    >
      <ArrowUp size={20} />
    </button>
  );
}