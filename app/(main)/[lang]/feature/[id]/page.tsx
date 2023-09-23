import {
  FeatureType,
  featuresBurmese,
  featuresEnglish,
} from "@/components/main/features/constant"

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
    <main className="pt-12 container mx-auto min-h-[95vh]">{data.title}</main>
  )
}
