import { create } from "zustand"

interface LanguageProps {
  isEnglish: boolean
  changeBurmese: () => void
  changeEnglish: () => void
}

export const useLanguage = create<LanguageProps>((set) => ({
  isEnglish: true,
  changeBurmese: () => set({ isEnglish: false }),
  changeEnglish: () => set({ isEnglish: true }),
}))
