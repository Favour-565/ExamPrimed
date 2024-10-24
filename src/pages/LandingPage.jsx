import React from "react";
import Header from "../components/common/Header";
import Hero from "../components/common/home/Hero";
import Content from "../components/common/home/Content";
import PartnersSection from "../components/common/home/PartnersSection";
import Footer from "../components/common/Footer";

function LandingPage() {
  return (
    <>
      <main className="flex w-full flex-col overflow-hidden">
        <Header />
        <section className="hero-background flex w-full items-center justify-start">
          <Hero />
        </section>
        <Content />
        <PartnersSection />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
