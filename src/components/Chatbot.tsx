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
      text: "Hi! I'm Fereshteh's virtual assistant. How can I help you learn more about her skills and experience?", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Simple bot responses
    setTimeout(() => {
      let botResponse = "Thank you for your question! ";
      
      if (inputValue.toLowerCase().includes('experience')) {
        botResponse += "Fereshteh has experience as a Software Developer Intern at CSG and is currently a Digital Associate at Capaciti. She's passionate about AI/ML and modern frameworks.";
      } else if (inputValue.toLowerCase().includes('skills') || inputValue.toLowerCase().includes('tech')) {
        botResponse += "She's skilled in Java Spring Boot, Angular, Python, JavaScript, Docker, and Agile methodologies. Check out the Skills section for more details!";
      } else if (inputValue.toLowerCase().includes('contact') || inputValue.toLowerCase().includes('hire')) {
        botResponse += "You can reach out through the Contact form below or connect on LinkedIn. She's based in Cape Town and open to opportunities!";
      } else if (inputValue.toLowerCase().includes('projects')) {
        botResponse += "She's built several projects including a UI Generator, Resume Builder AI, and an Author Portfolio. Each demonstrates different technical skills!";
      } else {
        botResponse += "That's a great question! Feel free to explore the different sections of her portfolio or ask about her skills, experience, or projects.";
      }

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
                placeholder="Ask about skills, projects..."
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