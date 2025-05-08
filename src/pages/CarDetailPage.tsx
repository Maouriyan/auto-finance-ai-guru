import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Car, 
  MapPin, 
  Users, 
  DollarSign,
  Share2,
  Heart,
  Star,
  MessageCircle,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AIPolicyScanner from '@/components/AIPolicyScanner';
import AIFinancialAdvisor from '@/components/AIFinancialAdvisor';
import { Link } from 'react-router-dom';
import AIChatMascot from '@/components/AIChatMascot';

// Mock data - would be fetched from API in real application
const carData = {
  id: 2,
  title: "2023 Honda Accord Sport Hybrid",
  price: 30500,
  dealRating: "Fair",
  mileage: 5000,
  location: "Boulder, CO",
  description: "This 2023 Honda Accord Sport Hybrid features advanced driver assistance, premium audio, leather seats, and excellent fuel efficiency. Well-maintained with only 5,000 miles.",
  year: 2023,
  features: ["Apple CarPlay", "Lane Assist", "Sunroof", "Leather Seats", "Heated Seats", "Backup Camera", "Bluetooth", "Navigation"],
  images: [
    "https://images.ctfassets.net/c9t6u0qhbv9e/3V0cFymCheMK8i4XRPkCl/636b16f4c41b08a5c9d79903c1ab5afa/2023_Honda_Accord_review_summary.jpg",
    "https://images.nadaguides.com/Models/640x480/2023-Honda-Accord-Hybrid_Sport-Sedan_Primary.jpg",
    "https://www.motortrend.com/uploads/2023/01/2023-Honda-Accord-Hybrid-Touring-interior-dashboard.jpg"
  ],
  isNew: true,
  make: "Honda",
  model: "Accord",
  trim: "Sport Hybrid",
  color: "Black",
  fuelType: "Hybrid",
  engineType: "I4",
  doors: 4,
  seats: 5,
  daysOnMarket: 7,
  terrainType: "Sedan",
  dealer: {
    id: "XYZ123",
    name: "XYZ Auto",
    rating: 4.2,
    reviews: 56,
    address: "1234 Auto Drive, Boulder, CO 80301",
    phone: "(303) 555-1234"
  },
  aiPolicyScanResults: [
    {
      type: 'critical' as 'critical',
      description: 'Mandatory Dealer Financing',
      detail: 'This dealer requires in-house financing to qualify for the advertised price. Minimum 60-month term.'
    },
    {
      type: 'warning' as 'warning',
      description: 'Non-negotiable Addendum',
      detail: 'Dealer adds a $1,295 protection package to all vehicles. This is non-negotiable.'
    }
  ],
  aiFinancialInsights: {
    totalPrice: 30500,
    monthlyPayment: 460,
    interestRate: 4.5,
    recommendedInterestRate: 3.2,
    loanTerm: 60,
    downPayment: 3000,
    insuranceCost: 120,
    maintenanceCost: 40,
    fuelCost: 70,
    totalMonthly: 690,
    dealVerdict: 'Fair Deal' as 'Great Deal' | 'Good Deal' | 'Fair Deal' | 'Overpriced'
  }
};

const CarDetailPage = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(carData.images[0]);
  const [showChatModal, setShowChatModal] = useState(false);
  
  // In a real app, we would fetch data based on the ID
  // const { data: car, isLoading } = useQuery({
  //   queryKey: ['car', id],
  //   queryFn: () => fetchCarDetails(id),
  // });
  
  const car = carData; // Mock data
  
  return (
    <div className="container pb-16 pt-8 max-w-7xl">
      {/* Add the AI Chat Mascot component */}
      <AIChatMascot />
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <Link to="/cars" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800 mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to search results
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{car.title}</h1>
          <div className="flex flex-wrap items-center mt-2">
            <Badge className={car.dealRating === "Great" ? "bg-green-500 text-white" : "bg-yellow-500 text-white mr-2"}>
              {car.dealRating} Deal
            </Badge>
            <span className="text-sm text-gray-500 flex items-center mr-3">
              <Calendar className="h-4 w-4 mr-1" />
              {car.year}
            </span>
            <span className="text-sm text-gray-500 flex items-center mr-3">
              <MapPin className="h-4 w-4 mr-1" />
              {car.location}
            </span>
            <span className="text-sm text-gray-500 flex items-center mr-3">
              <Car className="h-4 w-4 mr-1" />
              {car.mileage.toLocaleString()} miles
            </span>
            <Badge variant="outline" className="ml-auto">
              {car.isNew ? "New" : "Used"}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col items-end">
          <div className="text-3xl font-bold text-primary">${car.price.toLocaleString()}</div>
          <div className="text-sm text-gray-500 mb-3">+ taxes & fees</div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <div className="aspect-video bg-gray-100 dark:bg-navy-800 rounded-lg overflow-hidden">
            <img 
              src={mainImage} 
              alt={car.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
          {car.images.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setMainImage(img)}
              className={`aspect-video bg-gray-100 dark:bg-navy-800 rounded-lg overflow-hidden cursor-pointer 
                ${mainImage === img ? 'ring-2 ring-primary' : ''}`}
            >
              <img 
                src={img} 
                alt={`${car.title} view ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Car details */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="overview">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3" data-section="About This Vehicle">About This Vehicle</h2>
                <p className="text-gray-700 dark:text-gray-300">{car.description}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Make</div>
                  <div className="font-medium">{car.make}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Model</div>
                  <div className="font-medium">{car.model}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Year</div>
                  <div className="font-medium">{car.year}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Body Style</div>
                  <div className="font-medium">{car.terrainType}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Fuel Type</div>
                  <div className="font-medium">{car.fuelType}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Engine</div>
                  <div className="font-medium">{car.engineType}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Doors</div>
                  <div className="font-medium">{car.doors}</div>
                </div>
                <div className="bg-gray-50 dark:bg-navy-900/50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Seating</div>
                  <div className="font-medium">{car.seats} passengers</div>
                </div>
              </div>
              
              {/* AI Policy Scanner */}
              <div>
                <h2 className="text-xl font-semibold mb-3 flex items-center" data-section="AI Policy Scanner Results">
                  <Bot className="h-5 w-5 text-purple-500 mr-2" />
                  AI Policy Scanner Results
                </h2>
                <AIPolicyScanner 
                  policyIssues={car.aiPolicyScanResults} 
                  dealerId={car.dealer.id}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="features">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-3" data-section="Features & Options">Features & Options</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specs">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-3" data-section="Specifications">Detailed Specifications</h2>
                <p className="text-gray-500">Detailed specifications would be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-3" data-section="Vehicle History">Vehicle History</h2>
                <p className="text-gray-500">Vehicle history report would be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* AI Financial Advisor */}
          <div>
            <h2 className="text-xl font-semibold mb-3 flex items-center" data-section="AI Financial Analysis">
              <Bot className="h-5 w-5 text-purple-500 mr-2" />
              AI Financial Analysis
            </h2>
            <AIFinancialAdvisor 
              insights={car.aiFinancialInsights}
              vehicleInfo={{
                make: car.make,
                model: car.model,
                year: car.year,
                trim: car.trim
              }}
            />
          </div>
        </div>
        
        {/* Right column - Actions and Dealer info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Contact Dealer</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{car.dealer.rating}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{car.dealer.reviews} reviews</span>
                  </div>
                  <h4 className="font-medium mb-1">{car.dealer.name}</h4>
                  <p className="text-sm text-gray-500">{car.dealer.address}</p>
                  <p className="text-sm text-gray-500">{car.dealer.phone}</p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Get Best Price
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Schedule Test Drive
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setShowChatModal(true)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with AI Assistant
                  </Button>
                </div>
                
                <div className="pt-4 mt-4 border-t text-center">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.8)] transition-all duration-300 w-full"
                  >
                    <Bot className="mr-2 h-4 w-4" />
                    Let Us Be Your Agent
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    Our AI will handle negotiations and paperwork
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Similar Vehicles</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-20 h-16 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src="https://static.cargurus.com/images/forsale/2025/02/08/10/37/2022_toyota_camry-pic-192737540133031948-1024x768.jpeg"
                      alt="2022 Toyota Camry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">2022 Toyota Camry</h4>
                    <p className="text-sm text-primary font-semibold">$25,999</p>
                    <div className="flex text-xs text-gray-500">
                      <span className="mr-2">15,000 mi</span>
                      <span>Denver, CO</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-20 h-16 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src="https://static.cargurus.com/images/forsale/2025/03/30/01/20/2021_ford_f-150-pic-9171259554085665589-1024x768.jpeg"
                      alt="2021 Ford F-150"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">2020 Ford F-150</h4>
                    <p className="text-sm text-primary font-semibold">$35,800</p>
                    <div className="flex text-xs text-gray-500">
                      <span className="mr-2">28,000 mi</span>
                      <span>Fort Collins, CO</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Chat Modal */}
      {showChatModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-navy-800 rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold flex items-center">
                <Bot className="h-5 w-5 text-purple-500 mr-2" />
                AI Assistant
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setShowChatModal(false)}>
                Close
              </Button>
            </div>
            <div className="bg-gray-50 dark:bg-navy-900 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
              <div className="flex gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <p className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg inline-block">
                    I see you're looking at the 2023 Honda Accord Sport Hybrid. What would you like to know about this vehicle?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Ask me anything about this car..." 
                className="flex-1" 
                aria-label="Chat with AI Assistant"
              />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailPage;
