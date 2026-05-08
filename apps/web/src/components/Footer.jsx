import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6" />
              <span className="text-lg font-bold">Wanderlust India</span>
            </div>
            <p className="text-sm opacity-90">
              Discover the incredible diversity of India through curated travel itineraries and authentic experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wide uppercase">Quick Links</span>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Explore Destinations
              </Link>
              <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wide uppercase">Get in Touch</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4" />
                <span>hello@wanderlustindia.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <p className="text-sm text-center opacity-80">
            {currentYear} Wanderlust India. Crafted with passion for travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;