import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Sedin Technologies",
    position: "Data Analyst Intern",
    duration: "July 2025 - Present",
    location: "Remote",
    achievements: [
      "SQL mastery and advanced database querying",
      "Data profiling and quality assessment",
      "Business reporting and dashboard creation",
      "Problem-solving with SQL, Excel, Python, Power BI"
    ],
    side: "left"
  },
  {
    id: 2,
    company: "Oasis Infobyte",
    position: "Data Analytics Intern",
    duration: "August 2024 - September 2024",
    location: "Remote",
    achievements: [
      "Exploratory Data Analysis on retail sales data",
      "Customer segmentation using advanced analytics",
      "Sentiment analysis and text mining",
      "Data cleaning, visualization, and GitHub publishing"
    ],
    side: "right"
  },
  {
    id: 3,
    company: "Oasis Infobyte",
    position: "Data Analytics Intern",
    duration: "June 2024 - July 2024",
    location: "Remote",
    achievements: [
      "Machine learning model development",
      "Statistical analysis and hypothesis testing",
      "Data visualization using Python libraries",
      "Research and development in data science"
    ],
    side: "left"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container bg-section-bg/30">
      <h2 className="section-title">Experience</h2>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Central timeline */}
        <div className="roadmap-line hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center ${
                exp.side === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div 
                className="roadmap-dot hidden md:block"
                style={{ top: '50%' }}
              ></div>
              
              {/* Experience card */}
              <div className={`w-full md:w-5/12 ${exp.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={`glass-card p-6 fade-in-up stagger-${index + 1} hover:scale-105 transition-transform duration-300`}>
                  {/* Company header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.position}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Duration and location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};