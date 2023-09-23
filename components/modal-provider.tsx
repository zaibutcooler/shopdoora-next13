"use client"

import { useEffect, useState } from "react"

import { Service } from "./main/service/constant"
import ServiceModal from "./mini/ServiceModal"

export const ModalProvider = (data: Service) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <ServiceModal />
    </>
  )
}
