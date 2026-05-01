import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Leaf, CheckCircle, Star, ArrowRight, Package } from "lucide-react";
import { prisma } from "@/lib/prisma";

// Fetch langsung dari DB di server (Next.js Server Component)
async function getProducts() {
  try {
    return await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

async function getCategories() {
  try {
    return await prisma.category.findMany({ orderBy: { name: "asc" } });
  } catch {
    return [];
  }
}

export default async function Products() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  const hasData = products.length > 0;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Fish className="h-4 w-4 mr-2" />
              Our Products
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Premium Fish Species
              <span className="text-primary"> Sustainably Farmed</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our comprehensive range of premium fish species, each raised with meticulous
              care in optimal conditions to deliver exceptional quality, flavor, and nutritional value.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "100% Sustainable", desc: "Environmentally responsible farming" },
              { icon: Star, title: "Premium Quality", desc: "Rigorous quality control standards" },
              { icon: CheckCircle, title: "Fresh Daily", desc: "Harvested and delivered fresh" },
              { icon: Fish, title: "Expert Care", desc: "Raised by aquaculture specialists" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      {categories.length > 0 && (
        <section className="py-6 bg-muted/20 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="default" className="cursor-pointer px-4 py-2 text-sm">All</Badge>
              {categories.map((cat) => (
                <Badge key={cat.id} variant="outline" className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/10 transition-colors">
                  {cat.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {!hasData ? (
            // Empty state — tampil kalau DB belum ada data
            <div className="text-center py-20">
              <Package className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-muted-foreground mb-2">No Products Yet</h2>
              <p className="text-muted-foreground mb-6">
                Run <code className="bg-muted px-2 py-1 rounded text-sm">npx prisma db push</code> then seed the database.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {product.category.name}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                          <p className="text-2xl font-bold text-primary">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        {product.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-20 w-20 object-cover rounded-lg"
                          />
                        ) : (
                          <Fish className="h-12 w-12 text-primary opacity-20" />
                        )}
                      </div>

                      {product.description && (
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {product.description}
                        </p>
                      )}

                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}