"use client"

import { FC } from "react"

import { useLanguage } from "@/hooks/useLanguage"

import { aboutBurmese, aboutEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const AboutSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? aboutEnglish : aboutBurmese

  return (
    <div className="min-h-[100vh]">
      <header className="w-full text-center leading-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          About Our Company
        </h1>
        <p className="text-gray-500">
          ShopDoora e-Commerce တွင် ပါဝင်မည့် Features များ
        </p>
      </header>
      <div className="flex justify-center items-center w-full">
        <main className="flex gap-5 justify-between px-0 md:px-6 flex-col md:flex-row w-full md:w-[1200px]">
          <section className="w-full md:w-2/5 flex justify-center">
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-md bg-green-500" />
          </section>
          <section className="w-full md:w-3/5 bg-gray-400">
            Main Contents
          </section>
        </main>
      </div>
    </div>
  )
}

export default AboutSection
