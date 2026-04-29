import { useState } from "react";
import { ExternalLink, X, Eye } from "lucide-react";
import StockMarket from "../assets/project/StockMarket.jpg";
import BankingTransactionManagementSystem from "../assets/project/BTMS.jpg";
import BikeShop from "../assets/project/Bikeshop.jpg";
import car from "../assets/project/car.png";
import job from "../assets/project/job.png";
import PhonePe from "../assets/project/PhonePe.jpg";
import preview from "../assets/project/preview.jpg";

const projectCategories = [
  { id: "all", name: "All" },
  { id: "sql", name: "SQL" }, 
  { id: "powerbi", name: "Using Power BI" },
  { id: "excel", name: "Using Excel" }
];

const projects = [
  {
    id: 1,
    title: "Stock Market Analysis Report",
    category: "powerbi",
    description: "Developed a Power BI dashboard for stock data analysis using SQL, enabling trend insights, comparisons, and performance evaluation.",
    image: StockMarket,
    demoLink: "https://app.powerbi.com/reportEmbed?reportId=48a097aa-d056-4de2-8ecb-42e9b550d1f9&autoAuth=true&ctid=3d9987fa-6645-491d-9d3b-a53da0552d7c",
    technologies: ["KQL Database", "Power BI", "DAX"]
  },
  {
    id: 2,
    title: "Banking Transaction Management System",
    category: "sql",
    description: "Developed a SQL-based Banking Transaction System with automated transactions, audit logging, and advanced reporting capabilities.",
    image: BankingTransactionManagementSystem,
    demoLink: "https://github.com/Haribaskar2304/Banking-Transaction-Management-System.git",
    technologies: [ "PostgreSQL", "PgAdmin", "RDBMS"]
  },
  {
    id: 3,
    title: "Bike Shop Analysis",
    category: "powerbi",
    description: "Comprehensive analysis of bike shop sales data with interactive Power BI dashboards showing revenue trends, customer segments, and product performance.",
    image: BikeShop,
    demoLink: "https://app.powerbi.com/reportEmbed?reportId=2a8234b7-5ab0-47c0-8d7c-836dad09d37f&autoAuth=true&ctid=3d9987fa-6645-491d-9d3b-a53da0552d7c",
    technologies: ["Power BI", "SQL", "Excel"]
  },
  {
    id: 4,
    title: "Sales Performance Analysis",
    category: "powerbi",
    description: "Real-time sales dashboard analyzing KPIs, regional performance, and sales forecasting with automated reporting features.",
    image: preview,
    demoLink: "https://app.powerbi.com/reportEmbed?reportId=2429d4db-29ba-4751-8a24-ce0c3abf9755&autoAuth=true&ctid=3d9987fa-6645-491d-9d3b-a53da0552d7c",
    technologies: ["Power BI", "DAX", "Power Query"],
  },
  {
    id: 5,
    title: "PhonePe Analysis",
    category: "powerbi",
    description: "Digital payment trends analysis using PhonePe transaction data, revealing usage patterns and growth insights across different regions.",
    image: PhonePe,
    demoLink: "https://app.powerbi.com/reportEmbed?reportId=2713df69-bf3d-48d0-8efb-b38e666275d1&autoAuth=true&ctid=3d9987fa-6645-491d-9d3b-a53da0552d7c",
    technologies: ["Power BI", "Python", "JSON"]
  },
  {
    id: 6,
    title: "Car Sales Analysis",
    category: "excel",
    description: "Advanced Excel dashboard for automotive sales analysis with pivot tables, charts, and automated reporting for dealer performance tracking.",
    image: car,
    demoLink: "https://github.com/Haribaskar2304/Car-Kaggle-using-Excel.git",
    technologies: ["Excel", "VBA", "Pivot Tables"]
  },
  {
    id: 7,
    title: "Job in AI and Market Trends Analysis",
    category: "excel",
    description: "Market research analysis of AI job trends, salary benchmarks, and skill requirements using advanced Excel modeling and visualization.",
    image: job,
    demoLink: "https://github.com/Haribaskar2304/Job-in-AI-and-Market-Trend-Analysis.git",
    technologies: ["Excel", "Power Query", "Statistics"]
  }
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-container bg-section-bg/30">
      <h2 className="section-title">Featured Projects</h2>
      
      {/* Filter tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-card rounded-xl p-2 shadow-lg">
          {projectCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium fade-in-up stagger-${index + 1} ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-foreground hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`glass-card overflow-hidden hover:scale-105 transition-all duration-300 fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project image */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-project-overlay/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:scale-110 transition-transform"
                >
                  <Eye className="w-5 h-5 mr-2 inline" />
                  View Full Image
                </button>
              </div>
            </div>
            
            {/* Project content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <a href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:scale-105 transition"
              >
                Live Demo
              </a>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full p-2 hover:bg-background/80 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};  