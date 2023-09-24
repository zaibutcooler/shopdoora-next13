import React from "react"
import Image from "next/image"

import { banners, burmeseTitle, englishTitle } from "./constant"

interface Props {
  isEnglish: boolean
}

const CompaniesBanner: React.FC<Props> = ({ isEnglish }) => {
  return (
    <div className="min-h-48 mt-6 mb-12 p-4 text-center space-y-8 leading-loosen font-medium">
      <p>{isEnglish ? englishTitle : burmeseTitle}</p>
      <main className="grid grid-cols-2 md:flex justify-center gap-6 md:gap-12">
        {banners.map((item, index) => (
          <div key={index}>
            <Image src={item} alt={`company ${index}`} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default CompaniesBanner
