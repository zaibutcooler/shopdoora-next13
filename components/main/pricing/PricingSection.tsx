"use client"

import { FC } from "react"
import {
  Check,
  CheckCheckIcon,
  CheckCircle,
  CheckCircle2,
  CheckCircleIcon,
} from "lucide-react"
import toast from "react-hot-toast"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { pricingBurmese, pricingEnglish } from "./constant"

interface SectionProps {
  isEnglish: boolean
}

const PricingSection: FC<SectionProps> = ({ isEnglish }) => {
  const data = isEnglish ? pricingEnglish : pricingBurmese

  return (
    <div className="min-h-80 px-0 md:px-4 pt-8">
      <main className="grid grid-cols-1 md:grid-cols-4 gap-4 font-medium">
        {data.map((item, index) => (
          <div key={index}>
            <Card className="dark:bg-stone-950">
              <CardHeader className="">
                <CardTitle className="mb-2 flex gap-2 items-center">
                  <div className={cn("p-1 rounded-sm", item.iconCn)}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <p>{item.plan}</p>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {item.features.map((feature, index) => (
                  <div
                    key={index}
                    className="mb-3 flex items-center space-x-4 text-sm"
                  >
                    <Check className="w-4 h-4" />
                    <p>{feature}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button onClick={() => toast.success("hi")} className="w-full">
                  Buy Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </main>
    </div>
  )
}

export default PricingSection
