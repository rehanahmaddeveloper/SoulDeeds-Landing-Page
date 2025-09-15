
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhySection from '@/components/WhySection';
import WhatYouGet from '@/components/WhatYouGet';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhySection />
        <WhatYouGet />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
