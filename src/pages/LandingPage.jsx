import React from "react";
import Hero from "../components/common/home/Hero";
import ExamSection from "../components/common/home/ExamSection";
import SubjectsSection from "../components/common/home/SubjectsSection";
import PartnersSection from "../components/common/home/PartnersSection";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function LandingPage() {
  return (
    <>
      <main className="flex flex-col overflow-hidden">
        <Header />
        <div className="hero-background flex min-h-screen w-full items-center justify-start">
          <Hero />
        </div>
        <ExamSection />
        <SubjectsSection />
        <PartnersSection />

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
