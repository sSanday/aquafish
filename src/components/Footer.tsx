import Link from "next/link";
import { Fish, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8" />
              <span className="font-bold text-xl">AquaPrime</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading sustainable aquaculture company committed to providing premium fish products while protecting our marine environment.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link>
              <Link href="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Products</Link>
              <Link href="/team" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Team</Link>
              <Link href="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">Gallery</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-primary-foreground/80">Sustainable Fish Farming</span>
              <span className="text-primary-foreground/80">Aquaculture Consulting</span>
              <span className="text-primary-foreground/80">Marine Research</span>
              <span className="text-primary-foreground/80">Quality Assurance</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">123 Ocean Drive, Coastal City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">info@aquaprime.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 AquaPrime. All rights reserved. | Committed to sustainable marine practices.
          </p>
        </div>
      </div>
    </footer>
  );
};