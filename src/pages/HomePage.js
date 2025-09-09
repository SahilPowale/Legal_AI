// src/pages/HomePage.js
import React from 'react';
import AppNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import PracticeAreas from '../components/PracticeAreas';
import LawyerSpotlight from '../components/LawyerSpotlight';
import AboutTeaser from '../components/AboutTeaser';
import Testimonials from '../components/Testimonials';
import PopularQuestions from '../components/PopularQuestions';
import Footer from '../components/Footer';

export default function HomePage(){
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <HowItWorks />
      <PracticeAreas />
      <LawyerSpotlight />
      <AboutTeaser />
      <Testimonials />
      <PopularQuestions />
      <Footer />
    </>
  );
}
