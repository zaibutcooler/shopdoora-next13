"use client"

import { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"

import { featuresBurmese, featuresEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
  language: string
}

const FeaturesSection: FC<SectionProps> = ({ isEnglish, language }) => {
  const data = isEnglish ? featuresEnglish : featuresBurmese

  return (
    <div className="min-h-[70vh]">
      <Header title={data.title} description={data.description} id="feature" />
      <main className="flex justify-center font-medium ">
        <div className="w-full md:w-[1200px]  md:grid grid-cols-3 gap-4">
          {data.features.map((item) => (
            <Link
              href={`/${language}/feature/${item.route}`}
              key={item.title}
              className="p-4 md:p-6 w-full block transition-colors group duration-500 ease-in-out mb-6 hover:bg-purple-50 rounded-md"
            >
              <div className="flex gap-4 items-center mb-5">
                <div>
                  <div
                    className={cn("w-fit p-1.5 rounded-md bg-indigo-300", "")}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="">
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-gray-500 text-xs">
                    This is short description for everyone
                  </p>
                </div>
              </div>
              <div>
                <p className="leading-6 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus amet dolore nihil officiis eum delectus aliquid veniam
                  officia dolor ad harum est, error reprehenderit expedita?
                  Obcaecati, aspernatur ipsum. Qui, optio.
                </p>

                <div className="text-gray-500 text-sm">
                  Time Duration :1 month
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default FeaturesSection
