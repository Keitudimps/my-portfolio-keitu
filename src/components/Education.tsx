import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Advanced Diploma",
      field: "Information and Communication Technology in Applications Development",
      institution: "Cape Peninsula University of Technology",
      period: "2025 (Currently)",
      status: "Current",
      description: "Advancing my knowledge in software development with focus on modern applications and emerging technologies."
    },
    {
      degree: "Diploma",
      field: "Information and Communication Technology in Applications Development",
      institution: "Cape Peninsula University of Technology",
      period: "2022 - 2024",
      status: "Completed",
      description: "Comprehensive program covering software development, system analysis, database design, and project management principles."
    },
    {
      degree: "Higher Certificate",
      field: "Information and Communication Technology",
      institution: "Cape Peninsula University of Technology",
      period: "2021",
      status: "Completed",
      description: "Foundation studies in ICT principles, programming fundamentals, and computer systems."
    },
    {
      degree: "National Senior Certificate",
      field: "Grade 12 (Admission to Bachelor Degree)",
      institution: "Hoerskool F H Odendaal",
      period: "2020",
      status: "Completed",
      description: "Secondary education with university admission qualification, strong foundation in mathematics and sciences."
    }
  ];

  // Count only completed qualifications
  const completedCount = education.filter(edu => edu.status !== "Current").length;

  const getStatusColor = (status: string) => {
    return status === 'Current' ? 'default' : 'secondary';
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-border/40 space-y-10 pl-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-stone-50 to-stone-100 border border-border/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative">
                  {/* Timeline marker */}
                  <div className="absolute -left-[1.65rem] top-6 w-4 h-4 rounded-full bg-sage-dark border-2 border-white shadow-md"></div>
                  
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="text-sage-dark mt-1">
                          <GraduationCap size={26} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold mb-2 text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <h3 className="text-earth-dark font-medium mb-1">
                            {edu.field}
                          </h3>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin size={16} />
                            <span>{edu.institution}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={getStatusColor(edu.status)} className="text-xs">
                          {edu.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="text-center mt-16 border-t border-border/40 pt-10">
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-dark">{completedCount}</div>
                <div className="text-sm text-muted-foreground">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-dark">5+</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;