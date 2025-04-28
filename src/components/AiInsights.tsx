
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Ai, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const AiInsights = () => {
  return (
    <div className="bg-gray-50 dark:bg-navy-900/30 py-16">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-4">
            <Ai className="h-7 w-7 mr-2 text-purple-500" />
            <h2 className="text-3xl font-bold">AI-Powered Financial Insights</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Exclusive analytics that help you make informed decisions beyond just the numbers
          </p>
        </div>
        
        <Tabs defaultValue="marketValue">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="marketValue">Market Value</TabsTrigger>
            <TabsTrigger value="costAnalysis">Cost Analysis</TabsTrigger>
            <TabsTrigger value="futureValue">Future Value</TabsTrigger>
          </TabsList>
          
          <TabsContent value="marketValue" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <span className="ai-badge mr-2">AI</span>
                  Market Value Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Pricing Analysis</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          This Tesla Model Y is priced $3,000 below similar models in your area, representing an excellent value based on mileage, condition, and optional features.
                        </p>
                        
                        <div className="relative h-8 bg-gray-100 dark:bg-navy-700 rounded-full overflow-hidden">
                          <div className="absolute inset-0 flex items-center">
                            <div className="h-full w-1 bg-black dark:bg-white absolute left-[57%]" />
                            <div className="h-4 w-4 rounded-full bg-black dark:bg-white absolute left-[57%] -ml-2 shadow-md" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-between px-4 text-xs font-medium">
                            <span>Great deal</span>
                            <span>Fairly priced</span>
                            <span>Overpriced</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Comparable Market Listings</h4>
                        <div className="space-y-3">
                          {[
                            { desc: "2023 Model Y, 7,300 miles, Standard Range", price: 56990 },
                            { desc: "2023 Model Y, 2,100 miles, Long Range AWD", price: 58750 },
                            { desc: "2022 Model Y, 15,400 miles, Long Range AWD", price: 52490 }
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                              <div className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</div>
                              <div className="font-medium">${item.price.toLocaleString()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Neighborhood Ownership</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Tesla Model Y is the 3rd most popular EV in your metro area, with strong demand and resale values. Local charging infrastructure is excellent.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">AI Price Assessment</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Listed Price</span>
                            <span className="font-medium">$54,990</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Market Average</span>
                            <span className="font-medium">$57,990</span>
                          </div>
                          <div className="flex justify-between items-center font-medium text-emerald-600">
                            <span className="text-sm">Savings</span>
                            <span className="flex items-center">
                              <TrendingDown className="h-4 w-4 mr-1" />
                              $3,000
                            </span>
                          </div>
                        </div>
                        
                        <div className="pt-2 px-4 pb-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg mt-4">
                          <h5 className="font-medium mb-1 text-emerald-700 dark:text-emerald-500">AI Verdict</h5>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">
                            Excellent price for this model, year, and mileage. 8% better value than average market listings.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="costAnalysis" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <span className="ai-badge mr-2">AI</span>
                  5-Year Cost Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Total Cost of Ownership</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          This Tesla Model Y will cost approximately $68,240 to own over 5 years, including the purchase price, financing, insurance, charging, and maintenance.
                        </p>
                        
                        <div className="mt-6 space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Vehicle Price</span>
                              <span className="text-sm font-medium">$54,990 (80.6%)</span>
                            </div>
                            <Progress value={80.6} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Financing Cost</span>
                              <span className="text-sm font-medium">$6,950 (10.2%)</span>
                            </div>
                            <Progress value={10.2} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Insurance</span>
                              <span className="text-sm font-medium">$4,800 (7%)</span>
                            </div>
                            <Progress value={7} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Charging</span>
                              <span className="text-sm font-medium">$1,000 (1.5%)</span>
                            </div>
                            <Progress value={1.5} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Maintenance</span>
                              <span className="text-sm font-medium">$500 (0.7%)</span>
                            </div>
                            <Progress value={0.7} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">AI Cost Comparison</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">This EV (5yr)</span>
                            <span className="font-medium">$68,240</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Similar Gas SUV (5yr)</span>
                            <span className="font-medium">$78,320</span>
                          </div>
                          <div className="flex justify-between items-center font-medium text-emerald-600">
                            <span className="text-sm">Savings</span>
                            <span className="flex items-center">
                              <TrendingDown className="h-4 w-4 mr-1" />
                              $10,080
                            </span>
                          </div>
                        </div>
                        
                        <div className="pt-2 px-4 pb-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg mt-4">
                          <h5 className="font-medium mb-1 text-emerald-700 dark:text-emerald-500">AI Verdict</h5>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">
                            12.9% lower total cost of ownership compared to equivalent gas models, with most savings from fuel and maintenance.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="futureValue" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <span className="ai-badge mr-2">AI</span>
                  Depreciation & Future Value Projection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Estimated Resale Value</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Based on market trends, this Tesla Model Y is projected to retain approximately 62% of its value after 5 years. This is 8% better than the average vehicle in its class.
                        </p>
                        
                        <div className="mt-6 space-y-4">
                          <div className="grid grid-cols-6 gap-1">
                            {[1, 2, 3, 4, 5].map((year) => (
                              <div key={year} className="text-center">
                                <div className="text-sm font-medium mb-1">Year {year}</div>
                                <div className="h-32 bg-gray-100 dark:bg-navy-700 rounded-md relative">
                                  <div 
                                    className="absolute bottom-0 w-full bg-navy-500 rounded-b-md"
                                    style={{
                                      height: `${100 - (year * 7.6)}%`
                                    }}
                                  ></div>
                                  <div className="absolute bottom-2 w-full text-center text-white text-xs font-medium">
                                    ${Math.round(54990 * (1 - year * 0.076)).toLocaleString()}
                                  </div>
                                </div>
                                <div className="text-xs mt-1 text-gray-500">
                                  -{Math.round(year * 7.6)}%
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">AI Value Retention</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Purchase Price</span>
                            <span className="font-medium">$54,990</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Value After 5 Years</span>
                            <span className="font-medium">$34,093</span>
                          </div>
                          <div className="flex justify-between items-center font-medium text-amber-600">
                            <span className="text-sm">Depreciation</span>
                            <span className="flex items-center">
                              <TrendingDown className="h-4 w-4 mr-1" />
                              $20,897
                            </span>
                          </div>
                        </div>
                        
                        <div className="pt-2 px-4 pb-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mt-4">
                          <h5 className="font-medium mb-1 text-blue-700 dark:text-blue-400">AI Market Insight</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-400">
                            Tesla EVs hold value better than most vehicles. Strong resale values are expected to continue due to brand reputation and network advantages.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AiInsights;
