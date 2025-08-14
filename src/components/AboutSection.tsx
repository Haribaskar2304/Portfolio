import { Calendar, Phone, MapPin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

export const AboutSection = () => {
  const personalDetails = [
    { icon: Calendar, label: "Birthday", value: "23 April 2005" },
    { icon: Phone, label: "Phone", value: "+91 9600677429" },
    { icon: MapPin, label: "City", value: "Tirupathur, Tamil Nadu" },
    { icon: Mail, label: "Email", value: "haribaskar2304@gmail.com" },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="fade-in-up flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-80 h-100 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={profileImage}
                alt="Haribaskar R"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
        
        {/* About Content */}
        <div className="fade-in-up stagger-1">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Passionate About Data & Analytics
          </h3>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm Haribaskar R, an aspiring Data Analyst with a strong academic background in Information Technology and a growing expertise in data analytics. Currently in my final year at K.S. Rangasamy College of Technology, I have developed practical skills in Power BI, SQL, Excel, and Python. My academic journey has involved building interactive dashboards, conducting business data analysis, and generating meaningful insights from raw datasets. I enjoy working with data to uncover patterns, track performance, and support evidence-based decision-making.
          </p>
          
          <div className="space-y-4">
            {personalDetails.map((detail, index) => (
              <div 
                key={detail.label}
                className={`flex items-center space-x-4 fade-in-up stagger-${index + 2}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">{detail.label}:</span>
                  <span className="ml-2 text-muted-foreground">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};