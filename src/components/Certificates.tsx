import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      title: "Advanced Diploma in ICT Applications Development",
      issuer: "Cape Peninsula University of Technology",
      date: "2023",
      type: "Diploma",
      description: "Comprehensive program covering software development, system analysis, database design, and project management.",
      skills: ["Java", "C#", ".NET", "Database Design", "Software Engineering"],
      credentialUrl: "#" // Replace with actual URL
    },
    {
      title: "Agile Software Development Certification",
      issuer: "Professional Development Institute",
      date: "2024",
      type: "Professional",
      description: "Specialized training in Agile methodologies, Scrum framework, and collaborative development practices.",
      skills: ["Scrum", "Agile", "Project Management", "Team Leadership"],
      credentialUrl: "#" // Replace with actual URL
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Capaciti Digital Academy",
      date: "2024",
      type: "Professional",
      description: "Intensive program covering modern web development stack, from frontend frameworks to backend services.",
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "JavaScript"],
      credentialUrl: "#" // Replace with actual URL
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      type: "Cloud Computing",
      description: "Foundation certification covering Azure cloud services, deployment models, and core solutions.",
      skills: ["Azure", "Cloud Computing", "DevOps", "Deployment"],
      credentialUrl: "#" // Replace with actual URL
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Diploma':
        return 'default';
      case 'Professional':
        return 'secondary';
      case 'Cloud Computing':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificates & <span className="bg-gradient-primary bg-clip-text text-transparent">Qualifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development through formal education and industry certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="text-primary mt-1">
                        <Award size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {certificate.title}
                        </CardTitle>
                        <p className="text-accent font-medium">{certificate.issuer}</p>
                      </div>
                    </div>
                    <Badge variant={getTypeColor(certificate.type)} className="text-xs">
                      {certificate.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{certificate.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {certificate.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary/20 hover:border-primary hover:bg-primary/10 w-full"
                  >
                    <a 
                      href={certificate.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Always expanding my knowledge and staying current with industry trends.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{certificates.length}</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;