import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, CheckCircle, Users } from "lucide-react";
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      icon: <Code className="w-5 h-5 text-muted-foreground" />,
      skills: ["Java Spring Boot", "HTML", "CSS", "Angular Framework", "Python", "JavaScript"],
      color: "languages",
      bgColor: "bg-gradient-to-r from-stone-100 to-stone-200"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5 text-muted-foreground" />,
      skills: ["Azure", "Postman", "GitHub", "Bruno", "IntelliJ", "Docker", "Linux Commands"],
      color: "accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Methodologies & Testing",
      icon: <CheckCircle className="w-5 h-5 text-muted-foreground" />,
      skills: ["Agile Software Development", "Scrum Framework", "API Testing", "Unit Testing"],
      color: "ocean",
      bgColor: "bg-ocean/10"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-muted-foreground" />,
      skills: ["Team Collaboration", "Problem Solving", "Communication", "Critical Thinking", "Adaptability", "Time Management"],
      color: "soft",
      bgColor: "bg-gradient-to-r from-slate-100 to-slate-200"
    }
  ];

  const getSkillVariant = (color: string) => {
    switch (color) {
      case 'languages':
        return 'default';
      case 'accent':
        return 'secondary';
      case 'ocean':
        return 'outline';
      case 'soft':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Skills & <span className="text-earth-dark">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through education, hands-on experience, and continuous learning.
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              What I bring to the table 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`${category.bgColor} border border-border/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}
                >
                  <CardHeader className="flex items-center gap-2">
                    {category.icon}
                    <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant={getSkillVariant(category.color)}
                            className={`text-sm py-2 px-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 hover:bg-opacity-90
                              ${category.color === 'languages' ? 'bg-stone-200 text-stone-800' : ''}
                              ${category.color === 'soft' ? 'bg-slate-200 text-slate-800' : ''}`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Section End Divider */}
    <div className="flex justify-center my-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="h-px w-24 bg-border" />
        <span className="text-xs uppercase tracking-widest">End of Skills</span>
        <span className="h-px w-24 bg-border" />
      </div>
    </div>
    </section>
  );
};

export default Skills;
