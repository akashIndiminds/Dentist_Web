import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Smith - Modern Dental Care & Oral Surgery',
  description: 'Professional dental care with advanced technology. Specializing in general dentistry, cosmetic procedures, and oral surgery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}