import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import UIGeneratorImage from '@/assets/UI-generator-optimized.webp';
import resumeImage from '@/assets/resume-optimized.webp';
import AuthorImage from '@/assets/author-optimized.webp';

const Projects = () => {
  const projects = [
    {
      title: "UI Generator",
      description: "A dynamic tool that empowers users to define the UI they need, automatically generates tailored designs, and provides downloadable design specifications along with code in either React or HTML/CSS. It features a live preview for instant feedback and customization.",
      image: UIGeneratorImage,
      technologies: ["Vite","TypeScript","React","shadcn-ui","Tailwind CSS"],
      githubUrl: "https://github.com/Keitudimps/genmind-ui-ai-forge.git",
      liveUrl: "https://app--gen-mind-6309a9a3.base44.app/", 
    },
    {
      title: "Resume Builder AI",
      description: "An intelligent resume-building tool that helps users craft professional CVs, generate tailored cover letters, and ensure their documents are optimized for Applicant Tracking Systems (ATS). Users can choose from multiple design templates to suit their style and download their final documents with ease.",
      image: resumeImage,
      technologies: ["Base 44"],
      githubUrl: "", // No code repo for this one
      liveUrl: "https://app--resu-mate-1dd2b2b1.base44.app/Home", 
    },
    {
      title: "Author Portfolio - Stephen King",
      description: "An immersive digital archive of Stephen King's literary universe. This portfolio features a curated selection of his novels, short stories, and screen adaptations, organized by genre and chronology. It includes biographical insights, thematic breakdowns, and interactive tools for fans and researchers.",
      image: AuthorImage,
      technologies: ["TypeScript","React", "CSS"],
      githubUrl: "https://github.com/Keitudimps/king-kingdom-chronicles.git",
      liveUrl: "https://king-kingdom-chronicles.lovable.app/", 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
               <span className="text-sage-dark">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my ability to build full-stack applications with modern technologies and best practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 group bg-card"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="300"
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
                    {project.githubUrl && (
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
                    )}
                    
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-sage-dark hover:bg-sage-dark/90 text-white transition-colors"
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
            <h3 className="text-2xl font-bold mb-8 text-foreground">More Projects</h3>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-sage-dark/30 text-sage-dark hover:border-sage-dark hover:bg-sage-dark/5"
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
      {/* Section End Divider */}
    <div className="flex justify-center my-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="h-px w-24 bg-border" />
        <span className="text-xs uppercase tracking-widest">End of Projects</span>
        <span className="h-px w-24 bg-border" />
      </div>
    </div>
    </section>
  );
};

export default Projects;