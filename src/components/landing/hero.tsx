"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-[#314A60] text-[#F5F2E8] pt-20 md:pt-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-display text-[#F5F2E8] !text-balance">
          Work With Wisdom
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto !text-balance text-[#F5F2E8]">
          Stop applying to jobs that will burn you out. Athena is here to help
          you cut through the noise, see through the BS and give you actually
          useful strategic career advice.
        </p>
        <p className="mt-8 text-sm md:text-base text-[#F5F2E8] max-w-2xl mx-auto !text-balance">
          Used by marketing professionals, career pivoters, and strategic
          thinkers who refuse to settle for 'four jobs in a trench coat.'
        </p>
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-secondary text-primary-foreground py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => window.open("https://ask-athena.lovable.app", "_blank")}
          >
            Get Your Gut Check
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};