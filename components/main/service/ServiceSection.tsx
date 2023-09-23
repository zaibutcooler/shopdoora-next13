"use client"

import { FC, useState } from "react"

import { useLanguage } from "@/hooks/useLanguage"
import { useModal } from "@/hooks/useModal"
import ServiceModal from "@/components/mini/ServiceModal"

import { Service, serviceBurmese, serviceEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const ServiceSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? serviceEnglish : serviceBurmese
  const modal = useModal()

  const [service, setService] = useState<Service | null>(null)
  const [open, setOpen] = useState(false)

  const handleOpen = (data: Service) => {
    setOpen(true)
    setService(data)
  }

  const handleClose = () => {
    setOpen(false)
    setService(null)
  }

  return (
    <div className="min-h-[90vh]">
      {open && <ServiceModal item={service} close={handleClose} />}
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
              onClick={() => handleOpen(item)}
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
