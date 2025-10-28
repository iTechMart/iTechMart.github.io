import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import electronicsImg from "@/assets/category-electronics.jpg";
import audioImg from "@/assets/category-audio.jpg";
import powerImg from "@/assets/category-power.jpg";
import smarthomeImg from "@/assets/category-smarthome.jpg";
import cablesImg from "@/assets/category-cables.jpg";
import toolsImg from "@/assets/category-tools.jpg";
import lightingImg from "@/assets/category-lighting.jpg";
import componentsImg from "@/assets/category-components.jpg";
import { Package, Truck, Award, Clock } from "lucide-react";

const categoryImages: Record<string, string> = {
  electronics: electronicsImg,
  audio: audioImg,
  power: powerImg,
  smarthome: smarthomeImg,
  cables: cablesImg,
  tools: toolsImg,
  lighting: lightingImg,
  components: componentsImg,
};

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section
          className="relative h-[500px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="text-5xl font-bold mb-4">
                Power Your Projects with Premium Tech
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Discover electronics, tools, and components for makers and professionals
              </p>
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-accent mb-3" />
                <h3 className="font-semibold mb-1">1HR Click & Collect</h3>
                <p className="text-sm text-muted-foreground">Shop online, collect in-store</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-12 w-12 text-accent mb-3" />
                <h3 className="font-semibold mb-1">Free Delivery</h3>
                <p className="text-sm text-muted-foreground">On orders over $99</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-accent mb-3" />
                <h3 className="font-semibold mb-1">Expert Support</h3>
                <p className="text-sm text-muted-foreground">Technical assistance available</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Package className="h-12 w-12 text-accent mb-3" />
                <h3 className="font-semibold mb-1">Quality Products</h3>
                <p className="text-sm text-muted-foreground">Trusted brands only</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground">
              Find exactly what you need from our wide range of categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={categoryImages[category.id]}
              />
            ))}
          </div>
        </section>

        <section className="bg-accent py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-accent-foreground">
              <h2 className="text-4xl font-bold mb-4">New Products Available</h2>
              <p className="text-lg mb-8 opacity-90">
                Shop our exciting NEW products and stay ahead of the curve
              </p>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                >
                  Browse New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Check out our most popular items
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
