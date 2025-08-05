"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const AskAthenaHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-b from-[#F5F1EB] to-white-alpha-gradient pt-safe-top">
      {/* Navigation Bar */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12 border-b border-[#E5DDD1]">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">🦉</span>
            <span className="font-display text-xl text-[#F5F2E8] group-hover:text-[#D4A574] transition-colors duration-300">
              Ask Athena
            </span>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-sm text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body"
            >
              Testimonials
            </Link>
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              className="bg-[#D4A574] hover:bg-[#B8956A] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Get Started
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#F5F2E8] hover:text-[#D4A574]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white bg-opacity-95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg z-20 animate-in slide-in-from-top-4 duration-300 ease-out-cubic">
          <div className="flex flex-col items-center py-4 space-y-4 border-b border-[#E5DDD1]">
            <Link
              href="#"
              className="text-base text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-base text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-base text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-base text-[#F5F2E8] hover:text-[#D4A574] transition-colors duration-200 font-body py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}

      {/* Hero Content Section */}
      <div className="container mx-auto py-16 lg:py-24 px-6 text-center max-w-4xl relative z-0">
        <h1 className="font-display text-3xl lg:text-4xl text-[#F5F2E8] leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
          A strategic gut check to help you make better career decisions
        </h1>
      </div>
    </header>
  );
};

const testimonials = [
  {
    quote:
      "Really interested in the goddess modules concept. The analysis was spot-on for understanding how this role fits my career trajectory.",
    author: "H, Paid Media Professional",
  },
  {
    quote:
      "Finally, a tool that doesn't just tell you to 'spray and pray' with applications. Athena helped me avoid a role that would have been a nightmare.",
    author: "Career Pivotter",
  },
  {
    quote:
      "The strategic positioning advice was worth its weight in gold. I went into my interview knowing exactly how to frame my experience.",
    author: "Marketing Director",
  },
];

export const SocialProof = () => {
  return (
    <section className="bg-deep-mycenaean-blue py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-[#F5F2E8] mb-12">
          Hear from users who trusted Athena
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5F2E8] p-8 rounded-lg flex flex-col justify-between shadow-lg"
            >
              <p className="text-[#A7562D] italic text-lg leading-relaxed relative">
                <span className="absolute -left-4 -top-0 text-[#A7562D] text-4xl font-serif">"</span>
                {testimonial.quote}
                <span className="absolute -right-2 -bottom-4 text-[#A7562D] text-4xl font-serif">"</span>
              </p>
              <footer className="mt-6 text-right text-[#A7562D]">
                — {testimonial.author}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};