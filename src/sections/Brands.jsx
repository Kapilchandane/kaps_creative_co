import { brands } from "../data/brands";
import BrandCard from "../components/BrandCard";
import Reveal from "../components/Reveal";

export default function Brands() {
  return (
    <section
      id="brands"
      className="border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#101018] px-4 sm:px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Collaborations
          </p>

          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Brands We've{" "}
              <span className="text-violet-600 dark:text-violet-400">
                Worked With.
              </span>
            </h2>
          </Reveal>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-zinc-400">
            Exploring creativity, technology and digital
            solutions through our brand collaborations.
          </p>
        </div>

        <div className="brands-marquee relative min-h-[400px] overflow-hidden">
          <div className="brands-marquee-track absolute top-0 left-0 flex gap-6 w-max hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="w-[300px] shrink-0 md:w-[340px]">
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}