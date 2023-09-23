"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { gradientStyle } from "../hero/constant"

const Sidebar = ({}: {}) => {
  const [isMounted, setIsMounted] = useState(false)
  const params = useParams()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-6 py-4 dark:bg-stone-950">
        <Link
          href={`/${params.lang}/#root`}
          className="block text-lg font-bold"
        >
          <span style={gradientStyle}>ShopDoora</span>
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
