
import React from 'react';
import { DollarSign, TrendingDown, Calculator, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FinancialInsight {
  totalPrice: number;
  monthlyPayment: number;
  interestRate: number;
  recommendedInterestRate: number;
  loanTerm: number;
  downPayment: number;
  insuranceCost: number;
  maintenanceCost: number;
  fuelCost: number;
  totalMonthly: number;
  dealVerdict: 'Great Deal' | 'Good Deal' | 'Fair Deal' | 'Overpriced';
}

interface AIFinancialAdvisorProps {
  insights: FinancialInsight;
  vehicleInfo: {
    make: string;
    model: string;
    year: number;
    trim?: string;
  };
}

const AIFinancialAdvisor = ({ insights, vehicleInfo }: AIFinancialAdvisorProps) => {
  const getDealBadgeColor = (verdict: string) => {
    switch (verdict) {
      case 'Great Deal':
        return 'bg-green-500 text-white';
      case 'Good Deal':
        return 'bg-blue-500 text-white';
      case 'Fair Deal':
        return 'bg-yellow-500 text-white';
      case 'Overpriced':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  
  const getInterestRateAdvice = () => {
    if (insights.interestRate <= insights.recommendedInterestRate) {
      return (
        <span className="text-green-600 dark:text-green-400 text-sm">
          Good rate, at or below market average
        </span>
      );
    } else if (insights.interestRate <= insights.recommendedInterestRate + 1) {
      return (
        <span className="text-yellow-600 dark:text-yellow-400 text-sm">
          Slightly high, consider negotiating or refinancing
        </span>
      );
    } else {
      return (
        <span className="text-red-600 dark:text-red-400 text-sm">
          Above market average by {(insights.interestRate - insights.recommendedInterestRate).toFixed(1)}%, 
          recommend shopping for better rates
        </span>
      );
    }
  };

  return (
    <Card className="border-t-4 border-t-purple-500">
      <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Calculator className="mr-2 h-5 w-5 text-purple-500" />
            AI Financial Analysis
          </CardTitle>
          <Badge className={getDealBadgeColor(insights.dealVerdict)}>
            {insights.dealVerdict}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">
          For {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model} {vehicleInfo.trim}
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-purple-500" />
              Price & Financing
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <span className="text-gray-600 dark:text-gray-400">Vehicle Price</span>
                <span className="font-semibold">${insights.totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <span className="text-gray-600 dark:text-gray-400">Down Payment</span>
                <span>${insights.downPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate</span>
                  <div className="mt-1">
                    {getInterestRateAdvice()}
                  </div>
                </div>
                <span className="flex items-center">
                  <span className="font-semibold">{insights.interestRate}%</span>
                  <span className="ml-2 text-sm text-gray-500">(recommended: {insights.recommendedInterestRate}%)</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Loan Term</span>
                <span>{insights.loanTerm} months</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <TrendingDown className="h-4 w-4 mr-1 text-purple-500" />
              Monthly Cost Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <span className="text-gray-600 dark:text-gray-400">Loan Payment</span>
                <span>${insights.monthlyPayment}/mo</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <span className="text-gray-600 dark:text-gray-400">Insurance (est.)</span>
                <span>${insights.insuranceCost}/mo</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <span className="text-gray-600 dark:text-gray-400">Maintenance (est.)</span>
                <span>${insights.maintenanceCost}/mo</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-200">
                <span className="text-gray-600 dark:text-gray-400">Fuel/Charging (est.)</span>
                <span>${insights.fuelCost}/mo</span>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <span>Total Monthly Cost</span>
                <span>${insights.totalMonthly}/mo</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md flex items-start">
          <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              AI recommendation: Based on current market conditions and your location, this is a 
              <span className="font-semibold"> {insights.dealVerdict.toLowerCase()}</span>. 
              {insights.dealVerdict === 'Overpriced' && 
                ' Consider negotiating or looking at similar models with better value.'}
              {insights.dealVerdict === 'Fair Deal' && 
                ' You could try negotiating for a slightly better price.'}
              {insights.dealVerdict === 'Good Deal' && 
                ' This is priced competitively for the market.'}
              {insights.dealVerdict === 'Great Deal' && 
                ' We recommend acting quickly as this is priced below market value.'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIFinancialAdvisor;
