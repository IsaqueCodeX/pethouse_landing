const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Venha nos visitar! Estamos prontos para receber você e seu pet com todo o carinho.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg max-w-5xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Rua%20das%20Flores%2C%20123%20-%20Centro%2C%20S%C3%A3o%20Paulo%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da PetHouse"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;