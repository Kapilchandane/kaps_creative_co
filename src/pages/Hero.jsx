import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Magnetic from "../components/Magnetic.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 pt-28"
    >
      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] rounded-full bg-violet-600/25 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute top-1/3 left-1/2 h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-7xl py-24"
      >
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-400/10 px-5 py-2.5 text-sm text-violet-500 dark:text-violet-300 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
          </span>
          Creative Digital Studio
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          WE DESIGN.
          <br />
          WE DEVELOP.
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]">
            WE ELEVATE.
          </span>
        </h1>

        <p className="mt-9 max-w-xl text-base leading-relaxed text-slate-600 dark:text-zinc-400 sm:text-lg">
          We turn bold ideas into memorable brands, beautiful designs and
          powerful digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-8 py-4 font-semibold shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] transition hover:bg-violet-400 hover:shadow-[0_10px_50px_-5px_rgba(139,92,246,0.8)]"
            >
              Explore Our Work
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#services"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:border-violet-400"
            >
              Our Services <ArrowRight size={19} />
            </a>
          </Magnetic>
        </div>

        <div className="mt-20 flex flex-wrap gap-8 border-t border-zinc-200/60 dark:border-white/10 pt-8 text-sm text-slate-600 dark:text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> Creative
            Strategy
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Digital
            Experiences
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Brand
            Identity
          </span>
        </div>
      </motion.div>
    </section>
  );
}