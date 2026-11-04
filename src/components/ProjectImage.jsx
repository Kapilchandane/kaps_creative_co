import { useState } from "react";
import { ImageIcon } from "lucide-react";

export default function ProjectImage({
  src,
  alt,
  className = "",
  onClick,
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#302044] via-[#181827] to-[#11121d] ${className}`}
      >
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <ImageIcon size={36} className="text-violet-600/70 dark:text-violet-400/70" />
          <p className="max-w-xs text-sm text-slate-600 dark:text-zinc-400">
            {alt || "Project image coming soon"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={onClick}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}