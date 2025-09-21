import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const offices = [
    {
      city: "New York",
      address: "150 Broadway, Suite 1200\nNew York, NY 10038",
      phone: "+1 (212) 555-0123",
      email: "ny@prosupplyconsulting.com"
    },
    {
      city: "Chicago",
      address: "233 S Wacker Dr, Suite 8400\nChicago, IL 60606",
      phone: "+1 (312) 555-0456",
      email: "chicago@prosupplyconsulting.com"
    },
    {
      city: "San Francisco",
      address: "555 California St, Suite 5000\nSan Francisco, CA 94104",
      phone: "+1 (415) 555-0789",
      email: "sf@prosupplyconsulting.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your supply chain? Contact us today for a free consultation 
            and discover how we can help optimize your operations and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your supply chain challenges and how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6">
              <h3 className="text-xl text-gray-900 mb-4">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">Main Office</div>
                    <div className="text-gray-600">+1 (212) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">General Inquiries</div>
                    <div className="text-gray-600">info@prosupplyconsulting.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Office Locations */}
            <Card className="p-6">
              <h3 className="text-xl text-gray-900 mb-4">
                Office Locations
              </h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="font-medium text-gray-900">{office.city}</div>
                    </div>
                    <div className="text-sm text-gray-600 ml-6 whitespace-pre-line">
                      {office.address}
                    </div>
                    <div className="text-sm text-gray-600 ml-6">
                      {office.phone}
                    </div>
                    <div className="text-sm text-gray-600 ml-6">
                      {office.email}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="text-xl text-gray-900 mb-4">
                24/7 Emergency Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For urgent supply chain disruptions or critical issues affecting your operations.
              </p>
              <div className="space-y-2">
                <div className="text-gray-900">Emergency Hotline</div>
                <div className="text-gray-700">+1 (800) 555-URGENT</div>
                <div className="text-xs text-gray-500">
                  Available 24/7 for existing clients
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}