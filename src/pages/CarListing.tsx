
import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  CarFront, 
  Fuel, 
  GaugeCircle, 
  DoorOpen, 
  Tag, 
  UserSquare, 
  List 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

// Sample data - would be replaced with API data in a real application
const carListings = [
  {
    id: 4,
    title: "2023 Tesla Model Y",
    price: 48990,
    dealRating: "Great",
    mileage: 1200,
    location: "Denver, CO",
    year: 2023,
    features: ["Autopilot", "All-Wheel Drive", "Glass Roof", "Premium Sound"],
    image: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-4608112385191168016-1024x768.jpeg",
    isNew: true,
    make: "Tesla",
    model: "Model Y",
    color: "White",
    fuelType: "Electric",
    engineType: "Dual Motor",
    doors: 4,
    seats: 5,
    daysOnMarket: 3,
    terrainType: "SUV",
    dealer: "Tesla Denver"
  },
  {
    id: 1,
    title: "2022 Toyota Camry",
    price: 25999,
    dealRating: "Great",
    mileage: 15000,
    location: "Denver, CO",
    year: 2022,
    features: ["Bluetooth", "Backup Camera", "Leather Seats"],
    image: "https://static.cargurus.com/images/forsale/2025/02/08/10/37/2022_toyota_camry-pic-192737540133031948-1024x768.jpeg",
    isNew: false,
    make: "Toyota",
    model: "Camry",
    color: "Silver",
    fuelType: "Gasoline",
    engineType: "V6",
    doors: 4,
    seats: 5,
    daysOnMarket: 14,
    terrainType: "Sedan",
    dealer: "ABC Motors"
  },
  {
    id: 2,
    title: "2023 Honda Accord",
    price: 30500,
    dealRating: "Fair",
    mileage: 5000,
    location: "Boulder, CO",
    year: 2023,
    features: ["Apple CarPlay", "Lane Assist", "Sunroof"],
    image: "https://images.ctfassets.net/c9t6u0qhbv9e/3V0cFymCheMK8i4XRPkCl/636b16f4c41b08a5c9d79903c1ab5afa/2023_Honda_Accord_review_summary.jpg",
    isNew: true,
    make: "Honda",
    model: "Accord",
    color: "Black",
    fuelType: "Hybrid",
    engineType: "I4",
    doors: 4,
    seats: 5,
    daysOnMarket: 7,
    terrainType: "Sedan",
    dealer: "XYZ Auto"
  },
  {
    id: 3,
    title: "2020 Ford F-150",
    price: 35800,
    dealRating: "Good",
    mileage: 28000,
    location: "Fort Collins, CO",
    year: 2020,
    features: ["Tow Package", "4x4", "Navigation"],
    image: "https://static.cargurus.com/images/forsale/2025/03/30/01/20/2021_ford_f-150-pic-9171259554085665589-1024x768.jpeg",
    isNew: false,
    make: "Ford",
    model: "F-150",
    color: "Red",
    fuelType: "Gasoline",
    engineType: "V8",
    doors: 4,
    seats: 6,
    daysOnMarket: 30,
    terrainType: "Truck",
    dealer: "Denver Auto Mall"
  }
];

// Get unique values for filters
const getUniqueValues = (key: keyof typeof carListings[0]) => {
  return [...new Set(carListings.map(car => car[key]))];
};

const CarListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCars, setFilteredCars] = useState(carListings);
  
  // Filter states
  const [filters, setFilters] = useState({
    make: "",
    year: "",
    terrainType: "",
    color: "",
    fuelType: "",
    engineType: "",
    doors: "",
    seats: "",
    dealer: "",
    isNew: null as boolean | null,
    priceRange: { min: 0, max: 100000 },
    mileageRange: { min: 0, max: 100000 },
    daysOnMarket: ""
  });

  // Handle search and filter changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    applyFilters(value, filters);
  };

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    applyFilters(searchTerm, updatedFilters);
  };

  const applyFilters = (search: string, currentFilters: typeof filters) => {
    let result = carListings;
    
    // Apply search term
    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(car => 
        car.title.toLowerCase().includes(lowerSearch) || 
        car.make.toLowerCase().includes(lowerSearch) || 
        car.model.toLowerCase().includes(lowerSearch)
      );
    }
    
    // Apply filters
    if (currentFilters.make) {
      result = result.filter(car => car.make === currentFilters.make);
    }
    
    if (currentFilters.year) {
      result = result.filter(car => car.year.toString() === currentFilters.year);
    }
    
    if (currentFilters.terrainType) {
      result = result.filter(car => car.terrainType === currentFilters.terrainType);
    }
    
    if (currentFilters.color) {
      result = result.filter(car => car.color === currentFilters.color);
    }
    
    if (currentFilters.fuelType) {
      result = result.filter(car => car.fuelType === currentFilters.fuelType);
    }
    
    if (currentFilters.engineType) {
      result = result.filter(car => car.engineType === currentFilters.engineType);
    }
    
    if (currentFilters.doors) {
      result = result.filter(car => car.doors.toString() === currentFilters.doors);
    }
    
    if (currentFilters.seats) {
      result = result.filter(car => car.seats.toString() === currentFilters.seats);
    }
    
    if (currentFilters.dealer) {
      result = result.filter(car => car.dealer === currentFilters.dealer);
    }
    
    if (currentFilters.isNew !== null) {
      result = result.filter(car => car.isNew === currentFilters.isNew);
    }
    
    if (currentFilters.daysOnMarket) {
      const days = parseInt(currentFilters.daysOnMarket);
      result = result.filter(car => car.daysOnMarket <= days);
    }
    
    // Apply price range
    result = result.filter(car => 
      car.price >= currentFilters.priceRange.min && 
      car.price <= currentFilters.priceRange.max
    );
    
    // Apply mileage range
    result = result.filter(car => 
      car.mileage >= currentFilters.mileageRange.min && 
      car.mileage <= currentFilters.mileageRange.max
    );
    
    setFilteredCars(result);
  };

  const resetFilters = () => {
    setFilters({
      make: "",
      year: "",
      terrainType: "",
      color: "",
      fuelType: "",
      engineType: "",
      doors: "",
      seats: "",
      dealer: "",
      isNew: null,
      priceRange: { min: 0, max: 100000 },
      mileageRange: { min: 0, max: 100000 },
      daysOnMarket: ""
    });
    setSearchTerm("");
    setFilteredCars(carListings);
  };

  // Function to render deal rating badge with appropriate color
  const renderDealBadge = (rating: string) => {
    let color = "";
    switch (rating.toLowerCase()) {
      case "great":
        color = "bg-green-500";
        break;
      case "good":
        color = "bg-blue-500";
        break;
      case "fair":
        color = "bg-yellow-500";
        break;
      default:
        color = "bg-gray-500";
    }
    
    return (
      <Badge className={`${color} text-white`}>
        {rating} Deal
      </Badge>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by make, model, or title"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10 w-full"
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetFilters}
            className="flex items-center gap-2"
          >
            Reset
          </Button>
        </div>
      </div>

      <Collapsible open={showFilters} className="mb-8">
        <CollapsibleContent>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Car Type Filter */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox 
                    id="newCars" 
                    checked={filters.isNew === true}
                    onCheckedChange={() => handleFilterChange('isNew', filters.isNew === true ? null : true)}
                  />
                  <label htmlFor="newCars">New Cars</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="usedCars" 
                    checked={filters.isNew === false}
                    onCheckedChange={() => handleFilterChange('isNew', filters.isNew === false ? null : false)}
                  />
                  <label htmlFor="usedCars">Used Cars</label>
                </div>
              </div>
              
              {/* Make Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Make</label>
                <Select 
                  value={filters.make} 
                  onValueChange={(value) => handleFilterChange('make', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Makes</SelectItem>
                    {getUniqueValues('make').map((make) => (
                      <SelectItem key={make as string} value={make as string}>
                        {make as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Year Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Year</label>
                <Select 
                  value={filters.year} 
                  onValueChange={(value) => handleFilterChange('year', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Years</SelectItem>
                    {getUniqueValues('year').map((year) => (
                      <SelectItem key={year as number} value={(year as number).toString()}>
                        {year as number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Terrain Type Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Vehicle Type</label>
                <Select 
                  value={filters.terrainType} 
                  onValueChange={(value) => handleFilterChange('terrainType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    {getUniqueValues('terrainType').map((type) => (
                      <SelectItem key={type as string} value={type as string}>
                        {type as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Color Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Color</label>
                <Select 
                  value={filters.color} 
                  onValueChange={(value) => handleFilterChange('color', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Colors</SelectItem>
                    {getUniqueValues('color').map((color) => (
                      <SelectItem key={color as string} value={color as string}>
                        {color as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Fuel Type Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Fuel Type</label>
                <Select 
                  value={filters.fuelType} 
                  onValueChange={(value) => handleFilterChange('fuelType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Fuel Types</SelectItem>
                    {getUniqueValues('fuelType').map((fuel) => (
                      <SelectItem key={fuel as string} value={fuel as string}>
                        {fuel as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Engine Type Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Engine</label>
                <Select 
                  value={filters.engineType} 
                  onValueChange={(value) => handleFilterChange('engineType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select engine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Engines</SelectItem>
                    {getUniqueValues('engineType').map((engine) => (
                      <SelectItem key={engine as string} value={engine as string}>
                        {engine as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Doors Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Doors</label>
                <Select 
                  value={filters.doors} 
                  onValueChange={(value) => handleFilterChange('doors', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select doors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All</SelectItem>
                    {getUniqueValues('doors').map((doors) => (
                      <SelectItem key={doors as number} value={(doors as number).toString()}>
                        {doors as number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Days on Market Filter */}
              <div>
                <label className="text-sm font-medium mb-1 block">Days on Market</label>
                <Select 
                  value={filters.daysOnMarket} 
                  onValueChange={(value) => handleFilterChange('daysOnMarket', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any time</SelectItem>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="14">Last 14 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="mb-4">
        <p className="text-sm text-gray-500">{filteredCars.length} vehicles found</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={car.image} 
                alt={car.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                {renderDealBadge(car.dealRating)}
              </div>
              <div className="absolute top-3 left-3">
                <Badge variant="outline" className="bg-white">
                  {car.isNew ? "New" : "Used"}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{car.title}</h3>
                  <p className="text-2xl font-semibold text-primary">${car.price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 flex items-center justify-end">
                    <Calendar className="h-3 w-3 mr-1" />
                    {car.year}
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4 pt-0">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1 text-sm">
                  <MapPin className="h-3 w-3 text-gray-500" />
                  <span>{car.location}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <CarFront className="h-3 w-3 text-gray-500" />
                  <span>{car.mileage.toLocaleString()} mi</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Fuel className="h-3 w-3 text-gray-500" />
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <GaugeCircle className="h-3 w-3 text-gray-500" />
                  <span>{car.engineType}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <DoorOpen className="h-3 w-3 text-gray-500" />
                  <span>{car.doors} doors</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <UserSquare className="h-3 w-3 text-gray-500" />
                  <span>{car.seats} seats</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold mb-1">Key Features</h4>
                <div className="flex flex-wrap gap-1">
                  {car.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <Link to={`/car/${car.id}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredCars.length === 0 && (
        <div className="text-center py-20">
          <div className="mb-4">
            <Search className="h-12 w-12 mx-auto text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No vehicles found</h2>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          <Button onClick={resetFilters} className="mt-4">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarListing;
