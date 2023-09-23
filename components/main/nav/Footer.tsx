import Link from "next/link"

import AddressCard from "@/components/mini/AddressCard"

import { footerContact } from "./constant"

const Footer = () => {
  return (
    <div className=" mt-6 md:mt-12">
      <section className="h-40 md:h-60 border-t">
        <main className="flex justify-between container mx-auto py-6">
          <div className="hidden md:block w-1/2 text-gray-700 dark:text-gray-300">
            <AddressCard />
          </div>
          <div className="w-full text-sm md:w-1/2 grid grid-cols-3">
            <div>
              <p className="mb-6">Solutions</p>
              <div>Marketing</div>
            </div>
            <div>
              <p className="mb-6">Company</p>
            </div>
            <div>
              <p className="mb-6">Support</p>
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
