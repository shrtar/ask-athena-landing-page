"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-deep-mycenaean-blue text-[#F5F2E8] py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-display text-lg mb-2 text-[#F5F2E8]">Ask Athena</h3>
          <p className="text-sm text-[#F5F2E8]">Strategic career guidance for smart professionals</p>
        </div>
        <div className="flex justify-center items-center gap-x-6 text-sm text-[#F5F2E8]">
          <Link href="#" className="hover:text-warm-ochre transition-colors">About</Link>
          <Link href="#" className="hover:text-warm-ochre transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-warm-ochre transition-colors">Terms</Link>
        </div>
        <div className="flex flex-col items-center md:items-end">
           <p className="text-sm text-[#F5F2E8] italic">Built with wisdom, not algorithms</p>
           <p className="text-xs text-[#F5F2E8] mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};