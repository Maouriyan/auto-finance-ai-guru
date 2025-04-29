
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, CarFront } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <CarFront className="h-6 w-6 text-primary" />
            <span>Use AI to Buy</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex ml-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/cars">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Browse Cars
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <Link to="/" className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Financing Options
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore flexible financing solutions tailored to your budget.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Vehicle History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get detailed vehicle history reports
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Trade-In</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Value your current vehicle for trade
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Test Drives</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule a test drive
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/cars" className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              Search Cars
            </Button>
          </Link>
          
          <Link to="/">
            <Button size="sm">Get Financing</Button>
          </Link>
          
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
