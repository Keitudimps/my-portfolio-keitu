import { useState, useEffect } from 'react';
import {Download , Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image-optimized.webp';

const Hero = () => {
  const text = "Aspiring Software Engineer";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setIsTyping(false); // typing finished
      }
    }, 100); // typing speed in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Hi, I'm{' '}
                <span className="text-sage-dark">
                  Fereshteh
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-earth-dark">
                Keitumetse Dimpe
              </h2>

              {/* Typing animation */}
              <h3 className="text-lg md:text-xl text-foreground h-6">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </h3>



              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Motivated and result-driven Software Developer graduate eager to contribute to
                innovative projects and collaborate with dynamic teams. I bring passion for
                problem-solving and dedication to every project.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-sage-dark hover:bg-sage-dark/90 text-white transition-all duration-300"
                size="lg"
              >
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>

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
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-earth-dark/30 text-earth-dark hover:border-earth-dark hover:bg-earth-dark/5"
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
                <div className="text-2xl font-bold text-sage-dark">7+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-dark">5+</div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-elegant w-5/6 mx-auto">
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
