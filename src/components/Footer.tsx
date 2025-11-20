import { Heart, MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="PetHouse" className="h-16 w-auto rounded-xl object-cover bg-white p-1" />
            </div>
            <p className="text-background/80 leading-relaxed">
              Cuidado e carinho que seu melhor amigo merece. Atendimento veterinário com excelência há mais de 15 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-background/80 hover:text-primary transition-smooth focus:outline-none focus:underline">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-smooth focus:outline-none focus:underline">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#team" className="text-background/80 hover:text-primary transition-smooth focus:outline-none focus:underline">
                  Veterinários
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-primary transition-smooth focus:outline-none focus:underline">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-background/80">Vacinação</li>
              <li className="text-background/80">Cirurgias</li>
              <li className="text-background/80">Exames Laboratoriais</li>
              <li className="text-background/80">Banho & Tosa</li>
              <li className="text-background/80">Atendimento Domiciliar</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/80">Rua das Flores, 123 - Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+551140028922" className="text-background/80 hover:text-primary transition-smooth">
                  (11) 4002-8922
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@pethouse.com.br" className="text-background/80 hover:text-primary transition-smooth">
                  contato@pethouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © 2025 PetHouse. Todos os direitos reservados.
            </p>
            
            {/* Developer Credit */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-background/80 text-sm font-medium text-center">
                Desenvolvido por <span className="font-bold text-primary">Isaque Santos</span> - Desenvolvedor Full-Stack
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/isaque-santos-720b8b15a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                  aria-label="Perfil do LinkedIn de Isaque Santos"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/IsaqueCodeX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                  aria-label="Perfil do GitHub de Isaque Santos"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;