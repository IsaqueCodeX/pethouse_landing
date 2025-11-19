import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Team />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;