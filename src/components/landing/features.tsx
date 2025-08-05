"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const features = [
  {
    emoji: "🔥",
    title: "Burnout Risk Assessment",
    description:
      "Will this role stretch you or break you? Athena spots unsustainable workloads and missing support structures before you get trapped.",
  },
  {
    emoji: "🕵️",
    title: "BS Detection Engine",
    description:
      "Four jobs in a trench coat? Vague responsibilities? Athena calls out roles that promise one thing but deliver chaos.",
  },
  {
    emoji: "🎯",
    title: "Strategic Positioning",
    description:
      "How does this move fit your career narrative? Get advice on framing pivots, leveraging experience, and negotiating from strength.",
  },
  {
    emoji: "💬",
    title: "Interview Intel",
    description:
      "Walk into interviews armed with tactical questions that expose what they're really looking for - and whether you want it.",
  },
];

export const Features = () => {
  return (
    <section className="bg-[#314A60] py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-[#F5F2E8] mb-12">
          What Athena Analyzes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-deep-mycenaean-blue p-6 rounded-lg flex flex-col items-center text-center">
              <span className="text-4xl">{feature.emoji}</span>
              <h3 className="text-xl font-display text-[#F5F2E8] mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-[#F5F2E8] text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};