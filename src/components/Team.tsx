import { Card } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Team() {
  const teamMembers = [
    {
      name: "Michael Chen",
      title: "Managing Partner & CEO",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzQwNjcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "25+ years in supply chain leadership roles at Fortune 500 companies. Former VP of Global Procurement at tech giants, specializing in strategic sourcing and supplier relationship management.",
      expertise: ["Strategic Sourcing", "Supplier Management", "Cost Reduction", "Digital Transformation"]
    },
    {
      name: "Sarah Rodriguez",
      title: "Partner & Head of Operations",
      image: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NDMzMTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Expert in operational excellence and supply chain optimization with 20+ years of consulting experience. Led transformation projects for major manufacturing and retail companies.",
      expertise: ["Operations Strategy", "Process Improvement", "Lean Six Sigma", "Change Management"]
    },
    {
      name: "David Thompson",
      title: "Senior Director, Analytics",
      image: "https://images.unsplash.com/photo-1628886453497-8c0b5b07b0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc0MDg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Data science and analytics leader with expertise in supply chain modeling and predictive analytics. PhD in Operations Research with extensive experience in AI-driven solutions.",
      expertise: ["Data Analytics", "Predictive Modeling", "AI/ML Solutions", "Performance Optimization"]
    },
    {
      name: "Jennifer Park",
      title: "Principal Consultant, Risk Management",
      image: "https://images.unsplash.com/photo-1722957728897-d48d7c5fa82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1NzQxMjAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Risk management specialist with deep expertise in supply chain resilience and business continuity. Former head of risk at global logistics companies with crisis management experience.",
      expertise: ["Risk Assessment", "Business Continuity", "Supplier Audits", "Crisis Management"]
    },
    {
      name: "Robert Kumar",
      title: "Director, Digital Solutions",
      image: "https://images.unsplash.com/photo-1731682252070-1d8f8c2ef1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc0NDg4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Technology and digital transformation expert specializing in supply chain digitization. Former CTO at supply chain technology startups with proven track record in system implementations.",
      expertise: ["Digital Strategy", "Technology Integration", "Automation", "System Implementation"]
    },
    {
      name: "Lisa Wagner",
      title: "Senior Manager, Sustainability",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDJ8fHx8MTc1NzQxNjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Sustainability and ESG expert focused on building responsible supply chains. Environmental engineer with 15+ years experience helping companies achieve sustainability goals.",
      expertise: ["Sustainable Sourcing", "ESG Compliance", "Carbon Footprint", "Circular Economy"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the experienced professionals who bring decades of industry expertise 
            and proven track records to help transform your supply chain operations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.title}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Combined Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Industry Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}