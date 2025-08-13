import { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import course1 from "../assets/certification/course1.png"
import course2 from "../assets/certification/course2.png";
import course3 from "../assets/certification/course3.png";
import course4 from "../assets/certification/course4.png";
import course5 from "../assets/certification/course5.png";
import course6 from "../assets/certification/course6.png";
import course7 from "../assets/certification/course7.png";
import course8 from "../assets/certification/course8.png";

const certifications = [
  {
    id: 1,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2025",
    description: "Comprehensive certification covering data preparation, modeling, visualization, and analysis using Power BI.",
    image: course5,
    credentialLink: "#"
  },  {
    id: 2,
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2024",
    description: "Advanced Python programming for data analysis, including pandas, numpy, and machine learning libraries.",
    image: course3,
    credentialLink: "#"
  },
  {
    id: 3,
    title: "SQL Database Management",
    issuer: "Oracle",
    date: "2024",
    description: "Database design, query optimization, and advanced SQL techniques for business intelligence.",
    image: course8,
    credentialLink: "#"
  },
  {
    id: 4,
    title: "Data Analytics with Excel",
    issuer: "Microsoft",
    date: "2024",
    description: "Advanced Excel techniques for data analysis, pivot tables, and business intelligence dashboards.",
    image: course4,
    credentialLink: "#"
  },
  {
    id: 5,
    title: "Concepts in SQl",
    issuer: "coursera",
    date: "2024",
    description: "Data visualization and dashboard creation using Tableau for business analytics and reporting.",
    image:course1,
    credentialLink: "#"
  },
  {
    id: 6,
    title: "Machine Learning Fundamentals",
    issuer: "Coursera",
    date: "2025",
    description: "Introduction to machine learning algorithms, supervised and unsupervised learning techniques.",
    image: course2,
    credentialLink: "#"
  },
  {
    id: 7,
    title: "Data Analytics	Job	Simulation",
    issuer: "Deloitte",
    date: "2025",
    description: "Introduction to machine learning algorithms, supervised and unsupervised learning techniques.",
    image: course7,
    credentialLink: "#"
  },
  {
    id: 8,
    title: "Excel Basics for Data Analysis",
    issuer: "Coursera",
    date: "2024",
    description: "Advanced Excel techniques for data analysis, pivot tables, and business intelligence dashboards.",
    image: course6,
    credentialLink: "#"
  }
];

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`glass-card overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedCert(cert)}
          >
            {/* Certificate image */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2">
                <Award className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            {/* Certificate content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                {cert.title}
              </h3>
              
              <p className="text-primary font-semibold mb-2">
                {cert.issuer}
              </p>
              
              <p className="text-muted-foreground text-sm mb-4">
                Completed: {cert.date}
              </p>
              
              <p className="text-muted-foreground text-sm line-clamp-3">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Full screen certification image viewer */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(null);
              }}
              className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full p-2 hover:bg-background/80 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};