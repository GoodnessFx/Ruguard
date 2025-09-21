import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Factory, 
  Truck, 
  Building2, 
  Stethoscope, 
  Cpu, 
  Car,
  Plane,
  ShoppingBag,
  Zap,
  Wheat,
  Fuel,
  Hammer
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimize production supply chains, reduce costs, and improve efficiency across complex manufacturing operations.",
      specialties: ["Lean Manufacturing", "Supplier Integration", "Quality Management", "Inventory Optimization"],
      clients: "50+ clients"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Pharma",
      description: "Navigate regulatory requirements while optimizing medical supply chains and pharmaceutical distribution networks.",
      specialties: ["Regulatory Compliance", "Cold Chain Management", "Risk Mitigation", "Cost Containment"],
      clients: "25+ clients"
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Manage complex technology supply chains, from semiconductor sourcing to product lifecycle management.",
      specialties: ["Component Sourcing", "Innovation Management", "Speed to Market", "Supply Security"],
      clients: "40+ clients"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Streamline automotive supply chains with just-in-time delivery, quality control, and supplier development programs.",
      specialties: ["JIT Delivery", "Tier Management", "Quality Systems", "Cost Engineering"],
      clients: "30+ clients"
    },
    {
      icon: ShoppingBag,
      title: "Retail & Consumer",
      description: "Enhance retail supply chains with demand forecasting, inventory optimization, and omnichannel distribution strategies.",
      specialties: ["Demand Planning", "Omnichannel", "Private Label", "Seasonal Management"],
      clients: "35+ clients"
    },
    {
      icon: Wheat,
      title: "Food & Agriculture",
      description: "Optimize food supply chains with focus on traceability, sustainability, and cold chain management.",
      specialties: ["Traceability", "Food Safety", "Sustainability", "Cold Chain"],
      clients: "20+ clients"
    },
    {
      icon: Plane,
      title: "Aerospace & Defense",
      description: "Navigate complex aerospace supply chains with emphasis on quality, compliance, and security requirements.",
      specialties: ["AS9100 Compliance", "Security Clearance", "Long-term Contracts", "Risk Management"],
      clients: "15+ clients"
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Manage energy sector procurement with focus on reliability, sustainability, and regulatory compliance.",
      specialties: ["Asset Management", "Renewable Energy", "Grid Reliability", "ESG Compliance"],
      clients: "18+ clients"
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Optimize construction supply chains with project-based procurement and materials management solutions.",
      specialties: ["Project Procurement", "Materials Management", "Subcontractor Relations", "Cost Control"],
      clients: "12+ clients"
    },
    {
      icon: Truck,
      title: "Logistics & Transport",
      description: "Enhance logistics operations with route optimization, fleet management, and carrier relationship strategies.",
      specialties: ["Route Optimization", "Fleet Management", "Carrier Relations", "Last Mile"],
      clients: "22+ clients"
    },
    {
      icon: Fuel,
      title: "Oil & Gas",
      description: "Support oil and gas operations with specialized procurement for upstream, midstream, and downstream activities.",
      specialties: ["Upstream Support", "Safety Standards", "Environmental Compliance", "Cost Optimization"],
      clients: "10+ clients"
    },
    {
      icon: Hammer,
      title: "Industrial Services",
      description: "Streamline industrial service supply chains with focus on maintenance, repair, and operations procurement.",
      specialties: ["MRO Optimization", "Service Contracts", "Spare Parts", "Predictive Maintenance"],
      clients: "28+ clients"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our deep industry expertise spans across multiple sectors, allowing us to provide 
            specialized solutions that address the unique challenges of your industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg text-gray-900 mb-1 truncate">{industry.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {industry.clients}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Key Specialties
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {industry.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Industry Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-900 mb-4">
              Cross-Industry Impact
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse industry experience enables us to bring best practices and innovative 
              solutions across sectors, delivering exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-gray-600">Industry Sectors</div>
              <div className="text-sm text-gray-500">Served globally</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">285+</div>
              <div className="text-gray-600">Active Clients</div>
              <div className="text-sm text-gray-500">Across all industries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$3.2B+</div>
              <div className="text-gray-600">Cost Savings</div>
              <div className="text-sm text-gray-500">Generated for clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}