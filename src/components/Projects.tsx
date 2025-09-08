import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with Angular and Spring Boot, featuring user authentication, product management, and payment integration.",
      technologies: ["Angular", "Spring Boot", "Java", "MySQL", "REST API"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
      status: "Completed"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates, built using modern web technologies and focusing on user experience.",
      technologies: ["JavaScript", "HTML/CSS", "Python", "SQLite"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
      status: "In Progress"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, data visualization, and responsive design principles.",
      technologies: ["JavaScript", "API Integration", "HTML/CSS", "Chart.js"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills, built with modern web technologies and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/20 hover:border-primary hover:bg-primary/10"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-accent/20 hover:border-accent hover:bg-accent/10"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/20 hover:border-primary hover:bg-primary/10"
            >
              <a 
                href="https://github.com/Keitudimps?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;