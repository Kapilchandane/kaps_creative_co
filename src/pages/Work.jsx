import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Work() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const visible = projects.filter(
    (project) => active === "All" || project.category === active
  );

  return (
    <section id="work" className="px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Work that speaks for itself."
          description="A selection of creative directions. Real client projects will be added here."
        />

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full px-5 py-2 text-sm transition ${
                active === category
                  ? "bg-violet-500 text-slate-900 dark:text-white"
                  : "border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-7 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-400"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}