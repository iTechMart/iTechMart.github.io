import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";

const Products = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const currentCategory = categories.find((c) => c.id === selectedCategory);
  const categoryName = currentCategory ? currentCategory.name : "All Products";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-lg text-muted-foreground">
            {currentCategory ? currentCategory.description : "Browse our complete product range"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            onClick={() => setSelectedCategory("all")}
            variant={selectedCategory === "all" ? "default" : "outline"}
            className={selectedCategory === "all" ? "bg-accent hover:bg-accent/90" : ""}
          >
            All Products
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={selectedCategory === cat.id ? "bg-accent hover:bg-accent/90" : ""}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;
