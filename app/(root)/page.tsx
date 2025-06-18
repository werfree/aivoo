'use client';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureCard';
import FaqSection from './components/FaqItem';
import TestimonialSection from './components/TestimonialCard';
// import { ShieldCheck } from '@/components/icons/landingPage';



export default function LandingPage() {
  

  return (
    <>
      <HeroSection/>
      <FeatureSection/>
      <TestimonialSection/>
      <FaqSection/>
    </>
  );
}
