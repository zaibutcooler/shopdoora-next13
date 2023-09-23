import { create } from "zustand"

interface ModalInterface {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useModal = create<ModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
