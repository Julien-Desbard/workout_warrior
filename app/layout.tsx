import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SideBanner } from '@/components/layout/SideBanner'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Workout Warrior Academy — Formation Sport-Santé',
  description: "La plateforme de référence en formation continue pour les kinésithérapeutes et professionnels de l'activité physique adaptée.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SideBanner />
      </body>
    </html>
  )
}
