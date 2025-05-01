
import React from 'react';
import { HelpCircle, CheckCircle2, Bot, ShieldCheck, DollarSign, AlertCircle, TrendingDown, Zap } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

const GuidePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-16 max-w-4xl">
      <div className="text-center mb-12">
        <div className="bg-purple-50 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">How to Get the Most Out of Our Site</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Discover how our AI-powered platform transforms your car buying experience
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Zap className="mr-2 h-6 w-6 text-yellow-500" />
            What Makes Us Different
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Unlike traditional car shopping sites that simply list vehicles, we use advanced AI to provide insights
            that can save you thousands of dollars and countless hours of research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-navy-800 overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI Dealer Policy Scanner</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Our AI analyzes dealer contracts and policies to detect hidden fees, mandatory financing requirements, 
                      and other fine print issues that could affect your purchase.
                    </p>
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                      <div className="flex items-center">
                        <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-red-700 dark:text-red-400 text-sm font-medium">Example Alert: Mandatory Financing Required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-navy-800 overflow-hidden">
              <div className="h-2 bg-green-500"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI Financial Advisor</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Get personalized loan options, interest rate benchmarks, and see the full breakdown of ownership costs
                      including insurance, maintenance, and depreciation.
                    </p>
                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Monthly:</span>
                        <span className="font-semibold">$650/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-navy-800 overflow-hidden">
              <div className="h-2 bg-blue-500"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Depreciation Predictor</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Our AI predicts how much your vehicle will be worth in the future, allowing you to 
                      make smarter long-term financial decisions and avoid excessive depreciation.
                    </p>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md flex justify-between items-center">
                      <span className="text-sm text-gray-600">3-Year Value:</span>
                      <span className="text-sm font-semibold">$22,800 (-25%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-navy-800 overflow-hidden">
              <div className="h-2 bg-amber-500"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
                    <Bot className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI Purchase Agent</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Let our virtual concierge handle negotiations and paperwork for a stress-free experience. 
                      Our AI agent will work to get you the best possible terms.
                    </p>
                    <div className="mt-4">
                      <Button size="sm" variant="outline" className="w-full">
                        Let Us Be Your Agent
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Choose your preferred way to shop based on your needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-6 text-center bg-blue-50 dark:bg-navy-900 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-3">I Know What I Want</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Go directly to listings with powerful filters and AI insights on each car.
              </p>
              <Button 
                variant="outline"
                onClick={() => navigate('/cars')}
                className="w-full border-blue-200 dark:border-blue-800"
              >
                Browse Cars
              </Button>
            </div>
            
            <div className="border border-purple-300 dark:border-purple-700 rounded-lg p-6 text-center bg-purple-50 dark:bg-purple-900/20 hover:shadow-md transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Recommended
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-3">I Need Help</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Let our conversational AI guide you based on your needs and preferences.
              </p>
              <Button 
                className="w-full"
                onClick={() => navigate('/')}
              >
                Talk to AI Assistant
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 text-center bg-green-50 dark:bg-green-900/20 hover:shadow-md transition-shadow">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBar className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-3">Compare Models</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Side-by-side comparison with AI insights on long-term value and ownership.
              </p>
              <Button 
                variant="outline"
                onClick={() => navigate('/compare')}
                className="w-full border-green-200 dark:border-green-800"
              >
                Compare Cars
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-navy-900 dark:to-purple-900/20 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-20 h-20 bg-white dark:bg-navy-800 rounded-full shadow-lg flex items-center justify-center">
                <Bot className="h-10 w-10 text-purple-500" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Experience the Future of Car Buying</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our AI-powered platform combines cutting-edge technology with automotive expertise to give you 
                unprecedented insights and ease when shopping for your next vehicle.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.8)] transition-all duration-300"
                onClick={() => navigate('/')}
              >
                Start Your Car Search Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuidePage;
