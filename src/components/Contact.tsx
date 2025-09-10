import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';import {Download} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Keitutimpe@gmail.com",
      href: "mailto:Keitutimpe@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "065 852 3666",
      href: "tel:0658523666"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cape Town, South Africa",
      href: "#"
    }
  ];

  const workBenefits = [
    {
      title: "Full-stack development with Java Spring Boot & Angular",
      color: "text-sage-dark"
    },
    {
      title: "Experience with AI development and chatbot creation",
      color: "text-earth-dark"
    },
    {
      title: "Strong foundation in Agile methodologies and collaboration",
      color: "text-ocean"
    },
    {
      title: "Passionate about learning cutting-edge technologies",
      color: "text-sunset"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Let's <span className="text-earth-dark">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-sage-dark mb-4 flex justify-center">
                    <contact.icon size={32} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{contact.title}</h3>
                  {contact.href !== "#" ? (
                    <a 
                      href={contact.href}
                      className="text-muted-foreground hover:text-sage-dark transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Work With Me */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Why Work With Me?</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {workBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-2 h-2 rounded-full ${benefit.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-muted/30 rounded-lg p-8">
              <h4 className="font-semibold mb-4 text-foreground">Ready to collaborate?</h4>
              <p className="text-muted-foreground mb-6">
                Let's build something amazing together. I'm available for internships, 
                junior developer positions, and exciting project collaborations.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-sage-dark/30 text-sage-dark hover:border-sage-dark hover:bg-sage-dark/5"
                >
                  <a href="mailto:Keitutimpe@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-earth-dark/30 text-earth-dark hover:border-earth-dark hover:bg-earth-dark/5"
                >
                  <a href="http://linkedin.com/in/fereshteh-keitumetse-dimpe-4a378b237" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;