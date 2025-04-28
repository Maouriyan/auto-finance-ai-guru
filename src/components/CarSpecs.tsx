
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CarSpecs = () => {
  const specs = [
    { name: "Engine", value: "Dual Motor Electric" },
    { name: "Battery", value: "75 kWh" },
    { name: "Range", value: "330 miles" },
    { name: "0-60 mph", value: "4.8 seconds" },
    { name: "Top Speed", value: "135 mph" },
    { name: "Drive", value: "All-Wheel Drive" },
    { name: "Seating", value: "5 adults" },
    { name: "Cargo", value: "76 cu ft" },
  ];

  const features = [
    "Autopilot",
    "Premium Sound System",
    "Heated Seats",
    "Glass Roof",
    "Power Liftgate",
    "19\" Wheels",
    "Navigate on Autopilot",
    "Sentry Mode"
  ];

  return (
    <div className="container max-w-6xl py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Car images */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold">Vehicle Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1619867350067-769ca9596186?q=80&w=2574&auto=format&fit=crop" 
                alt="Tesla Model Y Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad41b9b648?q=80&w=2574&auto=format&fit=crop" 
                alt="Tesla Model Y Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This 2023 Tesla Model Y Long Range AWD is in excellent condition with only 5,200 miles. 
              The vehicle comes with the Premium Package, which includes a premium audio system, heated seats, 
              and a glass roof. The Pearl White exterior is paired with a Black interior, making for a 
              stunning combination. This vehicle has been well-maintained and is ready for a new owner.
            </p>
          </div>
        </div>
        
        {/* Specs and features */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Vehicle Specifications</h3>
              
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;
