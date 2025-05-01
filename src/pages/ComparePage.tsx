
import React, { useState } from 'react';
import { ChartBar, Search, Plus, X, ArrowDownToLine, Medal, TrendingDown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Sample car data for comparison
const sampleCars = [
  {
    id: 1,
    title: "2023 Tesla Model Y",
    image: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-4608112385191168016-1024x768.jpeg",
    price: 48990,
    dealRating: "Great",
    make: "Tesla",
    model: "Model Y",
    year: 2023,
    fuelType: "Electric",
    engineType: "Dual Motor",
    mileage: 1200,
    aiInsights: {
      predictedValue: 41200, // after 3 years
      depreciation: "Low",
      financeRate: "3.2%",
      dealerCaveats: [],
      monthlyCost: 920,
      recommendedAction: "Buy"
    }
  },
  {
    id: 2,
    title: "2023 Honda Accord",
    image: "https://images.ctfassets.net/c9t6u0qhbv9e/3V0cFymCheMK8i4XRPkCl/636b16f4c41b08a5c9d79903c1ab5afa/2023_Honda_Accord_review_summary.jpg",
    price: 30500,
    dealRating: "Fair",
    make: "Honda",
    model: "Accord",
    year: 2023,
    fuelType: "Hybrid",
    engineType: "I4",
    mileage: 5000,
    aiInsights: {
      predictedValue: 22800, // after 3 years
      depreciation: "Moderate",
      financeRate: "2.9%",
      dealerCaveats: ["Mandatory dealer maintenance"],
      monthlyCost: 650,
      recommendedAction: "Consider"
    }
  }
];

const ComparePage = () => {
  const [selectedCars, setSelectedCars] = useState(sampleCars);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleRemoveCar = (id: number) => {
    setSelectedCars(selectedCars.filter(car => car.id !== id));
  };
  
  const addPlaceholder = () => {
    // In a real app, this would open a search modal to select a car
    alert("This would open a car search modal in the full application");
  };

  return (
    <div className="container py-16 max-w-7xl">
      <div className="text-center mb-12">
        <div className="bg-green-50 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ChartBar className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">Compare Vehicles</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Select up to 5 vehicles to compare features, prices, performance, and AI-predicted ownership costs
        </p>
      </div>

      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Selected Vehicles ({selectedCars.length}/5)</h2>
        <div className="relative w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for a vehicle" 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {/* Selected cars */}
        {selectedCars.map(car => (
          <Card key={car.id} className="relative h-full">
            <button 
              onClick={() => handleRemoveCar(car.id)}
              className="absolute top-2 right-2 bg-white dark:bg-navy-800 rounded-full p-1 shadow-sm hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
            <CardContent className="p-3">
              <div className="h-32 overflow-hidden mb-3 rounded-md">
                <img 
                  src={car.image} 
                  alt={car.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium leading-tight">{car.title}</h3>
              <p className="text-lg font-bold text-primary mt-1">${car.price.toLocaleString()}</p>
              <Badge className={car.dealRating === "Great" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"} variant="secondary">
                {car.dealRating} Deal
              </Badge>
            </CardContent>
          </Card>
        ))}
        
        {/* Add car placeholder */}
        {selectedCars.length < 5 && (
          <Card className="flex items-center justify-center h-full min-h-[200px] border-dashed cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800/50 transition-colors" onClick={addPlaceholder}>
            <CardContent className="p-3 text-center">
              <div className="h-12 w-12 mx-auto bg-gray-100 dark:bg-navy-800 rounded-full flex items-center justify-center mb-2">
                <Plus className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">Add Vehicle</p>
            </CardContent>
          </Card>
        )}
      </div>

      {selectedCars.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-navy-800 rounded-lg shadow">
              <thead>
                <tr className="bg-gray-50 dark:bg-navy-900/50">
                  <th className="text-left p-4 border-b">Details</th>
                  {selectedCars.map(car => (
                    <th key={car.id} className="text-left p-4 border-b min-w-[200px]">{car.make} {car.model}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b font-medium">Price</td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">${car.price.toLocaleString()}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Year</td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">{car.year}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Fuel Type</td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">{car.fuelType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Engine</td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">{car.engineType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Mileage</td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">{car.mileage.toLocaleString()} mi</td>
                  ))}
                </tr>
                
                {/* AI insights section with highlight */}
                <tr className="bg-purple-50 dark:bg-purple-900/10">
                  <td colSpan={selectedCars.length + 1} className="p-4 border-b">
                    <div className="flex items-center">
                      <Badge className="bg-purple-500 text-white mr-2">AI Insights</Badge>
                      <span className="font-semibold">Exclusive AI-powered analytics</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 mr-2 text-purple-500" />
                      3-Year Value
                    </div>
                  </td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">
                      ${car.aiInsights.predictedValue.toLocaleString()}
                      <div className="text-sm text-gray-500">
                        {car.aiInsights.depreciation} depreciation
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-purple-500" />
                      Monthly Cost
                    </div>
                  </td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">
                      ${car.aiInsights.monthlyCost}/mo
                      <div className="text-sm text-gray-500">
                        Finance: {car.aiInsights.financeRate}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">
                    <div className="flex items-center">
                      <Medal className="h-4 w-4 mr-2 text-purple-500" />
                      AI Recommendation
                    </div>
                  </td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="p-4 border-b">
                      <Badge className={
                        car.aiInsights.recommendedAction === "Buy" 
                          ? "bg-green-500 text-white" 
                          : "bg-yellow-500 text-white"
                      }>
                        {car.aiInsights.recommendedAction}
                      </Badge>
                      {car.aiInsights.dealerCaveats.length > 0 && (
                        <div className="mt-2 text-sm text-red-500 font-medium">
                          {car.aiInsights.dealerCaveats.map((caveat, i) => (
                            <div key={i} className="flex items-center">
                              <span className="inline-block h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                              {caveat}
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button className="mr-4">
              <ArrowDownToLine className="mr-2 h-4 w-4" />
              Export Comparison
            </Button>
            <Button variant="outline">
              Email Results
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center p-12 bg-gray-100 dark:bg-navy-800 rounded-lg">
          <h2 className="text-2xl font-medium mb-4">Select Vehicles to Compare</h2>
          <p>Add up to 5 vehicles to compare specifications and AI predictions side by side.</p>
          <Button className="mt-6" onClick={addPlaceholder}>Add a Vehicle</Button>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
