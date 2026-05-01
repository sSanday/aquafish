import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Fish, Leaf, Award, Users, CheckCircle, Waves } from "lucide-react";
import heroImage from "@/assets/hero-aquaculture.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        <div className="absolute inset-0 hero-gradient opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 animate-float">
            <Leaf className="h-4 w-4 mr-2" />
            Sustainable Aquaculture Leaders
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Fish,
            <br />
            <span className="text-accent-light">Pristine Waters</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering sustainable aquaculture with cutting-edge technology and environmental stewardship. 
            Delivering the finest fish products while protecting our marine ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-coral hover:bg-coral/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-coral/50 transition-all duration-300"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
            >
              Watch Our Story
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 animate-float">
          <Waves className="h-16 w-16 text-white/30" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Fish className="h-12 w-12 text-white/20" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years Experience", icon: Award },
              { number: "500M+", label: "Fish Produced Annually", icon: Fish },
              { number: "50+", label: "Expert Team Members", icon: Users },
              { number: "15", label: "Countries Served", icon: Waves },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Leaf className="h-4 w-4 mr-2" />
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Leading the Future of 
                <span className="text-primary"> Sustainable Aquaculture</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At AquaPrime, we're revolutionizing the aquaculture industry through innovative farming techniques, 
                environmental responsibility, and unwavering commitment to quality. Our state-of-the-art facilities 
                ensure the highest standards while preserving marine ecosystems for future generations.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Zero-discharge recirculating systems",
                  "Sustainable feed sourcing",
                  "Advanced water quality monitoring",
                  "Marine ecosystem protection",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Card className="shadow-lg hover:shadow-depth transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Fish className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Premium Quality Guarantee</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every fish that leaves our facilities meets the highest standards of quality, 
                      freshness, and sustainability. Our rigorous quality control processes ensure 
                      excellence in every product.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Products
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Premium Fish Species</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of sustainably farmed fish, raised with care in pristine conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Atlantic Salmon",
                description: "Premium quality salmon raised in optimal conditions",
                features: ["Omega-3 rich", "Sustainable farming", "Fresh daily"]
              },
              {
                name: "Sea Bass",
                description: "Delicate white fish with exceptional flavor profile",
                features: ["Wild taste", "Eco-friendly", "Restaurant quality"]
              },
              {
                name: "Rainbow Trout",
                description: "Vibrant and flavorful freshwater species",
                features: ["Color retention", "Firm texture", "Nutrient dense"]
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <Fish className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with AquaPrime?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading restaurants, distributors, and retailers who trust AquaPrime for their premium fish needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}