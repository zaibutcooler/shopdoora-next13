"use client"

// const ServiceModal = () => {
//   const serviceModal = useModal()

//   return (
//     <div>
//       <Modal
//         title="Create store"
//         description="Add a new store to manage products and categories."
//         isOpen={serviceModal.isOpen}
//         onClose={serviceModal.onClose}
//       >
//         <div>
//           <div className="space-y-4 py-2 pb-4">
//             <div className="space-y-2">Okay</div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// export default ServiceModal
import React, { FC, useEffect } from "react"
import { X } from "lucide-react"

import { useModal } from "@/hooks/useModal"
import { Modal } from "@/components/ui/modal"

import { Service } from "../main/service/constant"

interface Props {
  item: Service | null
  close: () => void
}

const ServiceModal: FC<Props> = ({ item, close }) => {
  useEffect(() => {
    document.body.classList.add("disable-scrollbar")
    return () => {
      document.body.classList.remove("disable-scrollbar")
    }
  }, [])

  const handleClose = () => {
    close()
    document.body.classList.remove("disable-scrollbar")
  }

  if (!item) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-filter backdrop-blur z-50 px-2">
      <div className="mt-8 bg-background dark:bg-black p-4 md:p-6  rounded-lg shadow-md border w-full md:w-[450px] font-medium leading-6 min-h-[300px] text-secondary_bold">
        <div className="flex justify-between items-start mb-5">
          <h1 className="font-semibold text-lg">{item.title}</h1>
          <button className="" onClick={handleClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="leading-6">{item.description}</p>
      </div>
    </div>
  )
}

export default ServiceModal
