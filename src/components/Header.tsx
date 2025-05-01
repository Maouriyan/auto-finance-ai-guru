
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, CarFront, Menu, X, Bot, ChartBar } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const [showAiPrompt, setShowAiPrompt] = useState(false);

  // Only show the conversation prompt on the cars page
  const shouldShowAiPrompt = location.pathname === '/cars' && !showAiPrompt;
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <CarFront className="h-6 w-6 text-primary" />
              <span>Use AI to Buy</span>
            </Link>
            
            <NavigationMenu className="hidden md:flex ml-4">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/cars">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Browse Cars
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/compare">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Compare
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <Link to="/guide" className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <Bot className="h-6 w-6 text-purple-500 mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            AI Assistant
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Let our AI guide you through the car buying process with personalized advice.
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Financing AI</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get AI-powered loan recommendations
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Depreciation Analyzer</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Predict future resale values
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">AI Buying Agent</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Let our AI handle your purchase
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/guide">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      How it Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/cars" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Search className="h-4 w-4" />
                Search Cars
              </Button>
            </Link>
            
            <Button onClick={() => setShowAiPrompt(true)} variant="secondary" size="sm" className="hidden md:flex items-center gap-1">
              <Bot className="h-4 w-4" />
              Talk to AI
            </Button>
            
            <Link to="/compare" className="hidden md:flex">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChartBar className="h-4 w-4" />
                Compare
              </Button>
            </Link>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-6">
                    <CarFront className="h-6 w-6 text-primary" />
                    <span>Use AI to Buy</span>
                  </Link>
                  <Link to="/cars" className="py-2 text-lg">Browse Cars</Link>
                  <Link to="/compare" className="py-2 text-lg">Compare Models</Link>
                  <Link to="/guide" className="py-2 text-lg">How it Works</Link>
                  <div className="pt-4 mt-4 border-t">
                    <Button onClick={() => setShowAiPrompt(true)} className="w-full">
                      <Bot className="mr-2 h-5 w-5" />
                      Talk to AI Assistant
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      {/* AI Conversation Prompt for /cars page */}
      {shouldShowAiPrompt && (
        <div className="bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800">
          <div className="container py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
                <Bot className="h-5 w-5 text-purple-600 dark:text-purple-300" />
              </div>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-medium">What are you looking for today?</span> Let our AI assist you.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                I need help finding a car
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowAiPrompt(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
