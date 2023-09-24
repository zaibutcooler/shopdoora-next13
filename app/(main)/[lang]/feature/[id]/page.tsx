import { Icon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  FeatureType,
  featuresBurmese,
  featuresEnglish,
} from "@/components/main/features/constant"
import FeatureHeader from "@/components/mini/FeatureHeader"

export default async function ServiceDetailPage({
  params,
}: {
  params: { lang: string; id: string }
}) {
  const filterData = (lang: string, id: string) => {
    if (lang === "en") {
      const arr = featuresEnglish.features
      const result = arr.filter((item) => item.route === id)[0]
      return result
    } else {
      const arr = featuresBurmese.features
      const result = arr.filter((item) => item.route === id)[0]
      return result
    }
  }

  const data = await filterData(params.lang, params.id)

  return (
    <main className="px-0 md:px-6">
      <FeatureHeader
        title={data.title}
        description={data.subTitle}
        icon={data.icon}
        iconColor={data.iconColor}
        bgColor={data.bgColor}
      />
      <div className="w-full md:w-3/4">
        {data.featureArray.map((item, index) => (
          <div key={index}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={index.toString()}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.text}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </main>
  )
}
