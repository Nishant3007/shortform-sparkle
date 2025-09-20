import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SocialProof from "@/components/SocialProof"; 
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BenefitsComparison from "@/components/BenefitsComparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientLogos />
      <SocialProof />
      <Services />
      <Portfolio />
      <BenefitsComparison />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
