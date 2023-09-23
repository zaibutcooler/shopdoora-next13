"use client"

import { FC } from "react"
import TypewriterComponent from "typewriter-effect"

import { useLanguage } from "@/hooks/useLanguage"

import { heroBurmese, heroEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const HeroSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? heroEnglish : heroBurmese
  return (
    <div className="h-[90vh] w-full flex items-center justify-center" id="root">
      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-3xl md:text-5xl space-y-5 font-bold">
          <h1 className="text-black dark:text-white mb-2">{data.title}</h1>
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
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Boost your productivity using AI
        </div>
      </div>
    </div>
  )
}

export default HeroSection
