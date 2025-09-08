import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
      color: "text-primary"
    },
    {
      title: "Experience with AI development and chatbot creation",
      color: "text-accent"
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <contact.icon size={32} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                  {contact.href !== "#" ? (
                    <a 
                      href={contact.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Why Work With Me */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Why Work With Me?</h3>
              <div className="space-y-6">
                {workBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-2 h-2 rounded-full ${benefit.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-4">Ready to collaborate?</h4>
                <p className="text-muted-foreground mb-4">
                  Let's build something amazing together. I'm available for internships, 
                  junior developer positions, and exciting project collaborations.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary/20 hover:border-primary hover:bg-primary/10"
                  >
                    <a href="mailto:Keitutimpe@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-accent/20 hover:border-accent hover:bg-accent/10"
                  >
                    <a href="http://linkedin.com/in/fereshteh-keitumetse-dimpe-4a378b237" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;