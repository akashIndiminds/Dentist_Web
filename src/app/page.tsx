// src/app/page.tsx
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';



export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}