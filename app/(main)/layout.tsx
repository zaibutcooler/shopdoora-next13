import Footer from "@/components/main/nav/Footer"
import Navbar from "@/components/main/nav/Navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
