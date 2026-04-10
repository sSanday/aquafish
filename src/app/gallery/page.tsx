"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Camera, Award, Leaf, Download, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Images", count: 24 },
    { id: "facilities", name: "Our Facilities", count: 8 },
    { id: "fish", name: "Our Fish", count: 10 },
    { id: "sustainability", name: "Sustainability", count: 6 }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Atlantic Salmon in Premium Pens",
      category: "fish",
      description: "Our Atlantic salmon swimming in crystal-clear waters",
      type: "fish-showcase",
      specs: "Premium grade salmon, 3-4kg average weight"
    },
    {
      id: 2,
      title: "State-of-the-Art Facility",
      category: "facilities",
      description: "Our flagship aquaculture facility with advanced filtration systems",
      type: "facility-overview",
      specs: "50,000m² facility, zero-discharge system"
    },
    {
      id: 3,
      title: "Sustainable Feed Production",
      category: "sustainability",
      description: "Plant-based feed production reducing ocean impact",
      type: "sustainability-focus",
      specs: "100% sustainable ingredients, locally sourced"
    },
    {
      id: 4,
      title: "Sea Bass Quality Control",
      category: "fish",
      description: "Quality inspection of European sea bass before processing",
      type: "quality-assurance",
      specs: "Individual fish inspection, premium grading"
    },
    {
      id: 5,
      title: "Research Laboratory",
      category: "facilities",
      description: "Advanced research facility for aquaculture innovation",
      type: "research-development",
      specs: "Molecular biology lab, genetic research"
    },
    {
      id: 6,
      title: "Water Quality Monitoring",
      category: "sustainability",
      description: "24/7 monitoring of water quality parameters",
      type: "environmental-monitoring",
      specs: "Real-time IoT sensors, automated systems"
    },
    {
      id: 7,
      title: "Rainbow Trout Harvest",
      category: "fish",
      description: "Fresh rainbow trout being harvested in optimal conditions",
      type: "harvest-process",
      specs: "Stress-free harvesting, immediate cooling"
    },
    {
      id: 8,
      title: "Solar Panel Installation",
      category: "sustainability",
      description: "Renewable energy powering our operations",
      type: "renewable-energy",
      specs: "100% renewable energy, carbon neutral"
    },
    {
      id: 9,
      title: "Breeding Program",
      category: "fish",
      description: "Selective breeding for improved fish genetics",
      type: "breeding-innovation",
      specs: "Genetic improvement, disease resistance"
    },
    {
      id: 10,
      title: "Processing Center",
      category: "facilities",
      description: "Hygienic processing facility with advanced technology",
      type: "processing-excellence",
      specs: "HACCP certified, automated processing"
    },
    {
      id: 11,
      title: "Team Training Session",
      category: "facilities",
      description: "Our expert team during a sustainability training session",
      type: "team-development",
      specs: "Continuous education, best practices"
    },
    {
      id: 12,
      title: "Award Ceremony",
      category: "sustainability",
      description: "Receiving sustainability award for environmental excellence",
      type: "recognition",
      specs: "Industry leadership, environmental stewardship"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getImagePlaceholder = (type: string) => {
    const colors = {
      "fish-showcase": "from-accent to-accent-light",
      "facility-overview": "from-primary to-primary-light",
      "sustainability-focus": "from-secondary to-secondary-light",
      "quality-assurance": "from-coral to-primary",
      "research-development": "from-primary-dark to-accent",
      "environmental-monitoring": "from-secondary to-accent",
      "harvest-process": "from-accent-light to-coral",
      "renewable-energy": "from-secondary-light to-primary",
      "breeding-innovation": "from-primary-light to-accent-light",
      "processing-excellence": "from-coral to-accent",
      "team-development": "from-primary to-secondary",
      "recognition": "from-coral to-secondary"
    };
    
    return colors[type as keyof typeof colors] || "from-primary to-accent";
  };

  const getIcon = (type: string) => {
    const icons = {
      "fish-showcase": Fish,
      "facility-overview": Camera,
      "sustainability-focus": Leaf,
      "quality-assurance": Award,
      "research-development": Camera,
      "environmental-monitoring": Leaf,
      "harvest-process": Fish,
      "renewable-energy": Leaf,
      "breeding-innovation": Fish,
      "processing-excellence": Camera,
      "team-development": Camera,
      "recognition": Award
    };
    
    return icons[type as keyof typeof icons] || Camera;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Camera className="h-4 w-4 mr-2" />
              Gallery
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Visual Journey Through
              <span className="text-primary"> Our World</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our state-of-the-art facilities, premium fish species, and sustainable 
              practices through this comprehensive visual showcase of AquaPrime operations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "High-Resolution Images", icon: Camera },
              { number: "15", label: "Global Facilities", icon: Fish },
              { number: "25+", label: "Years Documented", icon: Award },
              { number: "12", label: "Species Showcased", icon: Leaf }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-gradient-to-r from-primary to-accent" : ""}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const IconComponent = getIcon(item.type);
              return (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div 
                      className={`h-48 bg-gradient-to-br ${getImagePlaceholder(item.type)} flex items-center justify-center relative overflow-hidden`}
                    >
                      <IconComponent className="h-16 w-16 text-white/80" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">View Details</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-medium">
                          {item.specs}
                        </span>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Featured Showcase
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Award-Winning Photography</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our photography has been recognized by industry publications and environmental organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="h-20 w-20 text-white/80" />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    <Award className="h-3 w-3 mr-1" />
                    Award Winner
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">Sustainable Innovation Portfolio</h3>
                  <p className="text-muted-foreground mb-4">
                    Winner of the 2024 International Aquaculture Photography Award for our 
                    comprehensive documentation of sustainable farming practices.
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    View Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-secondary to-accent-light flex items-center justify-center">
                  <Fish className="h-20 w-20 text-white/80" />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    <Leaf className="h-3 w-3 mr-1" />
                    Environmental Focus
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">Marine Conservation Series</h3>
                  <p className="text-muted-foreground mb-4">
                    Featured in National Geographic's coverage of sustainable aquaculture 
                    and its role in ocean conservation efforts.
                  </p>
                  <Button className="bg-gradient-to-r from-secondary to-accent">
                    Explore Series
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">High-Resolution Media Kit</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download our complete media kit including high-resolution images, facility diagrams, 
            and sustainability infographics for press and partnership use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Media Kit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Request Custom Images
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}