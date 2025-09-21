import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  ShoppingCart, 
  TruckIcon, 
  BarChart3, 
  Shield, 
  Zap, 
  Settings,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "Strategic Procurement",
      description: "Comprehensive procurement strategy development, supplier management, and cost optimization to maximize value and reduce risks.",
      features: ["Spend Analysis", "Supplier Evaluation", "Contract Negotiation", "Category Management"]
    },
    {
      icon: TruckIcon,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain design and optimization to improve efficiency, reduce costs, and enhance customer satisfaction.",
      features: ["Network Design", "Inventory Optimization", "Logistics Planning", "Process Improvement"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Intelligence",
      description: "Advanced data analytics and business intelligence solutions to drive informed decision-making and strategic planning.",
      features: ["Data Analytics", "KPI Development", "Performance Dashboards", "Predictive Modeling"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your supply chain from disruptions and uncertainties.",
      features: ["Risk Assessment", "Business Continuity", "Supplier Audits", "Compliance Management"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Technology-enabled solutions to modernize supply chain operations and drive digital innovation across your organization.",
      features: ["Technology Strategy", "System Integration", "Automation Solutions", "Change Management"]
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Operational improvement initiatives focused on enhancing productivity, quality, and overall supply chain performance.",
      features: ["Process Optimization", "Lean Implementation", "Quality Management", "Performance Improvement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive supply chain and procurement consulting services designed to optimize 
            your operations, reduce costs, and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you identify opportunities, optimize operations, and achieve your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
            >
              Get Free Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              onClick={scrollToContact}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}