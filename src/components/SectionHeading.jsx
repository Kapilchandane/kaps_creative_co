import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div {...fadeUp} className="mb-12 max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400" />
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
