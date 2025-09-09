import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm Fereshteh's virtual assistant. Ask me anything about her experience, skills, projects, education, or how to get in touch!", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const getDetailedResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    // Experience related questions
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job') || lowerQuestion.includes('csg') || lowerQuestion.includes('capaciti')) {
      return "Fereshteh is currently working as a Software Developer Intern at CSG, where she develops and maintains web applications using modern frameworks and participates in agile development processes. She's also a Digital Associate at Capaciti, focusing on assistive AI development and ethics. She has hands-on experience with enterprise-level applications and cross-functional team collaboration.";
    }
    
    // Skills and technologies
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('tech') || lowerQuestion.includes('programming') || lowerQuestion.includes('java') || lowerQuestion.includes('angular') || lowerQuestion.includes('python')) {
      return "Fereshteh has strong skills in Java Spring Boot, Angular Framework, Python, JavaScript, HTML, and CSS. She's proficient with tools like Azure, Docker, GitHub, Postman, IntelliJ, and Linux Commands. She follows Agile Software Development and Scrum methodologies, and has experience with API Testing and Unit Testing. Her soft skills include team collaboration, problem-solving, communication, and critical thinking.";
    }
    
    // Education questions
    if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('diploma') || lowerQuestion.includes('university') || lowerQuestion.includes('cput')) {
      return "Fereshteh is currently pursuing an Advanced Diploma in ICT Applications Development at Cape Peninsula University of Technology (expected 2025). She completed her Diploma in ICT Applications Development (2022-2024) and Higher Certificate in ICT (2021) from the same institution. She also holds a National Senior Certificate from Hoerskool F H Odendaal (2020).";
    }
    
    // Projects
    if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('ui generator') || lowerQuestion.includes('resume builder') || lowerQuestion.includes('github')) {
      return "Fereshteh has built several impressive projects: 1) UI Generator - A dynamic tool that generates tailored designs and provides downloadable specs with React/HTML code, 2) Resume Builder AI - An intelligent tool for crafting professional CVs and cover letters optimized for ATS, 3) Author Portfolio for Stephen King - An immersive digital archive with biographical insights and interactive tools. You can find more projects on her GitHub.";
    }
    
    // Certificates
    if (lowerQuestion.includes('certificate') || lowerQuestion.includes('certification') || lowerQuestion.includes('course') || lowerQuestion.includes('learning')) {
      return "Fereshteh has earned certificates in Active Listening: Enhancing Communication Skills from Coursera, focusing on empathy and interpersonal communication. She also completed AI For Everyone by Andrew Ng, covering AI applications, business strategy, and ethics in AI. These complement her formal ICT qualifications.";
    }
    
    // Contact information
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('phone') || lowerQuestion.includes('hire') || lowerQuestion.includes('reach')) {
      return "You can contact Fereshteh via email at Keitutimpe@gmail.com or phone at 065 852 3666. She's based in Cape Town, South Africa. You can also connect with her on LinkedIn or check out her projects on GitHub. She's available for internships, junior developer positions, and project collaborations.";
    }
    
    // Location
    if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('cape town') || lowerQuestion.includes('south africa')) {
      return "Fereshteh is based in Cape Town, South Africa. She completed her studies at Cape Peninsula University of Technology and is currently working locally at CSG and Capaciti.";
    }
    
    // About/Background
    if (lowerQuestion.includes('about') || lowerQuestion.includes('background') || lowerQuestion.includes('who') || lowerQuestion.includes('journey')) {
      return "Fereshteh Keitumetse Dimpe is a motivated and result-driven Software Developer graduate. She discovered her passion for software development during her ICT studies at Cape Peninsula University of Technology. She's constantly learning new technologies, from AI/ML integration to modern frameworks, with a goal to build innovative applications that solve real-world problems and provide exceptional user experiences.";
    }
    
    // CV/Resume
    if (lowerQuestion.includes('cv') || lowerQuestion.includes('resume') || lowerQuestion.includes('download')) {
      return "You can download Fereshteh's CV directly from the homepage by clicking the 'Download CV' button. It contains detailed information about her experience, education, skills, and projects.";
    }
    
    // AI/Technology interests
    if (lowerQuestion.includes('ai') || lowerQuestion.includes('artificial intelligence') || lowerQuestion.includes('machine learning') || lowerQuestion.includes('ml')) {
      return "Fereshteh has a strong interest in AI and machine learning. She's currently working on assistive AI development at Capaciti, focusing on the ethics that come with AI implementation. She's completed courses on AI applications and continues experimenting with AI/ML integration in her projects.";
    }
    
    // Default response for unmatched questions
    return "That's an interesting question! Based on the information available on this portfolio, I can tell you about Fereshteh's experience (CSG & Capaciti), skills (Java, Angular, Python), education (CPUT diplomas), projects (UI Generator, Resume Builder AI), certificates, or how to contact her. Feel free to ask about any specific aspect you'd like to know more about!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Enhanced bot response
    setTimeout(() => {
      const botResponse = getDetailedResponse(inputValue);
      const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-sage-dark hover:bg-sage-dark/90 shadow-elegant"
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-background/95 backdrop-blur-md border-border/50 shadow-elegant">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-foreground">Chat with Fereshteh's AI</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col h-full pb-4">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-sage-dark text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about experience, skills, projects..."
                className="flex-1 text-sm"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="bg-sage-dark hover:bg-sage-dark/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;