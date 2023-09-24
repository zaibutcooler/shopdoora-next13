import React from "react"
import Image from "next/image"
import Loading from "@/public/loading.svg"

const loading = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="animate-pulse">
        <Image src={Loading} alt="Loading.." />
        <div className="pt-6 text-center">Loading....</div>
      </div>
    </div>
  )
}

export default loading
