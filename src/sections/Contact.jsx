import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import LinkedInIcon from "../components/LinkedInIcon";

const services = [
  "Logo & Brand Identity",
  "Label & Packaging Design",
  "Social Media Post Design",
  "Website Development",
  "E-commerce Solutions",
  "Digital Marketing",
  "WhatsApp Automation",
  "Other",
];

const budgets = [
  "Below ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000+",
  "Not decided yet",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-slate-200 dark:border-white/10 " +
  "bg-slate-100 dark:bg-[#20202a] px-4 py-4 text-slate-900 dark:text-white " +
  "outline-none transition focus:border-violet-400";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const phone = "919673681767";

    if (!phone || !/^[1-9]\d{7,14}$/.test(phone)) {
      setStatus("error");
      setError("WhatsApp number is not configured yet.");
      return;
    }

    const message = [
      "Hello Kaps Creative Co.!",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget || "Not decided yet"}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
    setForm(initialForm);
  }

  return (
    <section
      id="contact"
      className="bg-white dark:bg-[#09090f] px-4 sm:px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Build Something{" "}
            <span className="text-violet-600 dark:text-violet-400">Amazing.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-zinc-400">
            Have a project in mind? Tell us what you're
            looking for and we'll get back to you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-7 lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#15151d] p-8">
              <h3 className="text-2xl font-bold">
                Let's talk about your idea.
              </h3>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-zinc-400">
                Whether you need a brand identity, beautiful
                packaging, a website or digital marketing,
                we're ready to discuss your next project.
              </p>

              <div className="mt-9 space-y-5">
                <a
                  href="mailto:chandanekapil16@gmail.com"
                  className="flex items-center gap-4 transition hover:text-violet-500 dark:text-violet-300"
                >
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-600 dark:text-violet-400">
                    <Mail size={21} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">
                      Email
                    </p>
                    <p className="mt-1 text-sm">
                      chandanekapil16@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/kapil-chandane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition hover:text-violet-500 dark:text-violet-300"
                >
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-600 dark:text-violet-400">
                    <LinkedInIcon size={21} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-sm">
                      kapil-chandane
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-600 dark:text-violet-400">
                    <MapPin size={21} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">
                      Location
                    </p>
                    <p className="mt-1 text-sm">
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-violet-400/20 bg-violet-500/10 p-8">
              <p className="text-sm font-semibold text-violet-500 dark:text-violet-300">
                YOUR VISION, OUR CREATIVITY
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Turning ideas into impactful experiences.
              </h3>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#15151d] p-6 sm:p-9 lg:col-span-3"
          >
            <h3 className="mb-7 text-2xl font-bold">
              Tell Us About Your Project
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-700 dark:text-zinc-300">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-700 dark:text-zinc-300">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-slate-700 dark:text-zinc-300">
                Phone / WhatsApp Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={update}
                placeholder="+91 98765 43210"
                className={fieldClass}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="mb-2 block text-sm text-slate-700 dark:text-zinc-300">
                  Required Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={update}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm text-slate-700 dark:text-zinc-300">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={update}
                  className={fieldClass}
                >
                  <option value="">
                    Select budget
                  </option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-700 dark:text-zinc-300">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={3000}
                value={form.message}
                onChange={update}
                placeholder="Describe your project, goals and requirements..."
                className={`${fieldClass} resize-y`}
              />
            </div>

            {status === "success" && (
              <div
                role="status"
                className="flex gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
              >
                <CheckCircle2 size={20} className="shrink-0" />
                Your inquiry details have been prepared in WhatsApp.
                Please review and send the message.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="flex gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              >
                <AlertCircle size={20} className="shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-500 p-4 font-semibold transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  Send via WhatsApp
                  <Send size={19} />
                </>
              )}
            </button>

            <p className="text-center text-xs leading-relaxed text-zinc-500">
              We'll use your details only to respond to
              your inquiry. Please don't submit sensitive information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}