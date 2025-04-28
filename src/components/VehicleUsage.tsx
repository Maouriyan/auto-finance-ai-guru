
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, AlertCircle, Car } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const VehicleUsage = () => {
  return (
    <div className="container max-w-6xl py-8" id="usage-details">
      <h2 className="text-2xl font-bold mb-6">Vehicle Usage & Condition</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mileage */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center mb-2">
                <Gauge className="h-5 w-5 mr-2 text-navy-500" />
                <h3 className="font-semibold text-lg">Mileage</h3>
              </div>
              <div className="text-3xl font-bold">5,200 miles</div>
              <div className="text-sm text-gray-500">Below Average for Year</div>
              <div className="mt-2">
                <Progress value={22} className="h-2" />
                <div className="flex justify-between text-xs mt-1">
                  <span>0</span>
                  <span className="font-medium text-emerald-600">This Car</span>
                  <span>24,000</span>
                </div>
              </div>
            </div>

            {/* Damage Assessment */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 mr-2 text-navy-500" />
                <h3 className="font-semibold text-lg">Condition</h3>
              </div>
              <div className="text-lg">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Excellent</span>
              </div>
              <ul className="text-sm space-y-1 mt-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>No reported accidents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>No cosmetic damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Regular service history</span>
                </li>
              </ul>
            </div>

            {/* Usage Type */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center mb-2">
                <Car className="h-5 w-5 mr-2 text-navy-500" />
                <h3 className="font-semibold text-lg">Usage Type</h3>
              </div>
              <div className="text-lg">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Personal Use</span>
              </div>
              <div className="text-sm mt-2">
                Single-owner vehicle primarily used for commuting and weekend trips.
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between text-sm">
                <span>Date First Driven</span>
                <span className="font-medium">June 2022</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleUsage;
