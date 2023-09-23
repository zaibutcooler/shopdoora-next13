import Footer from "@/components/main/nav/Footer"
import Navbar from "@/components/main/nav/Navbar"

interface FeatureLayoutProps {
  children: React.ReactNode
}

export default function FeatureLayout({ children }: FeatureLayoutProps) {
  return <div className="pt-20 container mx-auto min-h-[95vh]">{children}</div>
}
