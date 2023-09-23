"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import Logo from "@/public/logo.svg"

import { useLanguage } from "@/hooks/useLanguage"
import { ThemeToggle } from "@/components/theme-toggle"

import { gradientStyle } from "../hero/constant"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const params = useParams()
  const isEnglish = params.lang === "en" ? true : false

  const toggleLanguage = () => {}

  const go = params.id
    ? isEnglish
      ? `/my/feature/${params.id}`
      : `/en/feature/${params.id}`
    : isEnglish
    ? `/my`
    : `/en`

  return (
    <main>
      <nav className="fixed left-0 top-0 w-full px-2 md:px-6 bg-white dark:bg-stone-950 backdrop-blur h-12 flex items-center justify-between border-b border-gray-100 dark:border-gray-900">
        <section className="flex justify-center items-center font-medium text-sm pl-0 md:pl-4 lg:pl-6">
          <div className="md:hidden block mr-2">
            <Sidebar />
          </div>
          <Link
            href={`/${params.lang}/#root`}
            className="block text-lg font-bold ml-2 md:mr-8"
          >
            <span style={gradientStyle}>ShopDoora</span>
          </Link>
          <Link
            href={`/${params.lang}/#service`}
            className="mr-8 text-sm hidden md:block text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            href={`/${params.lang}/#feature`}
            className="mr-8 text-sm hidden md:block text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Features
          </Link>
        </section>
        <section className="space-x-4 flex items-center">
          <ThemeToggle />
          <Link
            className="w-10 h-10 hover:bg-gray-100 block rounded-md"
            href={go}
            onClick={toggleLanguage}
          >
            <div className="flex justify-center items-center w-full h-full font-semibold text-md">
              {isEnglish ? "En" : "My"}
            </div>
          </Link>
          <Link
            href={`/${params.lang}/contact`}
            className="hidden md:block text-sm w-28 py-2 text-center rounded-full bg-stone-900 text-white hover:bg-stone-800 transition duration-500 ease-in-out"
          >
            Contact Now
          </Link>
        </section>
      </nav>
    </main>
  )
}

export default Navbar
