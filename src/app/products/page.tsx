import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Leaf, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "Atlantic Salmon",
      category: "Premium Saltwater",
      description: "Our flagship product featuring exceptional marbling and rich omega-3 content. Raised in pristine cold-water environments.",
      features: ["Rich in Omega-3", "Superior marbling", "Cold-water raised", "ASC certified"],
      specifications: {
        "Average Weight": "3-5 kg",
        "Harvest Size": "60-70 cm",
        "Fat Content": "12-16%",
        "Protein": "20-22%"
      },
      sustainability: "Zero-discharge recirculating systems with 100% renewable energy"
    },
    {
      name: "European Sea Bass",
      category: "Premium Saltwater",
      description: "Delicate white fish with firm texture and mild flavor. Perfect for fine dining establishments and premium retail.",
      features: ["Firm white flesh", "Mild flavor profile", "Consistent quality", "Wild taste achieved"],
      specifications: {
        "Average Weight": "1.5-2.5 kg",
        "Harvest Size": "35-45 cm",
        "Fat Content": "4-6%",
        "Protein": "18-20%"
      },
      sustainability: "Sustainable feed sourcing with marine ecosystem protection protocols"
    },
    {
      name: "Rainbow Trout",
      category: "Freshwater Specialty",
      description: "Vibrant freshwater species known for its colorful appearance and delicate taste. Ideal for smoking and grilling.",
      features: ["Natural color retention", "Delicate flavor", "Excellent for smoking", "High nutritional value"],
      specifications: {
        "Average Weight": "300-500g",
        "Harvest Size": "25-35 cm",
        "Fat Content": "6-8%",
        "Protein": "19-21%"
      },
      sustainability: "Land-based freshwater systems with complete water recycling"
    },
    {
      name: "Mediterranean Sea Bream",
      category: "Premium Saltwater",
      description: "Prized for its sweet, delicate flavor and firm texture. A favorite among Mediterranean cuisine enthusiasts.",
      features: ["Sweet delicate flavor", "Firm texture", "Mediterranean origin", "Premium quality"],
      specifications: {
        "Average Weight": "400-600g",
        "Harvest Size": "25-30 cm",
        "Fat Content": "3-5%",
        "Protein": "19-21%"
      },
      sustainability: "Integrated multi-trophic aquaculture with seaweed co-cultivation"
    },
    {
      name: "Arctic Char",
      category: "Premium Freshwater",
      description: "Cold-water specialty with salmon-like richness and unique flavor profile. Sustainably farmed in pristine conditions.",
      features: ["Salmon-like richness", "Unique flavor", "Cold-water species", "Limited availability"],
      specifications: {
        "Average Weight": "1-2 kg",
        "Harvest Size": "30-40 cm",
        "Fat Content": "8-12%",
        "Protein": "20-22%"
      },
      sustainability: "Ultra-low density farming with enhanced welfare protocols"
    },
    {
      name: "Organic King Salmon",
      category: "Organic Premium",
      description: "Our premium organic offering featuring the largest salmon species. Raised with certified organic standards.",
      features: ["Certified organic", "Largest salmon species", "Exceptional flavor", "Premium positioning"],
      specifications: {
        "Average Weight": "5-8 kg",
        "Harvest Size": "70-90 cm",
        "Fat Content": "15-20%",
        "Protein": "22-24%"
      },
      sustainability: "Certified organic feed with zero synthetic additives or chemicals"
    }
  ];

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
              { icon: Fish, title: "Expert Care", desc: "Raised by aquaculture specialists" }
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

      {/* Products Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {product.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      </div>
                      <Fish className="h-12 w-12 text-primary opacity-20" />
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Specifications</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(product.specifications).map(([key, value], specIndex) => (
                          <div key={specIndex} className="flex justify-between">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sustainability */}
                    <div className="bg-secondary/10 p-4 rounded-lg mb-4">
                      <div className="flex items-start">
                        <Leaf className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-sm mb-1">Sustainability</h5>
                          <p className="text-xs text-muted-foreground">{product.sustainability}</p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Custom Solutions
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Tailored for Your Needs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond our standard offerings, we provide custom solutions for specific requirements, 
              seasonal demands, and unique market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bulk Supply",
                description: "Large volume orders with consistent quality and delivery schedules for distributors and processors.",
                features: ["Volume discounts", "Flexible delivery", "Quality guarantee"]
              },
              {
                title: "Private Label",
                description: "Custom packaging and branding solutions for retailers and restaurant chains.",
                features: ["Custom packaging", "Brand development", "Marketing support"]
              },
              {
                title: "Seasonal Specials",
                description: "Limited edition products and seasonal varieties to meet market trends and demands.",
                features: ["Market-driven", "Limited availability", "Premium positioning"]
              }
            ].map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Fish className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}