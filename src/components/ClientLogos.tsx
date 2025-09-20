const ClientLogos = () => {
  const clients = [
    "TechCorp",
    "MediaFlow", 
    "PodcastPro",
    "CreativeStudios",
    "DigitalFirst",
    "ContentKing",
    "VideoMax",
    "StreamlineMedia"
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
            Trusted by 200+ Content Creators and Businesses
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center max-w-6xl mx-auto">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors duration-300 group"
            >
              <span className="text-muted-foreground group-hover:text-foreground font-medium text-sm transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;