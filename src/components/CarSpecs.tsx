
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, BatteryCharging, Gauge, Lightbulb, Shield, Cpu } from "lucide-react";

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

  const features = {
    technology: [
      "15-inch Touchscreen",
      "Premium Sound System",
      "Wireless Phone Charging",
      "Mobile App Control",
      "Keyless Entry",
      "Wi-Fi and LTE Connectivity",
      "Navigate on Autopilot",
      "Sentry Mode"
    ],
    safety: [
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Collision Avoidance",
      "Lane Departure Warning",
      "Blind Spot Monitoring",
      "360° Camera Coverage",
      "Parking Sensors",
      "HEPA Air Filtration"
    ],
    comfort: [
      "Heated Front & Rear Seats",
      "Heated Steering Wheel",
      "Power Adjustable Front Seats",
      "Glass Roof",
      "Dual Zone Climate Control",
      "Power Liftgate",
      "Ambient Lighting",
      "Premium Interior Materials"
    ],
    performance: [
      "Sport Mode",
      "Regenerative Braking",
      "Adaptive Suspension",
      "Performance Wheels",
      "Heat Pump",
      "19\" Wheels",
      "Low Center of Gravity",
      "Aerodynamic Design"
    ]
  };

  return (
    <div className="container max-w-6xl py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Car images */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold">Vehicle Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-5176256608424058506-1024x768.jpeg" 
                alt="Tesla Model Y Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-2981292076413387389-1024x768.jpeg" 
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
          
          {/* Features tabs */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <List className="mr-2 h-5 w-5" />
              Features & Equipment
            </h3>
            <Tabs defaultValue="technology">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="comfort">Comfort</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technology" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Cpu className="h-5 w-5 text-blue-500 mr-2" />
                      <h4 className="font-medium">Technology Features</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {features.technology.map((feature, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="safety" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Shield className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="font-medium">Safety Features</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {features.safety.map((feature, index) => (
                        <Badge key={index} variant="outline" className="bg-red-50 border-red-200 text-red-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="comfort" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="h-5 w-5 text-amber-500 mr-2" />
                      <h4 className="font-medium">Comfort Features</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {features.comfort.map((feature, index) => (
                        <Badge key={index} variant="outline" className="bg-amber-50 border-amber-200 text-amber-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performance" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Gauge className="h-5 w-5 text-emerald-500 mr-2" />
                      <h4 className="font-medium">Performance Features</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {features.performance.map((feature, index) => (
                        <Badge key={index} variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <BatteryCharging className="h-5 w-5 text-green-500 mr-2" />
                  <h4 className="font-medium">Charging Capabilities</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="text-gray-500">Supercharging</div>
                  <div className="font-medium text-right">Yes</div>
                  
                  <div className="text-gray-500">Home Charging</div>
                  <div className="font-medium text-right">11.5 kW max</div>
                  
                  <div className="text-gray-500">Charge Port</div>
                  <div className="font-medium text-right">Tesla Connector</div>
                  
                  <div className="text-gray-500">10-80% Charge</div>
                  <div className="font-medium text-right">~30 minutes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;
