import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Fish, Award, GraduationCap, Users } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Founder & CEO",
      bio: "Marine biologist with 30+ years in sustainable aquaculture. Pioneer in zero-discharge farming systems.",
      expertise: ["Marine Biology", "Sustainable Systems", "Research & Development"],
      education: "PhD Marine Biology, Stanford University",
      achievements: "Published 50+ papers on sustainable aquaculture",
      image: "🐟" // Placeholder - you could generate actual portraits
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Operating Officer",
      bio: "Operations expert specializing in large-scale aquaculture facilities and supply chain optimization.",
      expertise: ["Operations Management", "Supply Chain", "Quality Assurance"],
      education: "MBA Operations Management, MIT Sloan",
      achievements: "Scaled operations from 1 to 15 facilities globally",
      image: "🐟"
    },
    {
      name: "Dr. Elena Vasquez",
      title: "Head of Sustainability",
      bio: "Environmental scientist focused on ecosystem protection and carbon-neutral aquaculture practices.",
      expertise: ["Environmental Science", "Sustainability", "Carbon Neutrality"],
      education: "PhD Environmental Science, UC Berkeley",
      achievements: "Led company to first carbon-neutral certification",
      image: "🐟"
    },
    {
      name: "David Kim",
      title: "Chief Technology Officer",
      bio: "Technology innovator developing next-generation aquaculture systems and IoT monitoring solutions.",
      expertise: ["Technology Innovation", "IoT Systems", "Data Analytics"],
      education: "MS Computer Engineering, Carnegie Mellon",
      achievements: "20+ patents in aquaculture technology",
      image: "🐟"
    },
    {
      name: "Dr. Maria Santos",
      title: "Director of Fish Health",
      bio: "Veterinary specialist ensuring optimal fish health and welfare across all our facilities.",
      expertise: ["Veterinary Medicine", "Fish Health", "Welfare Protocols"],
      education: "DVM + PhD Aquatic Animal Health",
      achievements: "Developed industry-leading health protocols",
      image: "🐟"
    },
    {
      name: "James Thompson",
      title: "Sales Director",
      bio: "Sales leader with deep understanding of global seafood markets and customer relationship management.",
      expertise: ["Sales Strategy", "Market Development", "Customer Relations"],
      education: "BA Business Administration, Harvard",
      achievements: "Expanded market reach to 15 countries",
      image: "🐟"
    },
    {
      name: "Dr. Yuki Tanaka",
      title: "Head of Quality Control",
      bio: "Food safety expert ensuring the highest quality standards from farm to table.",
      expertise: ["Food Safety", "Quality Control", "Regulatory Compliance"],
      education: "PhD Food Science, Tokyo University",
      achievements: "Achieved 100% quality compliance record",
      image: "🐟"
    },
    {
      name: "Sophie Laurent",
      title: "Research Scientist",
      bio: "Marine researcher focusing on genetic improvement and selective breeding programs.",
      expertise: ["Marine Research", "Genetics", "Breeding Programs"],
      education: "PhD Marine Science, Sorbonne University",
      achievements: "Developed superior fish lines with 30% better growth",
      image: "🐟"
    }
  ];

  const departments = [
    {
      name: "Research & Development",
      members: 12,
      description: "Advancing aquaculture science and technology",
      icon: GraduationCap
    },
    {
      name: "Operations",
      members: 25,
      description: "Managing global facility operations",
      icon: Users
    },
    {
      name: "Quality Assurance",
      members: 8,
      description: "Ensuring product excellence and safety",
      icon: Award
    },
    {
      name: "Sales & Marketing",
      members: 15,
      description: "Growing global market presence",
      icon: Fish
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Meet the Experts Behind
              <span className="text-primary"> AquaPrime</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our diverse team of marine biologists, sustainability experts, and industry veterans 
              is united by a shared passion for sustainable aquaculture and ocean conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <dept.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{dept.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{dept.members}</div>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Leadership
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Executive Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in marine science, 
              sustainable business practices, and global operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-4xl">
                    {member.image}
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-1 flex items-center">
                        <GraduationCap className="h-3 w-3 mr-1" />
                        Education
                      </h4>
                      <p className="text-xs text-muted-foreground">{member.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-1 flex items-center">
                        <Award className="h-3 w-3 mr-1" />
                        Achievement
                      </h4>
                      <p className="text-xs text-muted-foreground">{member.achievements}</p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Linkedin className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Mail className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Culture & Values
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team culture is built on shared values and a common mission to revolutionize aquaculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We constantly push boundaries in aquaculture technology and sustainable practices.",
                icon: "🚀"
              },
              {
                title: "Environmental Stewardship",
                description: "Every decision considers its impact on marine ecosystems and environmental health.",
                icon: "🌊"
              },
              {
                title: "Quality Excellence",
                description: "We maintain the highest standards in everything we do, from research to delivery.",
                icon: "⭐"
              },
              {
                title: "Collaborative Spirit",
                description: "Cross-functional teamwork and knowledge sharing drive our collective success.",
                icon: "🤝"
              },
              {
                title: "Continuous Learning",
                description: "We invest in our team's growth and stay at the forefront of industry developments.",
                icon: "📚"
              },
              {
                title: "Global Impact",
                description: "Our work contributes to sustainable food security and ocean conservation worldwide.",
                icon: "🌍"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the AquaPrime Team</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a team that's shaping the future of sustainable aquaculture. 
            We're always looking for passionate individuals who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}