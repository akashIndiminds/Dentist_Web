
// src/app/page.tsx
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

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