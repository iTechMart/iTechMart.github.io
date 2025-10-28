import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Getting Started with Arduino: A Beginner's Guide",
    excerpt: "Learn the basics of Arduino programming and start building your first electronics projects.",
    category: "Electronics",
    date: "2025-01-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Top 10 Smart Home Devices for 2025",
    excerpt: "Discover the latest smart home technology to automate and secure your living space.",
    category: "Smart Home",
    date: "2025-01-10",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Choosing the Right Power Supply for Your Project",
    excerpt: "A comprehensive guide to selecting power supplies, batteries, and solar solutions.",
    category: "Power",
    date: "2025-01-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Professional Audio Setup: Studio Essentials",
    excerpt: "Everything you need to know about setting up a professional home recording studio.",
    category: "Audio",
    date: "2024-12-28",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "Understanding Electronic Components: Resistors & Capacitors",
    excerpt: "A deep dive into the fundamental components every electronics enthusiast should know.",
    category: "Components",
    date: "2024-12-20",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Cable Management Best Practices",
    excerpt: "Tips and tricks for organizing cables in your home office or entertainment center.",
    category: "Cables",
    date: "2024-12-15",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Essential Tools for Electronics Repair",
    excerpt: "Build your toolkit with these must-have tools for troubleshooting and fixing electronics.",
    category: "Tools",
    date: "2024-12-10",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "LED Lighting Guide: Choose the Perfect Bulbs",
    excerpt: "Learn about color temperature, brightness, and energy efficiency in LED lighting.",
    category: "Lighting",
    date: "2024-12-05",
    readTime: "6 min read",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Tech Articles & Guides</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Expert insights, tutorials, and tips for makers and technology enthusiasts
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/article/${article.id}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold mt-4 group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your knowledge with our community. We're always looking for experienced makers 
              and tech enthusiasts to write guest articles.
            </p>
            <Link to="/contact">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-semibold transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
