import { TrendingUp, Users, Eye } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Pat Light",
      metric: "121% ↗ YT Views",
      avatar: "PL",
      company: "@PatLight"
    },
    {
      name: "Spencer Scott Pugh", 
      metric: "12K ↗ YT Subs",
      avatar: "SP",
      company: "@SpencerScottPugh"
    },
    {
      name: "Kosher Money",
      metric: "40K ↗ Insta Followers", 
      avatar: "KM",
      company: "@KosherMoney"
    },
    {
      name: "Ben Fisher",
      metric: "350% ↗ Engagement",
      avatar: "BF", 
      company: "@BenFisher"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from Real Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of content creators and businesses who've transformed their video content with our editing services.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">500%</div>
            <div className="text-muted-foreground">Average Growth Increase</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-muted-foreground">Active Clients</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">10M+</div>
            <div className="text-muted-foreground">Views Generated</div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-feature text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.avatar}
              </div>
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{testimonial.company}</p>
              <div className="text-lg font-bold text-primary">{testimonial.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;