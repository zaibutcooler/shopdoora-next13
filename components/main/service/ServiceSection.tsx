"use client"

import { FC } from "react"

import { useLanguage } from "@/hooks/useLanguage"
import { useModal } from "@/hooks/useModal"

import { Service, serviceBurmese, serviceEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const ServiceSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? serviceEnglish : serviceBurmese
  const modal = useModal()

  const handleClick = async (data: Service) => {
    await modal.onOpen()
  }

  return (
    <div className="min-h-[90vh]">
      <header className="w-full text-center leading-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Our Services</h1>
        <p className="text-gray-500">
          ShopDoora e-Commerce တွင် ပါဝင်မည့် Features များ
        </p>
      </header>
      <div className="flex justify-center w-full">
        <main className="grid grid-cols-2 md:grid-cols-4 w-[1200px] gap-3 md:gap-5">
          {data.services.map((item, index) => (
            <div
              key={index}
              className="border rounded-md p-5 transition-colors group duration-500 ease-in-out cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <div className="mb-4">{item.icon}</div>
              <h1 className="font-semibold mb-3">{item.title}</h1>
              <p className="mb-4 font-medium text-gray-500">
                This is how I will fight so don't worry babe. I got ...
              </p>
              <p className="text-xs text-right text-gray-500 ">See Details</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default ServiceSection
