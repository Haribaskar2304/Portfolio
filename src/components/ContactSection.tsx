import { useState } from "react";
import { Mail, Linkedin, Github, MessageSquare, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "haribaskar2304@gmail.com",
    link: "mailto:haribaskar2304@gmail.com"
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 9600677429",
    link: "https://wa.me/919600677429"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/hari-baskar-r?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwgUjZ3eFRlGaR8ju%2B%2FmTtg%3D%3D"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    link: "https://github.com/Haribaskar2304"
  },
  
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-container bg-section-bg/30">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Let's Connect
          </h3>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to contribute to data-driven solutions. Feel free to reach out 
            through any of the channels below.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 p-4 glass-card hover:scale-105 transition-all duration-300 fade-in-up stagger-${index + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{info.label}</h4>
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="fade-in-up stagger-1">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};