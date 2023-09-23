import React from "react"
import { Icon, PanelTop, ShoppingCart, Store } from "lucide-react"
import { FaStore } from "react-icons/fa"

export const featuresBurmese = {
  features: [
    {
      route: "seller-app",
      title: "Seller Web Application",
      icon: <Store className="w-6 h-6" />,
    },
    {
      route: "adminstration-website",
      title: "Seller Adminstration Website",
      icon: <PanelTop className="w-6 h-6" />,
    },
    {
      route: "buyer-app",
      title: "Buyer Web Application",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
  ],
}

export const featuresEnglish = {
  features: [
    {
      route: "seller-app",
      title: "Seller Web Application",
      icon: <Store className="w-6 h-6" />,
    },
    {
      route: "adminstration-website",
      title: "Seller Adminstration Website",
      icon: <PanelTop className="w-6 h-6" />,
    },
    {
      route: "seller-app",
      title: "Buyer Web Application",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
  ],
}

export interface FeatureType {
  route: string
  title: string
  icon: Icon
}
