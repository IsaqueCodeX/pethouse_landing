import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import avatarCat from "@/assets/avatar-cat.jpg";
import avatarDog from "@/assets/avatar-dog.jpg";
import avatarLabrador from "@/assets/avatar-labrador.jpg";
import avatarPersian from "@/assets/avatar-persian.jpg";

const testimonials = [
  {
    name: "Maria Silva",
    pet: "Luna",
    text: "A PetHouse salvou a vida da minha Luna! Atendimento rápido, carinhoso e profissional. Toda a equipe é excepcional!",
    rating: 5,
    avatar: avatarDog,
  },
  {
    name: "João Pedro",
    pet: "Thor",
    text: "Melhor clínica veterinária da região! O Thor adora ir lá, e eu confio totalmente no trabalho da equipe.",
    rating: 5,
    avatar: avatarLabrador,
  },
  {
    name: "Ana Costa",
    pet: "Mel",
    text: "Profissionais dedicados e instalações impecáveis. A Mel recebeu cuidados excelentes durante a cirurgia.",
    rating: 5,
    avatar: avatarPersian,
  },
  {
    name: "Carlos Mendes",
    pet: "Mimi",
    text: "Equipe atenciosa e muito competente. A Mimi sempre recebe o melhor tratamento. Recomendo muito!",
    rating: 5,
    avatar: avatarCat,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Depoimentos reais de tutores que confiam na PetHouse
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2 h-full">
                    <Card className="border-2 hover-scale transition-all duration-300 h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        {/* Avatar */}
                        <div className="flex justify-center mb-6">
                          <img
                            src={testimonial.avatar}
                            alt={`Avatar de ${testimonial.pet}`}
                            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-primary/20"
                          />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4 justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Text */}
                        <blockquote className="flex-grow text-base md:text-lg text-center text-foreground mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author */}
                        <div className="text-center">
                          <p className="font-heading font-bold text-base text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Tutor de {testimonial.pet}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;