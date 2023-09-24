"use client"

import { FC, useState } from "react"

import { truncate } from "@/lib/utils"
import Header from "@/components/ui/header"
import ServiceModal from "@/components/mini/ServiceModal"

import { Service, serviceBurmese, serviceEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const ServiceSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? serviceEnglish : serviceBurmese

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
      <Header title={data.title} description={data.description} id="service" />
      <div className="flex justify-center w-full">
        <main className="grid grid-cols-2 md:grid-cols-4 w-[1200px] gap-3 md:gap-5">
          {data.services.map((item, index) => (
            <div
              key={index}
              className="border rounded-md p-4 dark:bg-stone-950 hover:border-indigo-300 dark:hover:border-indigo-900 md:p-5 transition-colors group duration-500 ease-in-out cursor-pointer"
              onClick={() => handleOpen(item)}
            >
              <div className="mb-4 ">
                <item.icon className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-500 w-8 h-8 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 dark:group-hover:text-indigo-300  dark:group-hover:bg-indigo-900 transition-colors group duration-500 ease-in-out cursor-pointer" />
              </div>
              <h1 className="font-semibold mb-3 text-xs md:text-base">
                {item.title}
              </h1>
              <p className="mb-4 font-base text-gray-500 text-xs md:text-sm truncate">
                {truncate(item.description, 50)}
              </p>

              <p className="text-xs text-right text-gray-500 group-hover:text-indigo-400 dark:group-hover:text-indigo-700 transition-colors group duration-500 ease-in-out cursor-pointer">
                See Details
              </p>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default ServiceSection
