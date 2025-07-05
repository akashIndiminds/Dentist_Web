// src/app/page.tsx
import React from 'react';
import { Footer } from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Hero } from './components/Hero';



export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}