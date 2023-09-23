"use client"

import { FC } from "react"

import { useLanguage } from "@/hooks/useLanguage"
import Header from "@/components/ui/header"

import { aboutBurmese, aboutEnglish, minicardData } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const AboutSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? aboutEnglish : aboutBurmese

  return (
    <div className="min-h-[100vh]">
      <Header title={data.title} description={data.description} id="about" />
      <div className="flex justify-center items-center w-full">
        <main className="flex gap-5 justify-between px-0 md:px-6 flex-col md:flex-row w-full md:w-[1200px]">
          <section className="w-full md:w-2/5 flex justify-center">
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-md bg-purple-800" />
          </section>
          <section className="w-full space-y-4  md:w-3/5  leading-6">
            <div className="flex w-full md:w-[600px] space-x-2 md:space-x-6 h-[110px] md:h-[128px]">
              {minicardData.map((item, index) => (
                <div
                  key={index}
                  className="w-1/3 border rounded-md h-full mb-2 text-center py-3 px-2 font-medium"
                >
                  <i className="flex justify-center mb-2 md:mb-3">
                    {item.icon}
                  </i>
                  <h3 className="mb-1 font-semibold text-xs md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 md:text-xs text-[0.6rem] leading-normal">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {data.contents.map((item, index) => (
              <p
                className="text-sm md:text-base text-gray-800 dark:text-gray-300 "
                key={index}
              >
                {item}
              </p>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}

export default AboutSection
