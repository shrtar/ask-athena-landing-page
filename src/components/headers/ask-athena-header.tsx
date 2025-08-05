"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Testimonials", href: "#" },
];

export default function AskAthenaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#314A60] sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-hidden="true">
            🦉
          </span>
          <span className="font-display text-xl text-[#F5F2E8]">
            Ask Athena
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#F5F2E8] hover:text-warm-ochre transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-[#F5F2E8]" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-deep-mycenaean-blue p-6 flex flex-col"
                aria-label="Mobile menu"
              >
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl" aria-hidden="true">
                      🦉
                    </span>
                    <span className="font-display text-lg text-[#F5F2E8]">
                      Ask Athena
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6 text-[#F5F2E8]" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col gap-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-sans text-base font-medium text-[#F5F2E8] hover:text-warm-ochre transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}