import React from "react"
import { PageNotFoundError } from "next/dist/shared/lib/utils"
import { notFound, redirect } from "next/navigation"

import AboutSection from "@/components/main/about/AboutSection"
import CompaniesBanner from "@/components/main/companies/CompaniesBanner"
import FeaturesSection from "@/components/main/features/FeaturesSection"
import HeroSection from "@/components/main/hero/HeroSection"
import PricingSection from "@/components/main/pricing/PricingSection"
import ServiceSection from "@/components/main/service/ServiceSection"

export default function HomePage({ params }: { params: { lang: string } }) {
  if (params.lang !== "my" && params.lang !== "en") {
    return redirect("/en")
  }

  const isEnglish = params.lang === "en" ? true : false

  return (
    <main className="md:container px-4 md:px-0 md:mx-auto w-full space-y-4 md:space-y-8">
      <HeroSection isEnglish={isEnglish} />
      <CompaniesBanner />
      <AboutSection isEnglish={isEnglish} />
      <ServiceSection isEnglish={isEnglish} />
      <FeaturesSection isEnglish={isEnglish} language={params.lang} />
      <PricingSection isEnglish={isEnglish} />
    </main>
  )
}
