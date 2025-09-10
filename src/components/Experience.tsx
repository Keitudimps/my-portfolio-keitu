import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "CSG",
      location: "Cape Town, South Africa",
      period: "2024 - Present",
      type: "Internship",
      description: "Contributing to software development projects, gaining hands-on experience with enterprise-level applications and collaborating with senior developers.",
      achievements: [
        "Developed and maintained web applications using modern frameworks",
        "Participated in code reviews and agile development processes",
        "Collaborated with cross-functional teams on project deliverables"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "SQL"]
    },
    {
      title: "Digital Associate",
      company: "Capaciti",
      location: "Cape Town, South Africa", 
      period: "2024 - Present",
      type: "Associate Program",
      description: "Participating in a comprehensive digital skills development program, focusing on modern software development practices and industry best practices.",
      achievements: [
        "Completed intensive training in full-stack development",
        "Worked on real-world projects with industry mentors",
        "Developed skills in agile methodologies and team collaboration"
      ],
      technologies: ["JavaScript", "Python", "React", "Node.js"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'default';
      case 'Associate Program':
        return 'secondary';
      case 'Education':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Professional <span className="text-earth-dark">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in software development through education, internships, and professional growth.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span className="font-medium text-sage-dark">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={getTypeColor(experience.type)}>
                        {experience.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-sage-dark mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;