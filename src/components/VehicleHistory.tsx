
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, CarCrash, Bell, BriefcaseBusiness } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const VehicleHistory = () => {
  return (
    <div className="container max-w-6xl py-8" id="vehicle-history">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <Bot className="h-6 w-6 mr-2 text-purple-500" />
          <h2 className="text-2xl font-bold">AI Vehicle History Analysis</h2>
        </div>
        <div className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          VIN: 5YJ3E1EA9PF448931
        </div>
      </div>
      
      <Card className="border-purple-200 bg-purple-50/30 dark:bg-navy-900/50 dark:border-purple-900/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded mr-2">AI</span>
            Vehicle History Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            This 2023 Tesla Model Y has a clean history with no reported accidents or damage. 
            The vehicle has had 1 owner who used it primarily for personal transportation. 
            There are 0 open recalls on this specific vehicle, and it has been serviced according 
            to the manufacturer's recommended maintenance schedule.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="bg-white dark:bg-navy-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <Users className="h-8 w-8 text-blue-500 mb-2" />
              <div className="font-bold text-xl">1</div>
              <div className="text-sm text-gray-500">Previous Owners</div>
            </div>
            
            <div className="bg-white dark:bg-navy-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <CarCrash className="h-8 w-8 text-emerald-500 mb-2" />
              <div className="font-bold text-xl">0</div>
              <div className="text-sm text-gray-500">Reported Accidents</div>
            </div>
            
            <div className="bg-white dark:bg-navy-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <Bell className="h-8 w-8 text-amber-500 mb-2" />
              <div className="font-bold text-xl">0</div>
              <div className="text-sm text-gray-500">Open Recalls</div>
            </div>
            
            <div className="bg-white dark:bg-navy-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <BriefcaseBusiness className="h-8 w-8 text-purple-500 mb-2" />
              <div className="font-bold text-xl text-purple-600">Personal</div>
              <div className="text-sm text-gray-500">Usage Type</div>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <h3 className="font-medium mb-3">Timeline Highlights</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-sm text-gray-500">06/2022</div>
              <div className="flex-grow">
                <div className="font-medium">First Registration</div>
                <div className="text-sm text-gray-600">Registered in California to individual owner</div>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-sm text-gray-500">09/2022</div>
              <div className="flex-grow">
                <div className="font-medium">First Service</div>
                <div className="text-sm text-gray-600">Regular maintenance performed at Tesla Service Center</div>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-sm text-gray-500">03/2023</div>
              <div className="flex-grow">
                <div className="font-medium">Software Update</div>
                <div className="text-sm text-gray-600">Major OTA update installed (v11.3)</div>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-sm text-gray-500">02/2024</div>
              <div className="flex-grow">
                <div className="font-medium">Listed for Sale</div>
                <div className="text-sm text-gray-600">Vehicle added to dealer inventory</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleHistory;
