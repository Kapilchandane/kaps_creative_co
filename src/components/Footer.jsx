import { Mail } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 px-4 sm:px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row">
        <a href="#home" className="text-xl font-black">
          KAPS<span className="text-violet-600 dark:text-violet-400">.</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-zinc-400">
          <a
            href="mailto:chandanekapil16@gmail.com"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            chandanekapil16@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/kapil-chandane"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Kaps Creative Co. All rights reserved.
        </p>

        <a href="#home" className="text-sm text-slate-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}