
import React from 'react';
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { Button } from '@/components/ui/button';

const GuidePage = () => {
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

      <div className="space-y-8">
        <div className="bg-white dark:bg-navy-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Unlike traditional car shopping sites that simply list vehicles, we use advanced AI to provide insights
            that can save you thousands of dollars and countless hours of research.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">AI-Powered Deal Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Our AI evaluates each listing against thousands of similar vehicles to tell you if it's truly a good deal.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Fine Print Scanner</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  We automatically detect dealer-specific policies and financing requirements that might affect your purchase.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Total Cost of Ownership</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  See beyond the sticker price with AI predictions for maintenance, insurance, fuel, and depreciation.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">AI Purchase Agent</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Let our virtual concierge handle negotiations and paperwork for a stress-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-navy-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Choose your preferred way to shop based on your needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-4 text-center bg-blue-50 dark:bg-navy-900">
              <h3 className="font-semibold mb-2">I Know What I Want</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Go directly to listings with powerful filters and AI insights on each car.
              </p>
            </div>
            
            <div className="border border-purple-200 rounded-lg p-4 text-center bg-purple-50 dark:bg-purple-900/20">
              <h3 className="font-semibold mb-2">I Need Help</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Let our conversational AI guide you based on your needs and preferences.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 text-center bg-green-50 dark:bg-green-900/20">
              <h3 className="font-semibold mb-2">Compare Models</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Side-by-side comparison with AI insights on long-term value and ownership.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg">Start Your Car Search Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
