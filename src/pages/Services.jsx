import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { services } from "../data/services.js";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 dark:bg-[#101018] px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything your brand needs."
          description="Creative and technical services that help your business stand out."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-2xl border border-zinc-200/60 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-8 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.35)]"
              >
                <div className="mb-8 inline-flex rounded-xl bg-violet-500/10 p-4 text-violet-600 dark:text-violet-400">
                  <Icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="leading-relaxed text-slate-600 dark:text-zinc-400">{service.desc}</p>
                <ArrowUpRight className="mt-7 text-zinc-500 transition group-hover:text-violet-600 dark:text-violet-400" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
