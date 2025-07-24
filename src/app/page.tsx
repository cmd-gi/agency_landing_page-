"use client";

import { useRef, useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import PortfolioSMM from '@/components/sections/PortfolioSMM';
import WorkingProcess from '@/components/sections/WorkingProcess';
import Services from '@/components/sections/Services';
import PricingPackages from '@/components/sections/PricingPackages';
import MarketingPackages from '@/components/sections/MarketingPackages';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <PortfolioSMM />
        <WorkingProcess />
        <Services />
        <PricingPackages />
        <MarketingPackages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}