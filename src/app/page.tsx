'use client';

import Hero from "./lib/components/Hero/hero";
import Navbar from "./lib/components/Navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#18181b]">
      <Navbar />
      <Hero/>
    </div>
  );
}
