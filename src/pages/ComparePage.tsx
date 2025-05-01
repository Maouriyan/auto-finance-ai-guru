
import React from 'react';
import { ChartBar } from "lucide-react";

const ComparePage = () => {
  return (
    <div className="container py-16 max-w-6xl">
      <div className="text-center mb-12">
        <div className="bg-green-50 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ChartBar className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">Compare Vehicles</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Select up to 5 vehicles to compare features, prices, performance, and AI-predicted ownership costs
        </p>
      </div>

      <div className="p-12 text-center bg-gray-100 dark:bg-navy-800 rounded-lg">
        <h2 className="text-2xl font-medium mb-4">Car Comparison Tool Coming Soon</h2>
        <p>Our advanced AI-powered comparison tool is under development.</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Check back soon for the ability to compare models side-by-side with AI insights.
        </p>
      </div>
    </div>
  );
};

export default ComparePage;
