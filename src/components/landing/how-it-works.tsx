"use client";

import { FileText, BrainCircuit, Target } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-12 h-12 text-warm-ochre" />,
    title: "Share Your Situation",
    description:
      "Paste the job description and your background. No resume upload needed - just tell Athena about your experience.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-warm-ochre" />,
    title: "Get Strategic Insight",
    description:
      "Athena analyzes burnout risk, scope creep, and strategic fit. Plus interview questions to ask and red flags to watch for.",
  },
  {
    icon: <Target className="w-12 h-12 text-warm-ochre" />,
    title: "Make Confident Decisions",
    description:
      "Apply with clarity or pass with confidence. Either way, you'll know you made the right call for your career.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-deep-mycenaean-blue pt-64 pb-20 sm:pb-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-[#F5F2E8] mb-12">
          Career Strategy...Goddess Style
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-display text-[#F5F2E8] mb-2">
                {step.title}
              </h3>
              <p className="text-[#F5F2E8]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};