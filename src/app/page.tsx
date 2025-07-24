'use client';

import Hero from "./lib/components/Hero/hero";
import Navbar from "./lib/components/Navbar/navbar";
import Section2 from "./lib/components/Section2/section2";
import Section3 from "./lib/components/Section3/section3";
import Section4 from "./lib/components/Section4/section4";
import Section5 from "./lib/components/Section5/section5";
import Footer from "./lib/components/Footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#18181b]">
      <Navbar />
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}
