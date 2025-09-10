import { Code, Lightbulb, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import graduationImage from '@/assets/graduation.jpeg';

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About <span className="text-sage-dark">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Motivated and result-driven Software Developer graduate eager to contribute to 
              innovative projects and collaborate with dynamic teams.
            </p>
          </div>

          {/* Main layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side → Graduation picture */}
            <div className="flex justify-center">
              <img 
                src={graduationImage}
                alt="Graduation" 
                className="mt-30 rounded-2xl shadow-lg w-full max-w-sm object-cover"
              />
            </div>

            {/* Right side → Text + Highlights */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-sage-dark">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am completing my Advanced Diploma in Information and Communication Technology at Cape Peninsula 
                  University of Technology, started with a Higher Certificate in this same field and that is where 
                  I discovered my passion for software development and curiosity of the theories behind these developments. 
                  I have worked as a Software Engineer Intern at CSG International where i played a role in intergrating an
                   old Java swing sytem into a web application using Angular and Spring Boot. I am a quick learner
                and currently working as a Digital Associate at Capaciti where I'm diving into assistive AI development 
                and the ethics that come with it.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning and experimenting with new technologies, from AI/ML integration 
                to modern frameworks like Angular and Spring Boot. My goal is to build innovative 
                applications that solve real-world problems and provide exceptional user experiences.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default About;
