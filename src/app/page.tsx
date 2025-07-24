'use client';

import Hero from "./lib/components/Hero/hero";
import Navbar from "./lib/components/Navbar/navbar";
import Section2 from "./lib/components/Section2/section2";
import Section3 from "./lib/components/Section3/section3";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#18181b]">
      <Navbar />
      <Hero/>
      <Section2/>
      <Section3/>
    </div>
  );
}
