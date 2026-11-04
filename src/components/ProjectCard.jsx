import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#15151d] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_18px_45px_-12px_rgba(139,92,246,0.45)]"
    >
      <Link to={`/portfolio/${project.slug}`} className="block">
        <div className="relative overflow-hidden">
          <ProjectImage
            key={project.thumbnail}
            src={project.thumbnail}
            alt={project.title}
            className="aspect-[16/9] w-full object-contain bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-[#09090f]/35 to-transparent" />

          <span className="absolute left-3 top-3 rounded-full border border-slate-300 dark:border-white/20 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">
            {project.category}
          </span>

          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black transition group-hover:bg-violet-400 group-hover:text-slate-900 dark:text-white">
            <ArrowUpRight size={16} />
          </span>

          <div className="absolute bottom-3 left-3 right-12">
            <h3 className="text-base font-bold leading-tight tracking-tight text-white transition group-hover:text-violet-200 sm:text-lg">
              {project.title}
            </h3>
            <p className="mt-0.5 text-[11px] uppercase tracking-widest text-slate-700 dark:text-zinc-300/80">
              {project.client}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-wrap gap-1.5">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-[10px] text-slate-700 dark:text-zinc-300"
              >
                {service}
              </span>
            ))}
          </div>
          <span className="shrink-0 text-[10px] uppercase tracking-widest text-zinc-500">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}