import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { asset } from "../utils/asset";

export default function BrandCard({ brand }) {
  const [imageError, setImageError] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 220,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 220,
    damping: 20,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-7 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300 hover:border-violet-500/60 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.4)]"
    >
      <div className="mb-7 flex h-36 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 p-6">
        {brand.logo && !imageError ? (
          <img
            src={asset(brand.logo)}
            alt={`${brand.name} logo`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-center text-2xl font-bold">
            {brand.name}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold">{brand.name}</h3>

      <p className="mt-3 min-h-16 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
        {brand.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {brand.services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xs text-violet-500 dark:text-violet-300"
          >
            {service}
          </span>
        ))}
      </div>

      {brand.projectSlug && (
        <Link
          to={`/portfolio/${brand.projectSlug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:text-violet-300"
        >
          View Project <ArrowUpRight size={17} />
        </Link>
      )}
    </motion.article>
  );
}