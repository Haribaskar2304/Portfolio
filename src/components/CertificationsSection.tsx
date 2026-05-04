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
import course9 from "../assets/certification/course9.png";
import course10 from "../assets/certification/course10.png";
import course11 from "../assets/certification/course11.png";
import course12 from "../assets/certification/course12.png";

const certifications = [
  {
    id: 1,
    title: "Oracle Analytics Cloud 2025 Certified Professional",
    issuer: "Oracle(Oracle Cloud)",
    date: "2025",
    description: "Validates expertise in cloud-based analytics, dashboard creation, and data-driven decision-making using Oracle Analytics Cloud.",
    image: course1,
    credentialLink: "#"
  },  
  {
    id: 2,
    title: "Oracle Cloud Database Services 2025 Certified Professional",
    issuer: "Oracle(Oracle Cloud)",
    date: "2025",
    description: "Demonstrates skills in Oracle cloud database services, data management, and enterprise-level database operations.",
    image: course2,
    credentialLink: "#"
  },
  {
    id: 3,
    title: "PostgreSQL for Everybody (Specialization)",
    issuer: "University of Michigan (Coursera)",
    date: "2025",
    description: "Comprehensive training in PostgreSQL, database design, SQL queries, and data modeling.",
    image: course3,
    credentialLink: "#"
  },
  {
    id: 4,
    title: "Harnessing the Power of Data with Power BI",
    issuer: "Microsoft(Coursera)",
    date: "2025",
    description: "Focuses on building dashboards and extracting insights using Power BI tools and DAX.",
    image: course4,
    credentialLink: "#"
  },
  {
    id: 5,
    title: "Extract, Transform and Load Data in Power BI",
    issuer: "Microsoft(Coursera)",
    date: "2025",
    description: "Focuses on ETL processes and data transformation using Power Query in Power BI.",
    image:course5,
    credentialLink: "#"
  },
  {
    id: 6,
    title: "Concepts in SQL",
    issuer: "Coursera Project Network",
    date: "2024",
    description: "Covers SQL fundamentals including queries, filtering, and relational database concepts.",
    image: course6,
    credentialLink: "#"
  },
  {
    id: 7,
    title: "Data Analytics Job	Simulation",
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
    image: course8,
    credentialLink: "#"
  },
  {
    id: 9,
    title: "Introduction to Data Analytics",
    issuer: "IBM(Coursera)",
    date: "2024",
    description: "Covers fundamentals of data analysis, including data handling, visualization, and business insights.",
    image: course9,
    credentialLink: "#"
  },
  {
    id: 10,
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft(Coursera)",
    date: "2024",
    description: "Advanced Excel techniques for data analysis, pivot tables, and business intelligence dashboards.",
    image: course10,
    credentialLink: "#"
  },
  {
    id: 11,
    title: "Python Zero to Hero",
    issuer: "GUVI(HCL Partner)",
    date: "2025",
    description: "Advanced Excel techniques for data analysis, pivot tables, and business intelligence dashboards.",
    image: course11,
    credentialLink: "#"
  },
  {
    id: 12,
    title: "Introduction to MongoDB (For Students)",
    issuer: "MongoDB",
    date: "2024",
    description: "Introduces NoSQL concepts, MongoDB database structure, and basic data operations.",
    image: course12,
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