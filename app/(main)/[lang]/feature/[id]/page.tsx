import { Icon } from "lucide-react"

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
    <main className="">
      <FeatureHeader
        title={data.title}
        description="This is mini description for my app"
        icon={data.icon}
        iconColor={data.iconColor}
        bgColor={data.bgColor}
      />
      {data.title}
    </main>
  )
}
