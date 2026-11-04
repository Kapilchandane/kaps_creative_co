import { ArrowUpRight, Mail, MapPin, Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { services } from "../data/services.js";

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title={
              <>
                Have a project? <span className="text-violet-600 dark:text-violet-400">Let's create.</span>
              </>
            }
            description="Tell us about your idea and let's explore how we can bring it to life."
          />
          <div className="space-y-5 text-slate-600 dark:text-zinc-400">
            <p className="flex items-center gap-3">
              <Mail className="text-violet-600 dark:text-violet-400" size={20} />
              Email contact coming soon
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-violet-600 dark:text-violet-400" size={20} />
              Pune, India
            </p>
            <p className="flex items-center gap-3">
              <Check className="text-violet-600 dark:text-violet-400" size={20} />
              Available for creative projects
            </p>
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Demo form only. Connect Formspree or EmailJS before launch.");
          }}
          className="space-y-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#15151d] p-7 md:p-10"
        >
          <h3 className="mb-6 text-2xl font-bold">Start a Project</h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#20202a] p-4 outline-none focus:border-violet-400"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#20202a] p-4 outline-none focus:border-violet-400"
            />
          </div>

          <select
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#20202a] p-4 text-slate-700 dark:text-zinc-300 outline-none focus:border-violet-400"
          >
            <option value="" disabled>
              Select a Service
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full resize-y rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#20202a] p-4 outline-none focus:border-violet-400"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 p-4 font-semibold transition hover:bg-violet-400"
          >
            Send Inquiry <ArrowUpRight size={19} />
          </button>

          <p className="text-center text-xs text-zinc-500">
            Demo form — email integration will be added next.
          </p>
        </form>
      </div>
    </section>
  );
}
