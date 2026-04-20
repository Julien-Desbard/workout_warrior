import { Hero } from '@/components/landing/Hero'
import { CoursCarousel } from '@/components/landing/CoursCarousel'
import { PasDePlanB } from '@/components/landing/PasDePlanB'
import { Temoignages } from '@/components/landing/Temoignages'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CoursCarousel />
      <PasDePlanB />
      <Temoignages />
    </>
  )
}
