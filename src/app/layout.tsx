// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. [Name] - Modern Dental Care & Oral Surgery',
  description: 'Professional dental care with advanced technology. Specializing in general dentistry, cosmetic procedures, and oral surgery. Book your appointment today.',
  keywords: 'dentist, dental care, oral surgery, cosmetic dentistry, dental implants, teeth whitening',
  authors: [{ name: 'Dr. [Name]' }],
  openGraph: {
    title: 'Dr. [Name] - Modern Dental Care & Oral Surgery',
    description: 'Professional dental care with advanced technology',
    images: ['/images/hero/dental-office.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
