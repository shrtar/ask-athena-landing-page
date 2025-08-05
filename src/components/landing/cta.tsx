"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="bg-[#314A60] py-20 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-[#F5F2E8] !text-balance">
          Ready to Stop Second-Guessing Your Career Moves?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#F5F2E8] max-w-3xl mx-auto !text-balance">
          Join professionals who choose strategy over desperation in their job
          search.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="bg-[#A7562D] hover:bg-[#5B7553] text-white py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => window.open("https://app.askathena.work", "_blank")}
          >
            Get Strategic Guidance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="mt-4 text-sm text-[#F5F2E8]">
          Free analysis • No signup required • Results in 2 minutes
        </p>
      </div>
    </section>
  );
};