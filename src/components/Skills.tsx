import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: ["Java Spring Boot", "HTML", "CSS", "Angular Framework", "Python", "JavaScript"],
      color: "primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Tools & Technologies",
      skills: ["Azure", "Postman", "GitHub", "Bruno", "IntelliJ", "Docker", "Linux Commands"],
      color: "accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Methodologies & Testing",
      skills: ["Agile Software Development", "Scrum Framework", "API Testing", "Unit Testing"],
      color: "ocean",
      bgColor: "bg-ocean/10"
    },
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Communication", "Critical Thinking", "Adaptability", "Time Management"],
      color: "sunset",
      bgColor: "bg-sunset/10"
    }
  ];

  const getSkillVariant = (color: string) => {
    switch (color) {
      case 'primary':
        return 'default';
      case 'accent':
        return 'secondary';
      case 'ocean':
        return 'outline';
      case 'sunset':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Skills & <span className="text-earth-dark">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through education, hands-on experience, and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`${category.bgColor} border-border/50 hover:shadow-elegant transition-all duration-300 group`}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant={getSkillVariant(category.color)}
                        className="text-sm py-2 px-3 transition-transform hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;