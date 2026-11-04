import { brands } from "../data/brands.js";
import BrandCard from "../components/BrandCard.jsx";

export default function Brands() {
  return (
    <section className="border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#101018] px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
          Brand Collaborations
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Brands we've worked with
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate-600 dark:text-zinc-400">
          Real client brands and project stories will appear here.
        </p>

        <div className="brands-marquee relative mt-12 min-h-[400px] overflow-hidden">
          <div className="brands-marquee-track absolute top-0 left-0 flex gap-6 w-max hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.id || brand.slug || brand.name}-${index}`} className="w-[300px] shrink-0 md:w-[340px]">
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
