"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import Logo from "@/public/logo.svg"

import { useLanguage } from "@/hooks/useLanguage"
import { ThemeToggle } from "@/components/theme-toggle"

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
      <nav className="fixed left-0 top-0 w-full px-2 md:px-6 bg-white dark:bg-purple-950 backdrop-blur h-12 flex items-center justify-between border-b border-gray-100 dark:border-gray-900">
        <section className="flex justify-center items-center gap-12 font-medium text-sm pl-0 md:pl-4 lg:pl-6">
          <Link href={`/${params.lang}/#root`} className="block pr-2">
            Logo
          </Link>
          <Link
            href={`/${params.lang}/#service`}
            className="text-sm hidden md:block"
          >
            Services
          </Link>
          <Link
            href={`/${params.lang}/#feature`}
            className="text-sm hidden md:block"
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
          <button className="text-sm font-medium w-28 py-2 rounded-full bg-purple-600 text-white hidden md:block">
            Contact Now
          </button>
        </section>
      </nav>
    </main>
  )
}

export default Navbar
