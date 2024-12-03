"use client";
import FAQ from "@/components/FAQ";
import Introduction from "@/components/Introduction";
import Members from "@/components/Members";
import ParticleBackground from "@/components/ParticleBackground";
import Photos from "@/components/Photos";
import Projects from "@/components/Projects";

const Home = () => (
  <main className="relative overflow-hidden">
    <ParticleBackground />
    <div className="relative z-10">
      <Introduction />
      <Members />
      <Projects />
      <Photos />
      <FAQ />
    </div>
  </main>
);
export default Home;
