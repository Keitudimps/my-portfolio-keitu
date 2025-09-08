import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskManagementImage from '@/assets/task-management-project.jpg';
import weatherImage from '@/assets/weather-project.jpg';
import portfolioImage from '@/assets/portfolio-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      image: taskManagementImage,
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and data visualization.",
      image: weatherImage,
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design.",
      image: portfolioImage,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Keitudimps",
      liveUrl: "#", // Replace with actual URL
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my ability to build full-stack applications with modern technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 group bg-card">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs font-medium bg-muted hover:bg-muted/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
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

          {/* More Projects Button */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">More Projects</h3>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              <a 
                href="https://github.com/Keitudimps?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;