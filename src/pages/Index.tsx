
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, HelpCircle, Bot, MessageCircle, ChartBar, Lightbulb } from "lucide-react";
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  const [showAiChat, setShowAiChat] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-50 dark:to-navy-900/50 -z-10"></div>
        
        {/* Content */}
        <div className="container px-4 md:px-6 space-y-10 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Use <span className="text-primary">AI</span> to Find Your Perfect Car
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Revolutionizing automotive shopping with AI-powered insights, transparent terms, and personalized recommendations.
            </p>
          </div>

          {/* Three Clear Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="feature-card group">
              <div className="mb-4 p-3 rounded-full bg-blue-50 dark:bg-navy-800 w-fit mx-auto">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">I Know What I Want</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
                Go straight to browsing with our advanced filters to find your exact match.
              </p>
              <Button className="w-full" onClick={() => navigate('/cars')}>
                Browse Cars <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="feature-card group border-primary">
              <div className="mb-4 p-3 rounded-full bg-purple-50 dark:bg-purple-900/20 w-fit mx-auto">
                <Bot className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">I Need Your Help</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
                Let our AI guide you through the car buying process with personalized recommendations.
              </p>
              <Button variant="secondary" className="w-full" onClick={() => setShowAiChat(true)}>
                Get AI Guidance <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="feature-card group">
              <div className="mb-4 p-3 rounded-full bg-green-50 dark:bg-green-900/20 w-fit mx-auto">
                <ChartBar className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold">Compare Models</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
                Easily compare up to 5 different models side by side to make an informed decision.
              </p>
              <Button className="w-full" variant="outline" onClick={() => navigate('/compare')}>
                Compare Cars <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Neon CTA Button */}
          <div className="pt-6">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.8)] transition-all duration-300"
              size="lg"
              onClick={() => navigate('/guide')}
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              How to Get the Most Out of Our Site
            </Button>
          </div>
        </div>
      </section>

      {/* AI Features Highlight Section */}
      <section className="bg-gray-50 dark:bg-navy-900/50 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">How Our AI Transforms Car Buying</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Revolutionary features that make us different from traditional car shopping sites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <div className="ai-badge mb-4">AI Powered</div>
              <h3 className="text-xl font-semibold">Dealer Policy Scanner</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                Automatically detects hidden fees and mandatory financing policies that other sites miss.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="ai-badge mb-4">AI Powered</div>
              <h3 className="text-xl font-semibold">Financial Advisor</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                Get personalized loan options and interest rate benchmarks based on your profile.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="ai-badge mb-4">AI Powered</div>
              <h3 className="text-xl font-semibold">Depreciation Predictor</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                See future resale values and depreciation trends before you buy.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="ai-badge mb-4">AI Powered</div>
              <h3 className="text-xl font-semibold">AI Buying Agent</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                Let our AI negotiate and finalize your purchase for the best possible terms.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistant CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-navy-900 dark:to-purple-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Let Our AI Assistant Guide You</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Would you like to talk to our AI avatar or explore yourself? Our intelligent assistant can help you navigate your car buying journey from start to finish.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button onClick={() => setShowAiChat(true)}>
                  <Bot className="mr-2 h-4 w-4" />
                  Talk to AI Assistant
                </Button>
                <Button variant="outline" onClick={() => navigate('/cars')}>
                  Explore Myself
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                <Bot className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA - AI Agent */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1 rounded-lg mb-8">
              <Lightbulb className="h-10 w-10 mx-auto text-yellow-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Purchase Support</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let us be your agent and finalize the purchase for you. Our AI-powered concierge handles negotiations, paperwork, and delivery coordination.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.8)]" size="lg">
              Let Us Be Your Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* AI Chat Modal */}
      {showAiChat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          {/* This would be replaced with a proper dialog component */}
          <div className="bg-white dark:bg-navy-800 rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">AI Assistant</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowAiChat(false)}>
                Close
              </Button>
            </div>
            <div className="bg-gray-50 dark:bg-navy-900 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
              <div className="flex gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <p className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg inline-block">
                    What are you looking for today? I can help you find the perfect car.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
