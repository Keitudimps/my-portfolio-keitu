import { useRef, useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin,Download, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Keitutimpe@gmail.com",
      href: "mailto:Keitutimpe@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "065 852 3666",
      href: "tel:0658523666",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cape Town, South Africa",
      href: "#",
    },
  ];

  const workBenefits = [
    {
      title: "Full-stack development with Java Spring Boot & Angular",
    },
    {
      title: "Experience with AI development and chatbot creation",
    },
    {
      title: "Strong foundation in Agile methodologies and collaboration",
    },
    {
      title: "Passionate about learning cutting-edge technologies",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      await axios.post("https://formspree.io/f/xblawazr", formData, {
        headers: { Accept: "application/json" },
      });
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Let&apos;s <span className="text-earth-dark">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects.
            Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row md:space-x-12 gap-10">
          {/* Contact Cards */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col gap-6 md:w-1/3 md:mt-14" // 👈 added margin-top for alignment
>
  {contactInfo.map((contact, index) => (
    <Card
      key={index}
      className="bg-card border border-border/30 shadow-md hover:shadow-xl hover:border-sage-dark/40 transition-all duration-300"
    >
      <CardContent className="p-6 flex items-center gap-5">
        <div className="p-4 rounded-xl bg-sage-light/20 text-sage-dark">
          <contact.icon size={28} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground">
            {contact.title}
          </h3>
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
        </div>
      </CardContent>
    </Card>
  ))}
</motion.div>


          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-sage-dark">
              Send Me a Message
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 bg-card p-8 rounded-2xl shadow-lg border border-border/30"
            >
              <input
                type="text"
                name="name"
                placeholder="Name & Surname"
                required
                className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-sage-dark focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-sage-dark focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-sage-dark focus:outline-none"
                rows={6}
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-sage-dark hover:bg-sage-dark/90 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300"
              >
                Send Message
              </Button>
              {status && (
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Why Work With Me */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-24"
        >
          <h3 className="text-3xl font-semibold mb-10 text-center text-foreground">
            Why Work With Me?
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {workBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-muted/20 p-5 rounded-xl hover:shadow-md transition"
              >
                <CheckCircle className="text-sage-dark mt-1" size={22} />
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-muted/40 rounded-2xl p-10 shadow-md">
            <h4 className="font-semibold mb-4 text-foreground text-xl flex items-center justify-center gap-2">
              <Sparkles className="text-sage-dark" /> Ready to collaborate?
            </h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s build something amazing together. I&apos;m available
              for internships, junior developer positions, and exciting project collaborations.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-sage-dark/40 text-sage-dark hover:bg-sage-dark/10"
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
                className="border-earth-dark/40 text-earth-dark hover:bg-earth-dark/10"
              >
                <a
                  href="http://linkedin.com/in/fereshteh-keitumetse-dimpe-4a378b237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
