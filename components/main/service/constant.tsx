import {
  BarChart,
  Calculator,
  Clock,
  CreditCard,
  Icon,
  Package,
  Printer,
  Store,
  Tag,
  Truck,
} from "lucide-react"

export interface Service {
  title: string
  description: string
  icon: any
}

export interface ServiceProps {
  title: string
  description: string
  services: Service[]
}

export const serviceEnglish: ServiceProps = {
  title: "Our Services",
  description: "Our products provide various solutions for everyone.",
  services: [
    {
      title: "24/7 Order Acceptance",
      description:
        "With our software solutions for e-commerce, ERP, and POS, you can effortlessly accept orders around the clock, even while you're asleep. Our system ensures that your business never stops, providing convenience and flexibility for both you and your customers. Sleep soundly, knowing your orders are in capable hands.",
      icon: Clock,
    },
    {
      title: "Automated Finance",
      description:
        "Say goodbye to manual financial calculations. Our software solutions for e-commerce, ERP, and POS automate your financial management processes. From tracking sales and expenses to generating reports and forecasts, our system handles it all. Enjoy hassle-free financial control and let our automation streamline your business operations.",
      icon: Calculator,
    },
    {
      title: "Simple Customer Ordering",
      description:
        "Simplify the customer ordering process with our software solutions. Now, all you need to do is click 'print.' Our e-commerce, ERP, and POS systems make customer orders a breeze, ensuring a seamless and efficient experience. Focus on what matters most - serving your customers - while we handle the rest.",
      icon: Printer,
    },
    {
      title: "Inventory Management",
      description:
        "Gain complete visibility into your order items and inventory with our software solutions. Our e-commerce, ERP, and POS systems offer real-time monitoring, enabling you to efficiently manage items and replenish stock as needed. Stay ahead of inventory shortages and provide uninterrupted service to your customers.",
      icon: Package,
    },
    {
      title: "Payment Integration",
      description:
        "We believe in making the buying process as simple as possible. Our software solutions seamlessly integrate with popular payment systems like WaveMoney, KBZPay, and Debit/Credit cards. This ensures a hassle-free and convenient payment experience for your customers. Stay ahead in the competitive market by offering multiple payment options with ease.",
      icon: CreditCard,
    },
    {
      title: "Discount and Rewards",
      description:
        "Our software solutions empower you to effortlessly manage discounts and rewards with ease. Whether it's applying discounts during checkout or implementing a loyalty points system, our e-commerce, ERP, and POS systems handle it all. Enhance customer satisfaction and loyalty by offering tailored discounts and rewards that keep them coming back for more.",
      icon: Tag,
    },
    {
      title: "Delivery Status Updates",
      description:
        "We've got your back when it comes to customer convenience. Our software solutions include an instant delivery status system. No more messages or phone calls to inquire about orders. Keep your customers informed every step of the way, from order placement to delivery, ensuring a seamless and worry-free shopping experience.",
      icon: Truck,
    },
    {
      title: "Reporting and Analytics",
      description:
        "Unlock the power of data with our software solutions. We provide comprehensive reporting and analytics tools that empower you to gain valuable insights into your business performance. Track sales trends, monitor customer behavior, and make informed decisions. Stay ahead of the competition with data-driven strategies that drive growth and success.",
      icon: BarChart,
    },
  ],
}

export const serviceBurmese = {
  title: "Our Services",
  description: "Our products provide various solutions for everyone.",
  services: [
    {
      title: "Service 1 (Burmese)",
      description:
        "လူသားအသက်တွေအတွက် သတ်မှတ်ထားတဲ့ ကျွန်တော်တို့ ကိုယ့်ရဲ့ ဝက်စ္စာများကိုပေါင်းစုံပါတယ်။ အစဉ်အမှန်တကယ် ကျွန်တော်တို့ မြန်မာနိုင်ငံရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းတင်ပေးနိုင်တယ်။",
      icon: Store,
    },
    {
      title: "Service 2 (Burmese)",
      description:
        "ယောက်ျားအတွက် တစ်ယောက်တည်းက နေထိုင်ကြတာလဲ သတ်မှတ်ခဲ့ပါတယ်။ အဆင်ပြေစဉ်သူတွေ လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: Store,
    },
    {
      title: "Service 3 (Burmese)",
      description:
        "သတ်မှတ်ခဲ့တဲ့ အစီအစဉ်တွေက ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။",
      icon: Store,
    },
    {
      title: "Service 4 (Burmese)",
      description:
        "လူသားအသက်တွေရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းတင်ပေးနိုင်တယ်။ လက်စွပ်တွေရှိပါတယ်။",
      icon: Store,
    },
    {
      title: "Service 5 (Burmese)",
      description:
        "သူတို့က ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။ အစဉ်အမှန်တကယ် လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: Store,
    },
    {
      title: "Service 6 (Burmese)",
      description:
        "သတ်မှတ်ခဲ့တဲ့ အစီအစဉ်တွေက ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။",
      icon: Store,
    },
    {
      title: "Service 7 (Burmese)",
      description:
        "လူသားအသက်တွေရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။ အစဉ်အမှန်တကယ် လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: Store,
    },
    {
      title: "Service 8 (Burmese)",
      description:
        "သူတို့က ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။ အစဉ်အမှန်တကယ် လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: Store,
    },
  ],
}
