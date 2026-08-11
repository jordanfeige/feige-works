import { About } from "@/components/sections/About";
import { AISection } from "@/components/sections/AISection";
import { CommonThread } from "@/components/sections/CommonThread";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";

export default function Home() {
  return (
    <main id="main">
      <div id="top">
        <Hero />
        <WhatWeBuild />
        <CommonThread />
        <AISection />
        <About />
        <FinalCTA />
      </div>
    </main>
  );
}
