import { Phone } from "lucide-react";

export default function CallButton() {
  const phone = "919673681767";
  const isValid = /^[1-9]\d{7,14}$/.test(phone || "");

  if (!isValid) return null;

  return (
    <a
      href={`tel:+${phone}`}
      aria-label="Call Kaps Creative Co."
      title="Call us"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white shadow-xl shadow-violet-900/30 transition duration-300 hover:scale-110 hover:bg-violet-400"
    >
      <Phone size={26} />
    </a>
  );
}
