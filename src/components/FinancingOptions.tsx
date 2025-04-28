
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Info, DollarSign, BadgePercent } from "lucide-react";

const FinancingOptions = () => {
  const options = [
    {
      lender: "CarFinance Capital",
      rate: 3.49,
      term: 60,
      monthlyPayment: 867,
      downPayment: 10000,
      fees: 699,
      totalInterest: 6951,
      requiresExcellentCredit: true,
      isRecommended: true,
      aiScore: 92,
      prosCons: {
        pros: ["Lowest interest rate", "No prepayment penalties", "Fast approval"],
        cons: ["Requires excellent credit", "Higher fees"]
      },
      fineprint: [
        "Rate requires minimum 740 credit score",
        "Available only for new customers",
        "Rate includes 0.25% autopay discount"
      ]
    },
    {
      lender: "LuxAuto Financing",
      rate: 3.99,
      term: 60,
      monthlyPayment: 884,
      downPayment: 10000,
      fees: 499,
      totalInterest: 7945,
      requiresExcellentCredit: false,
      isRecommended: false,
      aiScore: 85,
      prosCons: {
        pros: ["Good for average credit", "Low fees", "Flexible terms"],
        cons: ["Higher interest rate", "Requires full insurance coverage"]
      },
      fineprint: [
        "Available for credit scores 680 and above",
        "Insurance must include $500 or lower deductible",
        "$15 fee for paper statements"
      ]
    },
    {
      lender: "First National Auto",
      rate: 4.25,
      term: 72,
      monthlyPayment: 758,
      downPayment: 10000,
      fees: 299,
      totalInterest: 9587,
      requiresExcellentCredit: false,
      isRecommended: false,
      aiScore: 78,
      prosCons: {
        pros: ["Lower monthly payment", "Longer term available", "Lowest fees"],
        cons: ["Higher total interest", "Longer commitment"]
      },
      fineprint: [
        "Rate available for credit scores 660 and above",
        "$25 late payment fee after 10-day grace period",
        "Vehicle cannot be used for commercial purposes"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-800 py-16">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">AI-Matched Financing Options</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Tailored financing options based on your profile and preferences with full transparency
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <Card 
              key={index}
              className={`relative ${option.isRecommended ? 'border-gold-300 dark:border-gold-700 shadow-md' : ''}`}
            >
              {option.isRecommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  AI Recommended
                </div>
              )}
              
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{option.lender}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">{option.aiScore}</span>
                    <span className="text-gray-500">/100</span>
                  </div>
                </div>
                <CardDescription>
                  {option.requiresExcellentCredit ? 'For excellent credit' : 'For average credit'}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold">{option.rate}%</div>
                  <div className="text-gray-600">APR</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy-900 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monthly payment</span>
                    <span className="font-semibold">${option.monthlyPayment}/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Term</span>
                    <span>{option.term} months ({option.term/12} years)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Down payment</span>
                    <span>${option.downPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fees</span>
                    <span>${option.fees}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total interest</span>
                    <span className="font-medium">${option.totalInterest.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* AI Transparency Analysis */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium flex items-center">
                      <BadgePercent className="h-3.5 w-3.5 mr-1 text-navy-500" />
                      Fine Print Analysis
                    </h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button>
                            <Info className="h-4 w-4 text-gray-400" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="tooltip-content">
                          Our AI has analyzed the fine print and highlighted important details
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-navy-900 rounded p-3 text-sm space-y-2">
                    {option.fineprint.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="min-w-4 h-4 rounded-full bg-navy-100 dark:bg-navy-700 flex items-center justify-center text-[10px] mr-2 mt-0.5">
                          {i+1}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 dark:bg-navy-900 dark:text-emerald-500">
                      {option.prosCons.pros[0]}
                    </Badge>
                    {option.prosCons.pros.length > 1 && (
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 dark:bg-navy-900 dark:text-emerald-500">
                        +{option.prosCons.pros.length - 1}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-1">
                    <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-navy-900 dark:text-red-400">
                      {option.prosCons.cons[0]}
                    </Badge>
                    {option.prosCons.cons.length > 1 && (
                      <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-navy-900 dark:text-red-400">
                        +{option.prosCons.cons.length - 1}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant={option.isRecommended ? "default" : "outline"} className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancingOptions;
