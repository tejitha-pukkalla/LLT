import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LogoShowcase from '../components/home/LogoShowcase';
import ServicesSection from '../components/home/ServicesSection';
import ExpertsSection from '../components/home/ExpertsSection';
// import ClientsMarquee from '../components/home/ClientsMarquee';
import TeamSection from '../components/home/TeamSection';
import IndustriesSection from '../components/home/IndustriesSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/common/SEOHead';


export default function Home() {
  return (
    <>
    <SEOHead page="home" />
    <div>
      <HeroSection />
      <LogoShowcase />
      <ServicesSection />
      <ExpertsSection />
      <TeamSection />
      {/* <ClientsMarquee /> */}
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </div>
    </>
  );
}