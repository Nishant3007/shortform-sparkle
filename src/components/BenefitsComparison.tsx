import { Check, X, AlertTriangle } from "lucide-react";

const BenefitsComparison = () => {
  const comparisons = [
    {
      feature: "Turnaround Time",
      us: "4-36 hours",
      freelancers: "1-2 weeks",
      employees: "Varies widely", 
      agencies: "2-4 weeks"
    },
    {
      feature: "Revisions",
      us: "Unlimited",
      freelancers: "2-3 limited",
      employees: "Unlimited*",
      agencies: "3-5 rounds"
    },
    {
      feature: "Monthly Cost",
      us: "$1,495+",
      freelancers: "$2,000-5,000",
      employees: "$8,000-15,000",
      agencies: "$5,000-20,000"
    },
    {
      feature: "Consistency",
      us: "Guaranteed",
      freelancers: "Inconsistent",
      employees: "Good if trained",
      agencies: "Usually good"
    },
    {
      feature: "Scalability", 
      us: "Instant",
      freelancers: "Limited",
      employees: "Slow to hire",
      agencies: "Possible"
    },
    {
      feature: "Flexibility",
      us: "Pause anytime",
      freelancers: "Project-based",
      employees: "Fixed cost",
      agencies: "Long contracts"
    }
  ];

  const getIcon = (value: string) => {
    if (value.includes("Guaranteed") || value.includes("Unlimited") || value.includes("4-36 hours") || value.includes("Instant") || value.includes("Pause")) {
      return <Check className="w-5 h-5 text-primary" />;
    }
    if (value.includes("Inconsistent") || value.includes("Limited") || value.includes("1-2 weeks")) {
      return <X className="w-5 h-5 text-destructive" />;
    }
    return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">ShortFormVid</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we stack up against freelancers, in-house employees, and traditional agencies.
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <div className="card-glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold">Feature</th>
                    <th className="text-center p-6 font-semibold bg-primary/10">
                      <div className="text-primary font-bold">ShortFormVid</div>
                    </th>
                    <th className="text-center p-6 font-semibold">Freelancers</th>
                    <th className="text-center p-6 font-semibold">Employees</th>
                    <th className="text-center p-6 font-semibold">Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr 
                      key={item.feature}
                      className={`border-b border-border ${
                        index % 2 === 0 ? 'bg-secondary/5' : ''
                      }`}
                    >
                      <td className="p-6 font-medium">{item.feature}</td>
                      <td className="p-6 text-center bg-primary/5">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(item.us)}
                          <span className="font-semibold text-primary">{item.us}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(item.freelancers)}
                          <span className="text-muted-foreground">{item.freelancers}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(item.employees)}
                          <span className="text-muted-foreground">{item.employees}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getIcon(item.agencies)}
                          <span className="text-muted-foreground">{item.agencies}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              * Employee performance varies based on training, experience, and workload
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsComparison;