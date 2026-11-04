import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "919673681767";
  const isValid = /^[1-9]\d{7,14}$/.test(phone || "");

  if (!isValid) return null;

  const message =
    "Hello Kaps Creative Co.! I'm interested in your creative services. I'd like to discuss a project.";

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kaps Creative Co. on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition duration-300 hover:scale-110 hover:bg-[#1fb859]"
    >
      <MessageCircle size={31} />
      <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full border-2 border-[#09090f] bg-green-300" />
    </a>
  );
}