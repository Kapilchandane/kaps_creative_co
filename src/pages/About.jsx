import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Creativity meets <span className="text-violet-600 dark:text-violet-400">technology.</span>
              </>
            }
          />
          <p className="text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
            Kaps Creative Co. is a creative digital studio focused on helping
            businesses build distinctive brands and strong digital experiences.
          </p>
          <p className="mt-5 leading-relaxed text-slate-600 dark:text-zinc-400">
            From product packaging and marketing creatives to websites and
            business automation, we bring design thinking and technology
            together.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-600 dark:text-violet-400"
          >
            Work With Us <ArrowUpRight size={18} />
          </a>
        </div>

        <motion.div
          {...fadeUp}
          className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-violet-950 via-[#181326] to-[#10111b]"
        >
          <div className="absolute h-52 w-52 rounded-full border border-violet-400/30" />
          <div className="absolute h-72 w-72 rounded-full border border-violet-400/10" />
          <div className="text-center">
            <div className="text-6xl font-black text-white sm:text-7xl">
              K<span className="text-violet-600 dark:text-violet-400">.</span>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.5em] text-violet-300">
              Create Different
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
