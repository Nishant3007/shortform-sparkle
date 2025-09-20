import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$1,495",
      period: "/month",
      description: "Perfect for content creators and small businesses getting started",
      features: [
        "4-36 hour turnaround",
        "Unlimited revisions",
        "1 video at a time",
        "All video types included",
        "Dedicated editor", 
        "Pause or cancel anytime"
      ],
      popular: false
    },
    {
      name: "Professional", 
      icon: Crown,
      price: "$2,495",
      period: "/month", 
      description: "Ideal for growing businesses and active content creators",
      features: [
        "Everything in Starter",
        "2 videos at a time",
        "Priority support",
        "Advanced graphics package",
        "Social media optimization",
        "Performance analytics"
      ],
      popular: true
    },
    {
      name: "Agency",
      icon: Rocket,
      price: "Custom",
      period: "pricing",
      description: "For agencies and enterprises with high-volume needs",
      features: [
        "Everything in Professional", 
        "Unlimited videos in queue",
        "24/7 priority support",
        "Custom brand guidelines",
        "Multi-team collaboration",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no long-term contracts. Get professional video editing at a fraction of the cost of hiring in-house.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-glass p-8 relative ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-[var(--shadow-brand)] scale-105' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={plan.popular ? "btn-brand w-full" : "btn-secondary w-full"}
              >
                {plan.name === "Agency" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which plan is right for you? Book a free consultation.
          </p>
          <Button variant="outline" className="btn-secondary">
            Book Free Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;