import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  const getStatusColor = (status: string) => {
    return status === 'Current' ? 'default' : 'secondary';
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-sage-dark mt-1">
                        <GraduationCap size={24} />
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
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-dark">{education.length}</div>
                <div className="text-sm text-muted-foreground">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-dark">5+</div>
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