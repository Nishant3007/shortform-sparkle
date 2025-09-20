import { Video, Mic, Zap, Film, Play, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Podcast Editing",
      description: "Full podcast production including DOAC-style trailers, intro/outro sequences, and audio enhancement.",
      features: ["Audio cleanup", "Show notes", "Trailer creation", "Multi-format export"]
    },
    {
      icon: Zap,
      title: "Short-Form Videos", 
      description: "Viral-ready content for TikTok, Instagram Reels, YouTube Shorts optimized for engagement.",
      features: ["Trend optimization", "Captions & graphics", "Hook creation", "Platform sizing"]
    },
    {
      icon: Video,
      title: "Talking Heads",
      description: "Professional talking head videos with dynamic editing, graphics, and seamless transitions.",
      features: ["Multi-cam editing", "B-roll integration", "Graphics package", "Color correction"]
    },
    {
      icon: Target,
      title: "Ads & Explainers",
      description: "High-converting video ads and explainer videos designed to drive action and educate audiences.",
      features: ["Script optimization", "CTA integration", "A/B test versions", "Landing page sync"]
    },
    {
      icon: Film,
      title: "Documentaries",
      description: "Long-form documentary editing with professional storytelling, color grading, and sound design.",
      features: ["Story structure", "Interview editing", "Archival integration", "Music scoring"]
    },
    {
      icon: Play,
      title: "Faceless Content",
      description: "Engaging faceless videos using stock footage, animations, and voiceovers for various niches.",
      features: ["Stock footage", "Animation creation", "VO synchronization", "Niche optimization"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Type of Video Content, <span className="text-gradient">Perfected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From podcasts to viral shorts, we handle all your video editing needs with professional quality and lightning-fast turnaround.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card-feature group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;