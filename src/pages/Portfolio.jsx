import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, categories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="min-h-screen bg-white dark:bg-[#09090f] px-4 sm:px-6 pb-20 pt-32 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <SEO
          title="Our Portfolio"
          description="Explore creative projects by Kaps Creative Co. including packaging design, brand identity, social media creatives and website development."
        />

        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400"
          >
            The Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl"
          >
            Selected
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Creative Work.
            </span>
          </motion.h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
            Explore our design, branding and digital projects,
            where creative ideas meet thoughtful execution.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-violet-500 text-slate-900 dark:text-white"
                  : "border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:border-violet-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {filteredProjects.length ? (
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 sm:px-6 py-20 text-center">
                <h2 className="text-xl font-semibold">
                  More work coming soon
                </h2>
                <p className="mt-3 text-slate-600 dark:text-zinc-400">
                  We're preparing projects for this category.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}