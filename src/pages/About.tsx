import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Users, Package, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About TechMart</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Your trusted partner in electronics and technology for over 15 years
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2008, TechMart has grown from a small electronics shop to one of the leading 
              technology retailers in the country. Our mission is to provide makers, professionals, and 
              technology enthusiasts with the best products and expert support.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We carefully curate our product range to ensure quality and reliability. From Arduino boards 
              to professional audio equipment, from power tools to smart home devices, we stock everything 
              you need for your projects.
            </p>
          </div>
        </section>

        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose TechMart</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
                <p className="text-muted-foreground">
                  Only trusted brands and verified suppliers
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-muted-foreground">
                  Technical assistance from experienced staff
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick shipping and click & collect options
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                <p className="text-muted-foreground">
                  Supporting makers and innovators
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're committed to sustainability and responsible business practices. We work with suppliers 
              who share our values and continuously improve our operations to reduce environmental impact. 
              Our team is passionate about technology and dedicated to helping you find the right products 
              for your needs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
