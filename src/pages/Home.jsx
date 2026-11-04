import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import BrandsSection from "../sections/Brands";
import ContactSection from "../sections/Contact";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Work() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section id="work" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Creativity in{" "}
            <span className="text-violet-600 dark:text-violet-400">Action.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-zinc-400">
            Explore selected branding, design and digital projects.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-400"
          >
            Explore All Projects
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Creative Design & Digital Solutions"
        description="Kaps Creative Co. provides logo design, product packaging, social media creatives, website development, e-commerce and digital marketing services."
      />
      <Hero />
      <About />
      <Services />
      <Work />
      <BrandsSection />
      <ContactSection />
    </>
  );
}

export { Footer };