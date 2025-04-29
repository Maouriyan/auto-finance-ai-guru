
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Star, DollarSign } from "lucide-react";

const CarHero = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background gradient with image */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-white p-6 md:p-12">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Car details */}
            <div className="md:w-2/3 space-y-4 animate-fade-in">
              <div className="flex items-center gap-2">
                <Badge className="bg-gold-500 hover:bg-gold-600">Premium Listing</Badge>
                <div className="flex items-center text-gold-300">
                  <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                  <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                  <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                  <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                  <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                  <span className="ml-1 text-sm">5.0 (24 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold">2023 Tesla Model Y</h1>
              <p className="text-xl md:text-2xl text-gray-200">Long Range AWD • Premium Package</p>
              
              <div className="flex items-center gap-4 mt-6">
                <div className="text-3xl md:text-4xl font-bold">$54,990</div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">
                  $3,000 below market
                </div>
              </div>
              
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-navy-500 hover:bg-navy-600">
                  <Calculator className="mr-2 h-5 w-5" /> 
                  Finance Calculator
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Get Pre-Approved
                </Button>
              </div>
            </div>
            
            {/* Car image (would be replaced with a 3D model in production) */}
            <div className="hidden md:block md:w-1/3">
              <div className="relative w-full aspect-[4/3] animate-float">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-4608112385191168016-1024x768.jpeg"
                    alt="Tesla Model Y" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarHero;
