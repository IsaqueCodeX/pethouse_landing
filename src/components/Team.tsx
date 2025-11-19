import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import drRicardoAlves from "@/assets/avatar-labrador.jpg";
import draSofiaLima from "@/assets/avatar-persian.jpg";
import drMarcosRocha from "@/assets/avatar-dog.jpg";

const teamMembers = [
  {
    name: "Dr. Ricardo Alves",
    specialty: "Clínico Geral e Cirurgião",
    avatar: drRicardoAlves,
  },
  {
    name: "Dra. Sofia Lima",
    specialty: "Especialista em Felinos",
    avatar: draSofiaLima,
  },
  {
    name: "Dr. Marcos Rocha",
    specialty: "Dermatologia e Alergia",
    avatar: drMarcosRocha,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nossa Equipe de Veterinários
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Profissionais apaixonados e dedicados ao bem-estar do seu melhor amigo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover-lift border-2 hover:border-primary transition-smooth bg-card">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={member.avatar}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full rounded-full object-cover shadow-lg border-4 border-primary/20"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-heading mb-1">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;