import { useState } from "react";
import { Code, Database, BarChart3, Monitor } from "lucide-react";

const skillCategories = [
  { id: "all", name: "All", icon: Monitor },
  { id: "languages", name: "Languages & Databases", icon: Database },
  { id: "libraries", name: "Libraries", icon: Code },
  { id: "visualization", name: "Data Visualization Tools", icon: BarChart3 },
  { id: "tools", name: "Data Analysis Tools", icon: Monitor }
];

const skills = [
  { name: "Python", category: "languages", level: 100 },
  { name: "PostgreSQL", category: "languages", level: 100 },
  { name: "MySQL", category: "languages", level: 100 },
  { name: "Pandas", category: "libraries", level: 100 },
  { name: "NumPy", category: "libraries", level: 100 },
  { name: "Matplotlib", category: "libraries", level: 100 },
  { name: "Excel", category: "visualization", level: 100 },
  { name: "Tableau", category: "visualization", level: 100 },
  { name: "Power BI", category: "visualization", level: 100 },
  { name: "Jupyter", category: "tools", level: 100 },
  { name: "Git", category: "tools", level: 100 },
  { name: "VS Code", category: "tools", level: 100 }
];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills = activeFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills & Technologies</h2>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {skillCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 fade-in-up stagger-${index + 1} ${
              activeFilter === category.id
                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                : 'bg-card hover:bg-primary/10 text-foreground hover:scale-105'
            }`}
          >
            <category.icon className="w-5 h-5" />
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className={`glass-card p-6 hover:scale-105 transition-all duration-300 fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                {skill.name}
              </h3>
              {/* <span className="text-sm font-medium text-primary">
                {skill.level}%
              </span> */}
            </div>
            
            <div className="relative">
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};