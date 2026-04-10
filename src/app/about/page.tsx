import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Fish, Award, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Fish className="h-4 w-4 mr-2" />
              About AquaPrime
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Pioneering Sustainable 
              <span className="text-primary"> Aquaculture</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 25 years, AquaPrime has been at the forefront of sustainable aquaculture, 
              combining cutting-edge technology with environmental stewardship to deliver the 
              finest fish products while protecting our precious marine ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-depth transition-shadow duration-300">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize aquaculture through sustainable practices, innovative technology, 
                  and unwavering commitment to quality, while preserving marine ecosystems for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-depth transition-shadow duration-300">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in sustainable aquaculture, setting industry standards 
                  for environmental responsibility and product excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-depth transition-shadow duration-300">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sustainability, innovation, quality, transparency, and respect for marine life 
                  guide every decision we make and every product we deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Leaf className="h-4 w-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                From Vision to
                <span className="text-primary"> Industry Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1999 by marine biologist Dr. Sarah Chen, AquaPrime began as a small 
                research facility focused on developing sustainable aquaculture techniques. 
                Today, we operate state-of-the-art facilities across three continents, 
                serving premium markets worldwide.
              </p>
              <div className="space-y-4">
                {[
                  "1999: Founded with focus on sustainable practices",
                  "2005: First commercial facility operational",
                  "2012: International expansion begins",
                  "2018: Zero-waste production achieved",
                  "2024: Leading global aquaculture innovator"
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1" />
                    <span className="text-muted-foreground">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">25+</div>
                  <div className="text-lg text-muted-foreground mb-6">Years of Excellence</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500M+</div>
                      <div className="text-sm text-muted-foreground">Fish Produced</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">15</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">50+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-coral">100%</div>
                      <div className="text-sm text-muted-foreground">Sustainable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Leaf className="h-4 w-4 mr-2" />
              Sustainability
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Environmental Stewardship</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to the environment goes beyond compliance – it's at the core of everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Zero-Waste Operations",
                description: "Complete resource recycling with zero environmental discharge",
                icon: Leaf
              },
              {
                title: "Renewable Energy",
                description: "100% renewable energy powers all our facilities",
                icon: Award
              },
              {
                title: "Ecosystem Protection",
                description: "Active marine habitat conservation and restoration programs",
                icon: Fish
              },
              {
                title: "Sustainable Feed",
                description: "Plant-based and alternative protein sources reduce ocean impact",
                icon: Target
              },
              {
                title: "Water Conservation",
                description: "Advanced recirculation systems minimize water usage",
                icon: CheckCircle
              },
              {
                title: "Carbon Neutral",
                description: "Certified carbon-neutral operations across all facilities",
                icon: Heart
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Certifications
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Industry Recognition</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence is validated by leading industry certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "ASC Certified",
              "Global GAA BAP",
              "ISO 14001",
              "Marine Stewardship"
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-background rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <div className="font-semibold text-foreground">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}