import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";

const banners = [
  { src: banner1, alt: "Veterinária examinando um filhote de labrador" },
  { src: banner2, alt: "Veterinário sorrindo com um cachorro Boston Terrier" },
  { src: banner3, alt: "Veterinária examinando um filhote de gato cinza" },
];

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Cuidado e carinho que seu melhor amigo{" "}
              <span className="text-primary">merece</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Na PetHouse, sua família de quatro patas recebe atendimento veterinário de excelência com amor, dedicação e tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hover-lift bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6"
                aria-label="Agendar check-up veterinário"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um check-up', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Check-up
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                aria-label="Falar com nossa equipe"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Preciso de informações', '_blank')}
              >
                Falar com a Equipe
              </Button>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-4 pt-4">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-heading font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-heading font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Pets atendidos</p>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-heading font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Atendimento</p>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <Carousel
              plugins={[plugin.current]}
              className="w-full rounded-3xl overflow-hidden shadow-2xl"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {banners.map((banner, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={banner.src}
                      alt={banner.alt}
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="eager"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;