import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const handleDownloadCV = () => {
    // This would trigger the CV download
    // For now, we'll just show an alert
    alert('CV download would be triggered here. Please add your PDF file to the public folder.');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Fereshteh
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Keitumetse Dimpe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Motivated and result-driven Software Developer graduate eager to contribute to 
                innovative projects and collaborate with dynamic teams. I bring passion for 
                problem-solving and dedication to every project.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              
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
                  GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-accent/20 hover:border-accent hover:bg-accent/10"
              >
                <a 
                  href="http://linkedin.com/in/fereshteh-keitumetse-dimpe-4a378b237" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Study</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ocean">Cape Town</div>
                <div className="text-sm text-muted-foreground">Based</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Fereshteh's workspace - a modern development environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;