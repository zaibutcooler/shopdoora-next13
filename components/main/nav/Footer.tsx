import Link from "next/link"

import AddressCard from "@/components/mini/AddressCard"

import {
  LinkType,
  companyData,
  footerContact,
  solutionData,
  supportData,
} from "./constant"

const Footer = () => {
  const renderLink = (input: LinkType) => {
    return (
      <Link href={input.link} className="text-gray-500">
        {input.label}
      </Link>
    )
  }

  return (
    <div className=" mt-6 md:mt-24 dark:bg-stone-950">
      <section className="h-40 md:h-60 border-t ">
        <main className="flex justify-between container mx-auto py-6">
          <div className="hidden md:block w-1/2 text-gray-700 dark:text-gray-300">
            <AddressCard />
          </div>
          <div className="w-full text-sm md:w-1/2 grid grid-cols-3 text-gray-500">
            <div className="space-y-5">
              <p className="pb-3 text-gray-900 dark:text-gray-200">Solutions</p>
              {solutionData.map((item, index) => (
                <div key={index}>{renderLink(item)}</div>
              ))}
            </div>
            <div className="space-y-5">
              <p className="pb-3 text-gray-900 dark:text-gray-200">Company</p>
              {companyData.map((item, index) => (
                <div key={index}>{renderLink(item)}</div>
              ))}
            </div>
            <div className="space-y-5">
              <p className="pb-3 text-gray-900 dark:text-gray-200">Support</p>
              {supportData.map((item, index) => (
                <div key={index}>{renderLink(item)}</div>
              ))}
            </div>
          </div>
        </main>
      </section>
      <section className="h-12 container mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-gray-600">
        <p className=" text-xs text-center md:text-left ">
          Copyright © 2020 Myanmar High Society Co., Ltd.All Rights Reserved
        </p>
        <div className="flex items-center text-gray-500 space-x-10 text-xl mb-4 md:mb-0">
          {footerContact.map((item) => (
            <Link href={item.link} key={item.platform}>
              {item.icon}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Footer
