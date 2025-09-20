import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof"; 
import Services from "@/components/Services";
import BenefitsComparison from "@/components/BenefitsComparison";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <Services />
      <BenefitsComparison />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
