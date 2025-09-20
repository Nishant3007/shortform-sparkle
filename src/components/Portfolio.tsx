import { useState } from "react";
import { Play, ExternalLink, TrendingUp, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("podcasts");

  const portfolioItems = {
    podcasts: [
      {
        title: "Business Strategy Podcast",
        client: "Pat Light",
        views: "121% ↗ YT Views", 
        thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=225&fit=crop",
        type: "Podcast",
        duration: "45:30"
      },
      {
        title: "Health & Wellness Show",
        client: "Spencer Scott Pugh",
        views: "12K ↗ YT Subs",
        thumbnail: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=225&fit=crop",
        type: "Podcast",
        duration: "32:15"
      }
    ],
    shorts: [
      {
        title: "Viral Marketing Tips",
        client: "Kosher Money",
        views: "40K ↗ Insta Followers",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
        type: "Short Form",
        duration: "0:59"
      },
      {
        title: "Tech Review Shorts",
        client: "Ben Fisher", 
        views: "350% ↗ Engagement",
        thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
        type: "Short Form",
        duration: "0:45"
      }
    ],
    ads: [
      {
        title: "SaaS Product Demo",
        client: "TechCorp",
        views: "25% ↗ Conversion Rate",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
        type: "Ad",
        duration: "1:30"
      },
      {
        title: "E-commerce Brand Video", 
        client: "RetailBrand",
        views: "180% ↗ CTR",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        type: "Ad",
        duration: "2:00"
      }
    ]
  };

  const tabs = [
    { id: "podcasts", label: "Podcasts", icon: Users },
    { id: "shorts", label: "Short Form", icon: TrendingUp },
    { id: "ads", label: "Ads & Explainers", icon: Eye }
  ];

  return (
    <section id="work" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Video Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the results we've delivered for content creators and businesses across different video formats and industries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-[var(--shadow-brand)]'
                  : 'bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems[activeTab as keyof typeof portfolioItems].map((item, index) => (
            <div key={index} className="card-feature group overflow-hidden">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  {item.type}
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  {item.duration}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4">Client: {item.client}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-primary font-semibold">
                  {item.views}
                </div>
                <Button variant="ghost" size="sm" className="group/btn">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see similar results for your content?
          </p>
          <Button className="btn-brand">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;