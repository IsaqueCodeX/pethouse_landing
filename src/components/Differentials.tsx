import { CheckCircle2, Home, Users, Microscope } from "lucide-react";

const differentials = [
  {
    icon: Home,
    title: "Atendimento Domiciliar",
    description: "Levamos o cuidado veterinário até você, com todo conforto para seu pet.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Veterinários com especializações em diversas áreas da medicina veterinária.",
  },
  {
    icon: Microscope,
    title: "Laboratório Próprio",
    description: "Resultados de exames em até 24h com equipamentos de última geração.",
  },
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Por que escolher a PetHouse?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Diferenciais que fazem toda a diferença no cuidado do seu pet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/50 transition-smooth"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <CheckCircle2 className="w-8 h-8 text-primary fill-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;