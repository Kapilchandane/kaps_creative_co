import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onChange,
  title,
}) {
  useEffect(() => {
    if (currentIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight")
        onChange((currentIndex + 1) % images.length);
      if (event.key === "ArrowLeft")
        onChange(
          (currentIndex - 1 + images.length) % images.length
        );
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, images.length, onChange, onClose]);

  useEffect(() => {
    if (currentIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [currentIndex]);

  if (currentIndex === null || !images.length) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image gallery`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
      onClick={onClose}
    >
      <button
        type="button"
        autoFocus
        aria-label="Close image"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          onChange(
            (currentIndex - 1 + images.length) % images.length
          );
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-200 dark:bg-white/10 p-3 hover:bg-white/20 md:left-8"
      >
        <ChevronLeft />
      </button>

      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="max-h-[80vh] max-w-[85vw] object-contain"
        onClick={(event) => event.stopPropagation()}
      />

      <button
        type="button"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onChange((currentIndex + 1) % images.length);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-200 dark:bg-white/10 p-3 hover:bg-white/20 md:right-8"
      >
        <ChevronRight />
      </button>

      <span className="absolute bottom-5 text-sm text-slate-600 dark:text-zinc-400">
        {currentIndex + 1} / {images.length}
      </span>
    </div>
  );
}