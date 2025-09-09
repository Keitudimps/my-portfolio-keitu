import { Code, Lightbulb, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience",
      color: "text-ocean"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams",
      color: "text-sunset"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About <span className="text-sage-dark">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Motivated and result-driven Software Developer graduate eager to contribute to 
              innovative projects and collaborate with dynamic teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-sage-dark">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I completing my Advanced Diploma in Information and Communication Techmology at Cape Peninsula 
                  University of Technology, started with  higher certficate in this same feild and that is where 
                  I discovered my passion for software development. 
                  I have worked as a Software Enginer Intern at CSG Internation and currently working as Digital 
                  Associate at Capaciti where I'm diving into assistive AI development and the ethics that come with it.
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning and experimenting with new technologies, from AI/ML integration 
                to modern frameworks like Angular and Spring Boot. My goal is to build innovative 
                applications that solve real-world problems and provide exceptional user experiences.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${highlight.color} mt-1`}>
                        <highlight.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;