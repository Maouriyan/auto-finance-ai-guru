import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Info, Bot, FileText } from "lucide-react";

const FinePrintAnalyzer = () => {
  const [selectedContent, setSelectedContent] = useState("agreement");
  
  const sampleFinePrint = {
    agreement: `LOAN AGREEMENT TERMS AND CONDITIONS

1. PAYMENT APPLICATION. Each payment will be applied first to any charges due (other than the unpaid principal), then to earned but unpaid finance charge, and the balance to unpaid principal.

2. PREPAYMENT POLICY. You can prepay all or any part of the unpaid balance at any time without penalty. Any partial prepayment will not delay your next scheduled payment. You will still need to make each payment on time and in the scheduled payment amount until the loan is fully paid.

3. DEFAULT PROVISIONS. You will be in default if (a) you fail to make any scheduled payment when due, (b) you breach any other covenant or agreement herein, (c) you become insolvent, (d) you file or have filed against you any bankruptcy or similar proceeding for relief of debtors, or (e) the vehicle is damaged, destroyed, or improperly used. If you default, we can demand immediate payment of the entire unpaid balance.

4. LATE CHARGE. If any part of a scheduled payment is unpaid for more than 10 days after it is due, you will be charged the greater of $15 or 5% of the unpaid payment amount.

5. SECURITY INTEREST. You grant us a security interest in the vehicle being purchased with the proceeds of this loan, and in the event of default, we can repossess the vehicle.`,
    insurance: `AUTO INSURANCE REQUIREMENTS

1. REQUIRED COVERAGE. You must maintain comprehensive and collision insurance with deductibles no higher than $500. The policy must list us as lienholder and provide for 10-days written notice of cancellation.

2. MINIMUM LIABILITY. You must maintain liability insurance with limits no less than $100,000 per person bodily injury, $300,000 per occurrence bodily injury, and $50,000 property damage liability (commonly referred to as 100/300/50).

3. FORCED PLACEMENT. If you fail to provide proof of insurance, we will purchase insurance to protect our interest in the vehicle. This "forced placement" insurance does not provide liability protection and may be more expensive than insurance you could purchase on your own.

4. CHANGES. You must notify us within 10 days of any changes to your insurance policy.`,
    warranty: `WARRANTY INFORMATION

1. MANUFACTURER'S WARRANTY. The vehicle is covered by the manufacturer's warranty, which is separate from this agreement.

2. EXTENDED WARRANTY. If you purchased an extended warranty or vehicle service contract, that agreement is separate from this loan agreement, and we are not a party to it.

3. WARRANTY DISCLAIMER. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, AS TO THE CONDITION OF THE VEHICLE OR ITS FITNESS FOR ANY PARTICULAR PURPOSE. 

4. USED VEHICLES. If this vehicle is used, any remaining manufacturer's warranty may be transferable to you, but we are not guaranteeing the transfer of such warranties.`
  };
  
  const finePrintAnalysis = {
    agreement: [
      {
        text: "Each payment will be applied first to any charges due (other than the unpaid principal), then to earned but unpaid finance charge, and the balance to unpaid principal.",
        explanation: "Your payments go to fees first, then interest, and finally principal. This means less of your early payments reduce the loan balance.",
        severity: "medium"
      },
      {
        text: "You can prepay all or any part of the unpaid balance at any time without penalty.",
        explanation: "This is a positive term - you can pay off the loan early without fees.",
        severity: "positive"
      },
      {
        text: "If any part of a scheduled payment is unpaid for more than 10 days after it is due, you will be charged the greater of $15 or 5% of the unpaid payment amount.",
        explanation: "Late payments incur significant fees. On your $867 payment, a late fee would be $43.35.",
        severity: "high"
      },
      {
        text: "If you default, we can demand immediate payment of the entire unpaid balance.",
        explanation: "If you miss payments, they could demand full loan repayment immediately.",
        severity: "high"
      }
    ],
    insurance: [
      {
        text: "You must maintain comprehensive and collision insurance with deductibles no higher than $500.",
        explanation: "You're required to have full coverage insurance with a maximum $500 deductible, which will increase your insurance costs.",
        severity: "medium"
      },
      {
        text: "If you fail to provide proof of insurance, we will purchase insurance to protect our interest in the vehicle.",
        explanation: "If your insurance lapses, they'll buy 'force-placed' insurance that's much more expensive and only covers the lender's interest.",
        severity: "high"
      },
      {
        text: "You must maintain liability insurance with limits no less than $100,000 per person bodily injury, $300,000 per occurrence bodily injury, and $50,000 property damage liability.",
        explanation: "These coverage limits are higher than state minimums and will increase your premium.",
        severity: "medium"
      }
    ],
    warranty: [
      {
        text: "WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, AS TO THE CONDITION OF THE VEHICLE OR ITS FITNESS FOR ANY PARTICULAR PURPOSE.",
        explanation: "The lender assumes no responsibility for the vehicle's condition. You're responsible for any mechanical issues.",
        severity: "medium"
      },
      {
        text: "If you purchased an extended warranty or vehicle service contract, that agreement is separate from this loan agreement, and we are not a party to it.",
        explanation: "If there are issues with any extended warranty you purchased, you can't hold the lender responsible.",
        severity: "medium"
      }
    ]
  };

  return (
    <div className="bg-white dark:bg-navy-800 py-16">
      <div className="container max-w-6xl">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2 text-purple-500" />
              <h2 className="text-3xl font-bold">AI Fine Print Analyzer</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">
              Let AI break down complex financial language into simple terms
            </p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  How it works
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm p-4">
                <p className="text-sm">
                  Our AI analyzes complex financial agreements, translating legal jargon into clear explanations
                  and highlighting terms that could impact your finances.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-gray-500" />
                  Agreement Sections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button 
                    variant={selectedContent === "agreement" ? "default" : "outline"} 
                    className="w-full justify-start"
                    onClick={() => setSelectedContent("agreement")}
                  >
                    Loan Agreement Terms
                  </Button>
                  <Button 
                    variant={selectedContent === "insurance" ? "default" : "outline"} 
                    className="w-full justify-start"
                    onClick={() => setSelectedContent("insurance")}
                  >
                    Insurance Requirements
                  </Button>
                  <Button 
                    variant={selectedContent === "warranty" ? "default" : "outline"} 
                    className="w-full justify-start"
                    onClick={() => setSelectedContent("warranty")}
                  >
                    Warranty Information
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center mb-4">
                    <span className="ai-badge mr-2">AI</span>
                    <h4 className="font-medium">Risk Summary</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Borrower-Friendly</span>
                        <span>Standard</span>
                        <span>Lender-Biased</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-navy-700 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-amber-500"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                        <span>High Risk</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-amber-500"></span>
                        <span>Medium Risk</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                        <span>Positive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedContent === "agreement" && "Loan Agreement Terms"}
                  {selectedContent === "insurance" && "Insurance Requirements"}
                  {selectedContent === "warranty" && "Warranty Information"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm p-4 bg-gray-50 dark:bg-navy-900 rounded-md">
                    {sampleFinePrint[selectedContent]}
                  </pre>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <span className="ai-badge mr-2">AI</span>
                    <h4 className="font-semibold">Plain Language Explanation</h4>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    {finePrintAnalysis[selectedContent].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex">
                          <Badge 
                            className={`
                              mr-2 self-start mt-0.5
                              ${item.severity === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 
                                item.severity === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 
                                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}
                            `}
                          >
                            {item.severity === 'high' ? 'High Risk' : 
                             item.severity === 'medium' ? 'Medium Risk' : 
                             'Positive'}
                          </Badge>
                          <div className="bg-gray-50 dark:bg-navy-900 p-3 rounded-md flex-1">
                            <div className="text-sm italic mb-2 text-gray-600 dark:text-gray-400">
                              "{item.text}"
                            </div>
                            <div className="font-medium">
                              {item.explanation}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinePrintAnalyzer;
