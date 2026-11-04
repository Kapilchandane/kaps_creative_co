import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const over = (e) => {
      const target = e.target;
      if (!target || !target.closest) {
        setHovering(false);
        return;
      }
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringScale = clicking ? 0.8 : hovering ? 2.1 : 1;
  const dotScale = clicking ? 0.5 : hovering ? 0 : 1;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ left: x, top: y }}
        animate={{ scale: dotScale, opacity: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ left: ringX, top: ringY }}
        animate={{ scale: ringScale }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="fixed top-0 left-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 mix-blend-difference pointer-events-none"
      />
    </>
  );
}