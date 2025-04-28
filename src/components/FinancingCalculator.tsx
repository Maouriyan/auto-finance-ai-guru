
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Robot } from "lucide-react";

const FinancingCalculator = () => {
  const [carPrice, setCarPrice] = useState(54990);
  const [downPayment, setDownPayment] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(60); // 60 months
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [aiSuggestion, setAiSuggestion] = useState("");
  
  const calculatePayment = () => {
    const loanAmount = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                    (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment;
  };

  // Generate AI suggestion based on inputs
  const generateAiSuggestion = () => {
    const payment = calculatePayment();
    const downPaymentPercent = (downPayment / carPrice) * 100;
    let suggestion = '';
    
    if (downPaymentPercent < 15) {
      suggestion = "Consider increasing your down payment to at least 15% ($" + Math.round(carPrice * 0.15).toLocaleString() + ") to reduce your monthly payments and total interest paid.";
    } else if (loanTerm > 60) {
      suggestion = "A shorter loan term would save you money on interest, though your monthly payments would be higher.";
    } else if (payment > 800) {
      suggestion = "Your monthly payment is relatively high. Consider extending your loan term or increasing your down payment to reduce the monthly burden.";
    } else {
      suggestion = "Your financing terms look good! Your debt-to-income ratio should be manageable with this payment.";
    }
    
    setAiSuggestion(suggestion);
  };
  
  // Calculate monthly payment whenever inputs change
  useEffect(() => {
    const payment = calculatePayment();
    setMonthlyPayment(payment);
    // Generate AI suggestion whenever values change
    generateAiSuggestion();
  }, [carPrice, downPayment, loanTerm, interestRate]);

  return (
    <div className="bg-gray-50 dark:bg-navy-900/50 py-12" id="financing">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Smart Financing Calculator</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Customize your financing options and get AI-powered recommendations
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Calculator</CardTitle>
                <CardDescription>
                  Adjust the parameters below to see how they affect your payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Vehicle Price</label>
                      <div className="text-sm font-semibold">${carPrice.toLocaleString()}</div>
                    </div>
                    <Slider
                      defaultValue={[carPrice]}
                      min={20000}
                      max={100000}
                      step={1000}
                      onValueChange={(value) => setCarPrice(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$20,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Down Payment</label>
                      <div className="text-sm font-semibold">${downPayment.toLocaleString()} ({Math.round((downPayment / carPrice) * 100)}%)</div>
                    </div>
                    <Slider
                      defaultValue={[downPayment]}
                      min={0}
                      max={carPrice / 2}
                      step={500}
                      onValueChange={(value) => setDownPayment(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$0</span>
                      <span>${(carPrice / 2).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Loan Term (months)</label>
                      <div className="text-sm font-semibold">{loanTerm} months ({loanTerm/12} years)</div>
                    </div>
                    <Tabs defaultValue="60">
                      <TabsList className="grid grid-cols-4">
                        <TabsTrigger value="36" onClick={() => setLoanTerm(36)}>36</TabsTrigger>
                        <TabsTrigger value="48" onClick={() => setLoanTerm(48)}>48</TabsTrigger>
                        <TabsTrigger value="60" onClick={() => setLoanTerm(60)}>60</TabsTrigger>
                        <TabsTrigger value="72" onClick={() => setLoanTerm(72)}>72</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Interest Rate (APR)</label>
                      <div className="text-sm font-semibold">{interestRate}%</div>
                    </div>
                    <Slider
                      defaultValue={[interestRate]}
                      min={1.9}
                      max={12}
                      step={0.1}
                      onValueChange={(value) => setInterestRate(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1.9%</span>
                      <span>12.0%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="pt-6">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Estimated Monthly Payment</p>
                    <p className="text-3xl font-bold">${Math.round(monthlyPayment).toLocaleString()}</p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-navy-800 hover:bg-navy-900">
                    Get Pre-Approved
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="mb-6 flex items-center">
              <Robot className="h-5 w-5 text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold">AI Financial Advisor</h3>
            </div>

            <Card className="border-purple-200 bg-purple-50 dark:bg-navy-800 dark:border-purple-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <span className="ai-badge mr-2">AI</span>
                  Personalized Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 dark:text-gray-200">{aiSuggestion}</p>
                
                <div className="mt-6 p-4 bg-white dark:bg-navy-900 rounded-lg border border-purple-100 dark:border-purple-900">
                  <h4 className="font-medium mb-2">Did you know?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    For this vehicle and loan amount, credit scores above 720 can get you rates as low as 2.9% APR from select lenders.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Cost Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Principal</span>
                    <span>${(carPrice - downPayment).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Interest</span>
                    <span>${Math.round(monthlyPayment * loanTerm - (carPrice - downPayment)).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Taxes & Fees</span>
                    <span>~${Math.round(carPrice * 0.08).toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total Cost</span>
                    <span>${Math.round(monthlyPayment * loanTerm + downPayment + carPrice * 0.08).toLocaleString()}</span>
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

export default FinancingCalculator;
