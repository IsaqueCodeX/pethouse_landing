import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const emergencyWhatsAppLink = "https://wa.me/5511999999999?text=Olá! Tenho uma emergência com meu pet!";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
              aria-label="PetHouse - Voltar ao início"
            >
              <img src={logo} alt="PetHouse" className="h-16 w-auto rounded-xl object-cover border-2 border-primary/20" />
            </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth font-medium focus:outline-none focus:underline"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth font-medium focus:outline-none focus:underline"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-smooth font-medium focus:outline-none focus:underline"
            >
              Veterinários
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium focus:outline-none focus:underline"
            >
              Contato
            </button>
            <Button 
              variant="destructive" 
              className="hover-lift bg-emergency hover:bg-emergency/90 font-semibold"
              aria-label="Contatar emergência 24h pelo WhatsApp"
              onClick={() => window.open(emergencyWhatsAppLink, '_blank')}
            >
              Emergência 24h
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Veterinários
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Contato
            </button>
            <Button 
              variant="destructive" 
              className="w-full bg-emergency hover:bg-emergency/90 font-semibold"
              aria-label="Contatar emergência 24h pelo WhatsApp"
              onClick={() => window.open(emergencyWhatsAppLink, '_blank')}
            >
              Emergência 24h
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;