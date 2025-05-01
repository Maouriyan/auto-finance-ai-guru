import React from 'react';
import { Bot, HelpCircle, ArrowRight, Calendar, Lightbulb, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from '@/components/Footer';

const GuidePage = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How to Get the Most from Use AI to Buy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform revolutionizes car buying with transparency, smart insights, and personalized assistance.
          </p>
        </div>
        
        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ai-features">AI Features</TabsTrigger>
            <TabsTrigger value="buying-process">Buying Process</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-purple-500 mr-2" />
                  Welcome to a Smarter Way to Buy Cars
                </h2>
                <p className="mb-6">
                  Use AI to Buy is designed to eliminate the frustration, confusion, and anxiety typically associated with car buying. Our AI-powered platform provides unmatched transparency, personalized insights, and guidance throughout your car buying journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Our AI analyzes thousands of data points to provide you with the most accurate and relevant information.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Transparent Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We expose hidden fees, dealer tactics, and fine print that most platforms miss or hide.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">End-to-End Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        From research to financing to negotiation, we're with you at every step of your car buying journey.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Three Ways to Start Your Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>I Know What I Want</CardTitle>
                      <CardDescription>Direct access to inventory</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        If you already know the make and model you're looking for, start here to browse specific vehicles with our AI insights on each listing.
                      </p>
                      <Button className="w-full">
                        Browse Cars <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader className="bg-purple-50 dark:bg-purple-900/20 rounded-t-lg">
                      <CardTitle>I Need Your Help</CardTitle>
                      <CardDescription>AI-guided assistance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Not sure what car is right for you? Our AI will ask you the right questions and guide you to the perfect vehicle based on your needs.
                      </p>
                      <Button variant="secondary" className="w-full">
                        Get AI Guidance <Bot className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>I Want to Compare</CardTitle>
                      <CardDescription>Side-by-side comparison</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Compare up to 5 different vehicles side by side with detailed specifications, pricing, and AI-powered insights on each model.
                      </p>
                      <Button variant="outline" className="w-full">
                        Compare Models <ChartBar className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-features">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Our Unique AI Features</h2>
              <p className="text-lg">
                Our AI-powered tools go beyond basic car information to give you a complete understanding of your purchase.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-200 dark:border-amber-800/30">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Bot className="h-5 w-5 text-amber-500 mr-2" />
                    AI Dealer Policy Scanner
                  </h3>
                  <p className="mb-4">
                    Our AI analyzes the fine print on dealer listings to expose hidden fees, mandatory add-ons, and financing requirements that might impact the advertised price.
                  </p>
                  <div className="bg-white dark:bg-amber-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Example Findings:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">!</span>
                        <span>Mandatory dealer financing required for advertised price</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">!</span>
                        <span>Non-negotiable $1,295 protection package added to all vehicles</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800/30">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Bot className="h-5 w-5 text-blue-500 mr-2" />
                    AI Financial Advisor
                  </h3>
                  <p className="mb-4">
                    Get a complete financial analysis of your purchase, including predicted loan options, monthly costs, and whether the price represents a good deal.
                  </p>
                  <div className="bg-white dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Features Include:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</span>
                        <span>Complete monthly cost breakdown (loan, insurance, maintenance, fuel)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</span>
                        <span>Interest rate benchmarks based on current market conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-200 dark:border-green-800/30">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Bot className="h-5 w-5 text-green-500 mr-2" />
                    Depreciation & Resale Predictor
                  </h3>
                  <p className="mb-4">
                    Our AI forecasts how your vehicle's value will change over time, helping you understand the long-term financial impact of your purchase.
                  </p>
                  <div className="bg-white dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</span>
                        <span>Predicted value at 3, 5, and 7 years of ownership</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</span>
                        <span>Comparison to similar vehicles in terms of value retention</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-200 dark:border-purple-800/30">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Bot className="h-5 w-5 text-purple-500 mr-2" />
                    AI Buying Agent
                  </h3>
                  <p className="mb-4">
                    Let our AI handle the purchase process for you, from negotiation to paperwork to delivery coordination.
                  </p>
                  <div className="bg-white dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">How It Works:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">1</span>
                        <span>Select a vehicle and authorize our AI agent to act on your behalf</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">2</span>
                        <span>Our team handles negotiations and paperwork using AI-driven insights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">3</span>
                        <span>Complete your purchase with minimal effort and maximum savings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="buying-process">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">The AI-Enhanced Buying Process</h2>
              <p className="text-lg">
                Learn how our AI tools streamline each step of your car buying journey.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Research and Discovery</CardTitle>
                  <CardDescription>Find the right car with AI assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    Use our AI assistant to explore vehicle options based on your needs and preferences.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Get personalized recommendations</li>
                    <li>Compare different models side by side</li>
                    <li>Understand key features and specifications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Financial Analysis</CardTitle>
                  <CardDescription>Understand the true cost of ownership</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    Our AI financial advisor provides a complete breakdown of your potential purchase.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Estimate monthly payments</li>
                    <li>Benchmark interest rates</li>
                    <li>Factor in insurance, maintenance, and fuel costs</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Dealer Insights</CardTitle>
                  <CardDescription>Expose hidden fees and policies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    Our AI policy scanner reveals dealer tactics that could impact your final price.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Detect mandatory financing requirements</li>
                    <li>Identify non-negotiable add-ons</li>
                    <li>Understand the fine print before you commit</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step 4: Negotiation and Purchase</CardTitle>
                  <CardDescription>Let our AI agent get you the best deal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    Authorize our AI buying agent to handle the purchase process for you.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>AI-powered negotiation</li>
                    <li>Paperwork and delivery coordination</li>
                    <li>Maximum savings with minimal effort</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="faq">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>How does the AI assistant work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our AI assistant uses natural language processing to understand your needs and provide personalized recommendations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Is my data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We use industry-standard security measures to protect your data and privacy.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>How accurate are the AI predictions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our AI models are trained on vast datasets and continuously refined to provide the most accurate insights possible.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>How do I authorize the AI buying agent?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Simply select a vehicle and follow the prompts to authorize our AI agent to act on your behalf.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="bg-navy-900 text-white py-16">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Car Buying Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of car buying with our AI-powered platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 text-lg shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.8)]"
              size="lg"
            >
              <Bot className="mr-2 h-6 w-6" />
              Talk to Our AI Assistant
            </Button>
            <Button variant="outline" size="lg" className="px-6 py-6 text-lg border-gray-500 text-white hover:bg-white/10">
              Browse Cars <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GuidePage;
