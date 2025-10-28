import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Search } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "TechMart Silicon Valley",
    address: "123 Tech Street, Silicon Valley, CA 94000",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
  },
  {
    id: 2,
    name: "TechMart San Francisco",
    address: "456 Market Street, San Francisco, CA 94102",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM, Sun: Closed",
  },
  {
    id: 3,
    name: "TechMart Los Angeles",
    address: "789 Innovation Blvd, Los Angeles, CA 90001",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
  },
  {
    id: 4,
    name: "TechMart San Diego",
    address: "321 Harbor Drive, San Diego, CA 92101",
    phone: "(555) 456-7890",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
  },
  {
    id: 5,
    name: "TechMart Sacramento",
    address: "654 Capitol Mall, Sacramento, CA 95814",
    phone: "(555) 567-8901",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
  },
  {
    id: 6,
    name: "TechMart Oakland",
    address: "987 Broadway, Oakland, CA 94607",
    phone: "(555) 678-9012",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
  },
];

const StoreFinder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Find a Store</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Visit one of our convenient locations for expert advice and in-store pickup
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your city, postcode, or address..."
                  className="pl-10"
                />
              </div>
              <Button className="bg-accent hover:bg-accent/90">Search</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Card key={store.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{store.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{store.address}</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                      <p className="text-muted-foreground">{store.phone}</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{store.hours}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" className="flex-1">
                      Get Directions
                    </Button>
                    <Button className="flex-1 bg-accent hover:bg-accent/90">
                      Call Store
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Click & Collect</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Shop online and pick up your order in-store within 1 hour. Available at all locations 
                during business hours. It's fast, convenient, and completely free!
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">1.</div>
                  <h3 className="font-semibold mb-2">Shop Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse our products and add items to your cart
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">2.</div>
                  <h3 className="font-semibold mb-2">Choose Click & Collect</h3>
                  <p className="text-sm text-muted-foreground">
                    Select your preferred store at checkout
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">3.</div>
                  <h3 className="font-semibold mb-2">Pick Up in 1 Hour</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive confirmation and collect your order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoreFinder;
