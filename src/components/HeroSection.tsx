import { useEffect, useState } from "react";
import { Github, Linkedin, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import resume from "../assets/Resume.pdf";

const roles = [
  "Data Analyst",
  "Power BI Developer"
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentRoleText = roles[currentRole];
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      <div className="section-container text-center relative z-10">
        <div className="fade-in-up">
          <p className="hero-subtitle mb-4">
            Final-year IT student turning raw data into actionable insights for better decisions.
          </p>
        </div>
        
        <div className="fade-in-up stagger-1">
          <h1 className="hero-title mb-8">
            Haribaskar R
          </h1>
        </div>
        
        <div className="fade-in-up stagger-2 mb-12">
          <div className="h-12 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-semibold text-primary">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1"></span>
            </span>
          </div>
        </div>
        
        <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('#projects')}
            className="btn-hero group"
          >
            <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View Projects
          </Button>
          
          <Button 
  variant="outline" 
  className="btn-outline-hero group"
  onClick={() => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resume; // Use the imported resume path
    link.download = 'Haribaskar_R_Resume.pdf'; // Set the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
  Download Resume
</Button>
        </div>
        
        <div className="fade-in-up stagger-4 flex justify-center space-x-6">
          <a
            href="https://github.com/Haribaskar2304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/hari-baskar-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};