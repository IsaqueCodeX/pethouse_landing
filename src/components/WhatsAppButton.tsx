import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da PetHouse.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full h-16 w-16 p-0 bg-green-500 hover:bg-green-600 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;