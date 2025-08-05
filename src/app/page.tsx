"use client";

import AskAthenaHeader from "@/components/headers/ask-athena-header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { SocialProof } from "@/components/landing/social-proof";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="bg-[#314A60]">
      <AskAthenaHeader />
      <main>
        <Hero />
        <div className="bg-[#314A60]">
          <div className="w-full h-px bg-warm-ochre/20 max-w-7xl mx-auto" />
        </div>
        <HowItWorks />
        <Features />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}