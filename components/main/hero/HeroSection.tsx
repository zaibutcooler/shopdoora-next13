"use client"

import { FC } from "react"
import TypewriterComponent from "typewriter-effect"

import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"

import { gradientStyle, heroBurmese, heroEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const HeroSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? heroEnglish : heroBurmese
  return (
    <div className="h-[95vh] w-full flex items-center justify-center" id="root">
      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-2xl md:text-5xl space-y-5 font-bold">
          <h1 className="text-black dark:text-white mb-2 flex">
            <span style={gradientStyle} className="mr-0 md:mr-3 text-5xl">
              ShopDoora
            </span>
            <span className="hidden md:block">{data.title}</span>
          </h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            <TypewriterComponent
              options={{
                strings: data.services,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-gray-500">
          {data.subTitle}
        </div>
        <div className="flex gap-4 justify-center">
          <Button className="rounded-full"> Get Started </Button>
          <Button
            className="rounded-full text-black dark:text-indigo-50"
            variant="outline"
          >
            {" "}
            About Us{" "}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
