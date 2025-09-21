import { Card } from "./ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with strategic procurement and supply chain solutions that drive sustainable growth and competitive advantage."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading procurement consulting firm, recognized for transforming supply chains and delivering exceptional value to our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality and professionalism in every engagement, delivering results that exceed expectations."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as trusted partners with our clients, building long-term relationships based on transparency and mutual success."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "$2.5B+", label: "Cost Savings Generated" },
    { number: "200+", label: "Global Clients" },
    { number: "50+", label: "Industries Served" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            About ProSupply Consulting
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a premier procurement and supply chain consulting firm with a proven track record 
            of helping organizations optimize their operations, reduce costs, and achieve strategic objectives 
            through innovative supply chain solutions.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900">
              Leading the Future of Supply Chain Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by industry veterans with decades of experience in procurement, supply chain management, 
              and strategic consulting, ProSupply Consulting has established itself as a trusted partner for 
              organizations seeking to transform their supply chain operations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experts combines deep industry knowledge with cutting-edge methodologies to deliver 
              customized solutions that address the unique challenges facing modern supply chains. From digital 
              transformation initiatives to risk management strategies, we help our clients build resilient, 
              efficient, and sustainable supply chain networks.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"></div>
                <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"></div>
                <div className="h-32 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}