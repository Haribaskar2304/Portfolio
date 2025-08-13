import { BarChart3, Database, Code, FileSpreadsheet, Brain, TrendingUp, Monitor, Search } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Comprehensive data analysis to extract meaningful insights and patterns from complex datasets."
  },
  {
    icon: Database,
    title: "SQL for DBMS",
    description: "Expert database management and query optimization for efficient data retrieval and manipulation."
  },
  {
    icon: Code,
    title: "Python for Data Analysis",
    description: "Advanced Python programming for data processing, statistical analysis, and machine learning."
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Reporting",
    description: "Professional Excel dashboards and automated reporting solutions for business intelligence."
  },
  {
    icon: Brain,
    title: "Business Intelligence",
    description: "Strategic BI solutions to transform raw data into actionable business insights."
  },
  {
    icon: TrendingUp,
    title: "Data Visualization",
    description: "Interactive charts and visualizations that make complex data easy to understand."
  },
  {
    icon: Monitor,
    title: "Real-world Dashboards",
    description: "Custom dashboard development for real-time monitoring and performance tracking."
  },
  {
    icon: Search,
    title: "Exploratory Data Analysis",
    description: "In-depth EDA to discover hidden patterns and relationships in your data."
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-container bg-section-bg/30">
      <h2 className="section-title">My Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`service-card group fade-in-up stagger-${(index % 4) + 1}`}
          >
            {/* Default visible content */}
            <div className="service-card-content group-hover:-translate-y-full text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-12">
                {service.title}
              </h3>
            </div>
            
            {/* Hover content */}
            <div className="service-card-hover group-hover:translate-y-0">
              <div className="text-center">
                <service.icon className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};