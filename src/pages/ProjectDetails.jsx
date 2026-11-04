import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Layers,
  Building2,
  Maximize2,
} from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import ProjectImage from "../components/ProjectImage";
import ImageLightbox from "../components/ImageLightbox";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";

export default function ProjectDetails() {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 pt-20 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/portfolio" className="mt-6 text-violet-600 dark:text-violet-400">
          Back to Portfolio
        </Link>
      </section>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.id !== project.id)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        image={project.thumbnail}
      />

      <div className="min-h-screen bg-white dark:bg-[#09090f]">
        <section className="px-4 sm:px-6 pb-12 pt-32 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/portfolio"
              className="mb-12 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 transition hover:text-violet-600 dark:text-violet-400"
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
                {project.category} / Project
              </p>

              <h1 className="max-w-5xl text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProjectImage
            key={project.thumbnail}
            src={project.thumbnail}
            alt={`${project.title} cover`}
            className="aspect-[16/9] w-full rounded-3xl object-cover"
          />
        </div>

        <section className="px-4 sm:px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-4 text-sm uppercase tracking-widest text-violet-600 dark:text-violet-400">
                The Project
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">
                Project Overview.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
                {project.overview}
              </p>
            </div>

            <div className="space-y-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#15151d] p-8">
              <div className="flex gap-4">
                <Building2 className="shrink-0 text-violet-600 dark:text-violet-400" />
                <div>
                  <p className="text-sm text-zinc-500">Client</p>
                  <p className="mt-1 font-semibold">{project.client}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CalendarDays className="shrink-0 text-violet-600 dark:text-violet-400" />
                <div>
                  <p className="text-sm text-zinc-500">Year</p>
                  <p className="mt-1 font-semibold">{project.year}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Layers className="shrink-0 text-violet-600 dark:text-violet-400" />
                <div>
                  <p className="text-sm text-zinc-500">Services</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-violet-400/10 px-3 py-2 text-xs text-violet-500 dark:text-violet-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-400"
              >
                Visit Website <ArrowUpRight size={18} />
              </a>
            )}
            </div>
          </div>
        </section>

        {project.images && project.images.length > 0 && (
        <section className="px-4 sm:px-6 pb-20 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-sm uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  Visual Showcase
                </p>
                <h2 className="text-3xl font-bold md:text-5xl">
                  Project Gallery.
                </h2>
              </div>
              <Maximize2 className="hidden text-zinc-500 sm:block" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 text-left"
                  aria-label={`Enlarge ${project.title} image ${index + 1}`}
                >
                  <ProjectImage
                    src={src}
                    alt={`${project.title} visual ${index + 1}`}
                    className="aspect-[4/3] w-full object-contain bg-slate-100 dark:bg-[#171720] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
        )}

        {project.link && (
        <section className="px-4 sm:px-6 pb-20 md:pb-24">
          <div className="mx-auto max-w-7xl text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-400"
            >
              Visit Website <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
        )}

        {relatedProjects.length > 0 && (
          <section className="bg-slate-50 dark:bg-[#101018] px-4 sm:px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-10 text-3xl font-bold md:text-5xl">
                Explore More Work.
              </h2>

              <div className="grid gap-7 md:grid-cols-2">
                {relatedProjects.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 sm:px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-[#281b42] to-[#11111d] p-9 text-center md:p-20">
            <p className="mb-5 text-sm uppercase tracking-widest text-violet-300">
              Let's Collaborate
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-black md:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-zinc-300">
              Let's bring your creative ideas to life with
              thoughtful design and powerful digital solutions.
            </p>

            <Link
              to="/#contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-400"
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </div>

      <ImageLightbox
        key={project.slug}
        images={project.images}
        currentIndex={activeImage}
        onChange={setActiveImage}
        onClose={() => setActiveImage(null)}
        title={project.title}
      />
    </>
  );
}