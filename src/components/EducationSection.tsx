import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export const EducationSection = () => {
  const coursework = [
    "Data Analytics",
    "Database Management Systems", 
    "Business Intelligence",
    "Machine Learning"
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 fade-in-up">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Institution Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            
            {/* Education Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                K S Rangasamy College of Technology
              </h3>
              
              <p className="text-xl text-primary font-semibold mb-4">
                Bachelor of Technology – Information Technology
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">2022 – 2026</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">CGPA: 7.36</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Tamil Nadu, India</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {coursework.map((course, index) => (
                    <span
                      key={course}
                      className={`skill-badge fade-in-up stagger-${index + 1}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};