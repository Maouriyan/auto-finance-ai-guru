
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const DealerInfo = () => {
  return (
    <div className="container max-w-6xl py-8" id="dealer-info">
      <h2 className="text-2xl font-bold mb-6">Dealer Information</h2>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Tesla Motors Certified</h3>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-600">Mountain View, CA (8.2 miles away)</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex mr-2">
                      <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                      <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                      <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                      <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                      <Star className="h-4 w-4 fill-gold-300/50 text-gold-300/50" />
                    </div>
                    <span className="text-sm font-medium">4.8 (243 reviews)</span>
                  </div>
                </div>
                <Button>Contact Dealer</Button>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h4 className="font-medium mb-2">About This Dealer</h4>
                <p className="text-sm text-gray-600">
                  Tesla Motors Certified is an authorized Tesla dealer with 10+ years experience. 
                  They offer full service facilities, certified pre-owned vehicles, 
                  and specialized financing options for electric vehicles.
                </p>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-sm">7-day return policy</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-sm">150+ point inspection</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex flex-col">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Special Financing Terms</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      This dealer requires in-house financing for the advertised price. Independent financing may result in a higher vehicle price.
                    </p>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="link" size="sm" className="text-amber-600 p-0 h-auto mt-2">
                      Why does this matter?
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Dealer financing may come with higher rates or specific terms that affect your total cost of ownership. Always compare with outside financing options.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <div className="mt-4 flex justify-between">
                <div className="text-sm">
                  <div className="text-gray-500">Hours Today:</div>
                  <div className="font-medium">9:00 AM - 8:00 PM</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Phone:</div>
                  <div className="font-medium">(650) 555-0123</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealerInfo;
