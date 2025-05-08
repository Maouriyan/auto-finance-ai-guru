
import React, { useState, useEffect } from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface AIChatMascotProps {
  className?: string;
}

const AIChatMascot = ({ className }: AIChatMascotProps) => {
  const [message, setMessage] = useState<string | null>("Need help with this vehicle?");
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("");
  
  useEffect(() => {
    const handleScroll = () => {
      // Get all major sections
      const sections = document.querySelectorAll('h2, [data-section]');
      
      // Find which section is currently in view
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          // Get the section title or data attribute
          const sectionTitle = section.getAttribute('data-section') || 
                              (section as HTMLElement).innerText;
          
          if (sectionTitle && currentSection !== sectionTitle) {
            setCurrentSection(sectionTitle);
            
            // Set contextual message based on section
            switch (sectionTitle) {
              case "About This Vehicle":
                setMessage("Ask me about this vehicle's features!");
                break;
              case "AI Policy Scanner Results":
                setMessage("Want me to explain these policy terms?");
                break;
              case "Features & Options":
                setMessage("Need help understanding these features?");
                break;
              case "Specifications":
                setMessage("Curious about the specs? I can help!");
                break;
              case "Vehicle History":
                setMessage("Let me explain the vehicle's history");
                break;
              case "AI Financial Analysis":
                setMessage("Need help with the financial analysis?");
                break;
              default:
                setMessage("Need help with this vehicle?");
            }
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out",
        className
      )}
    >
      {isMinimized ? (
        <Button 
          onClick={handleMinimize}
          className="h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl"
        >
          <Bot className="h-6 w-6" />
        </Button>
      ) : (
        <div className="flex flex-col bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-xl animate-scale-in">
          <div className="bg-purple-600 p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">AI Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost" 
                size="icon"
                className="h-6 w-6 text-white hover:bg-purple-700 rounded-full" 
                onClick={handleMinimize}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4 max-w-xs">
            <div className="flex gap-3 mb-2">
              <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 text-purple-600 dark:text-purple-300" />
              </div>
              <p className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-sm">
                {message || "How can I help you with this vehicle?"}
              </p>
            </div>
            <Button
              size="sm" 
              className="w-full mt-2 bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                // Here you would typically open the full chat interface
                const chatButton = document.querySelector('[aria-label="Chat with AI Assistant"]');
                if (chatButton instanceof HTMLElement) {
                  chatButton.click();
                }
              }}
            >
              Ask a question
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatMascot;
