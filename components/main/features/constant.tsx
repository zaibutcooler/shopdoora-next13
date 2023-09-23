import React from "react"
import { Icon, PanelTop, ShoppingCart, Store } from "lucide-react"
import { FaStore } from "react-icons/fa"

export const featuresEnglish = {
  title: "Product Features",
  description:
    "We provide 3 features for our digital products/solutions for customers.",
  features: [
    {
      route: "seller-app",
      subTitle: "Empowering Sellers in the Digital Marketplace",
      description:
        "A Seller Web App simplifies online selling. It offers easy product management, real-time inventory, secure payments, and customer communication. Essential for modern businesses.",

      title: "Seller Web Application",
      icon: Store,
      iconColor:
        "text-violet-500 dark:group-hover:text-violet-400 group-hover:text-violet-700 transition-colors duration-500 ease-in-out",
      bgColor: "bg-violet-500/10",
    },
    {
      route: "adminstration-website",
      subTitle: "Efficient Management for Online Sellers",
      description:
        "A Seller Administration Website is a hub for sellers to efficiently manage their online operations. It streamlines tasks like product updates, order tracking, and customer support, enhancing seller productivity.",

      title: "Seller Adminstration Website",
      icon: PanelTop,
      iconColor:
        "text-pink-500 dark:group-hover:text-pink-400 group-hover:text-pink-700 transition-colors duration-500 ease-in-out",
      bgColor: "bg-pink-500/10",
    },
    {
      route: "seller-app",
      subTitle: "Seamless Shopping for Online Buyers",
      description:
        "A Buyer Web Application is a user-friendly platform designed for convenient online shopping. It empowers buyers to browse products, make secure purchases, track orders, and communicate with sellers effortlessly.",

      title: "Buyer Web Application",
      icon: ShoppingCart,
      iconColor:
        "text-sky-500 dark:group-hover:text-sky-400 group-hover:text-sky-700 transition-colors duration-500 ease-in-out",
      bgColor: "bg-sky-500/10",
    },
  ],
}

export const featuresBurmese = {
  title: "Product Features",
  description:
    "We provide 3 features for our digital products/solutions for customers.",
  features: [
    {
      route: "seller-app",
      subTitle: "",
      description:
        "A Seller Web App simplifies online selling. It offers easy product management, real-time inventory, secure payments, and customer communication. Essential for modern businesses.",
      title: "Seller Web Application",
      icon: Store,
      iconColor:
        "text-violet-500 dark:group-hover:text-violet-400 group-hover:text-violet-700 transition-colors duration-500 ease-in-out",
      bgColor: "bg-violet-500/10",
    },
    {
      route: "adminstration-website",
      subTitle: "",
      description:
        "A Seller Administration Website is a hub for sellers to efficiently manage their online operations. It streamlines tasks like product updates, order tracking, and customer support, enhancing seller productivity.",
      title: "Seller Adminstration Website",
      icon: PanelTop,
      iconColor:
        "text-sky-500 dark:group-hover:text-sky-400 group-hover:text-sky-700 transition-colors duration-500 ease-in-out",
      bgColor: "bg-sky-500/10",
    },
    {
      route: "buyer-app",
      subTitle: "",
      description:
        "A Buyer Web Application is a user-friendly platform designed for convenient online shopping. It empowers buyers to browse products, make secure purchases, track orders, and communicate with sellers effortlessly.",
      title: "Buyer Web Application",
      icon: ShoppingCart,
      iconColor:
        "text-violet-500 dark:group-hover:text-violet-400 group-hover:text-violet-700 transition-colors duration-500 ease-in-out",
      bgColor: "bg-violet-500/10",
    },
  ],
}

export interface FeatureType {
  route: string
  subTitle: ""
  description: ""
  title: string
  icon: Icon
  iconColor: string
  bgColor: string
}
