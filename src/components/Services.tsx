import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Stethoscope, TestTube, Sparkles } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Vacinação",
    description: "Protocolo completo de vacinas para manter seu pet sempre protegido e saudável.",
  },
  {
    icon: Stethoscope,
    title: "Cirurgias",
    description: "Centro cirúrgico equipado com tecnologia de ponta e equipe especializada.",
  },
  {
    icon: TestTube,
    title: "Exames",
    description: "Laboratório próprio com resultados rápidos e precisos para diagnósticos certeiros.",
  },
  {
    icon: Sparkles,
    title: "Banho & Tosa",
    description: "Estética pet com profissionais qualificados e produtos de qualidade premium.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Cuidado completo para seu pet em todas as fases da vida
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-2 hover:border-primary hover:shadow-lg transition-smooth bg-card"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;