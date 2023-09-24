import { Metadata } from "next"

interface ContactLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "ShopDoora | Contact",
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <div className="pt-12 container mx-auto min-h-[95vh]">{children}</div>
}
