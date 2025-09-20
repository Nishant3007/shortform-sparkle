import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-video-editing.jpg";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional video editing workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">4-36 Hour Turnaround • Unlimited Revisions</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            We Solve Your{" "}
            <span className="text-gradient text-glow">Video Editing</span>{" "}
            Headaches
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Professional video editing subscriptions for podcasts, short-form content, ads, and more. 
            <span className="text-primary font-semibold"> Better than freelancers, employees, and agencies.</span>
          </p>
          
          {/* Services List */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
            {[
              "Podcasts & DOAC Trailers",
              "Short Form Videos", 
              "Talking Heads",
              "Ads & Explainers",
              "Documentaries",
              "Faceless Content"
            ].map((service) => (
              <span
                key={service}
                className="bg-secondary/30 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-foreground"
              >
                {service}
              </span>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-brand text-lg px-8 py-6 group">
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              className="btn-secondary text-lg px-8 py-6 group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <p className="text-muted-foreground text-sm">
            Flexible editing subscriptions • Pause or cancel anytime
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;