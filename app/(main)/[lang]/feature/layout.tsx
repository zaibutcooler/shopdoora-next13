interface FeatureLayoutProps {
  children: React.ReactNode
}

export default function FeatureLayout({ children }: FeatureLayoutProps) {
  return <div className="pt-20 container mx-auto min-h-[95vh]">{children}</div>
}
