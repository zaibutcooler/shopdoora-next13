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

export const serviceBurmese: ServiceProps = {
  title: "Our Services",
  description: "Our products provide various solutions for everyone.",
  services: [
    {
      title: "24/7 Order Acceptance",
      description:
        "E-commerce၊ ERP၊ နှင့် POS အတွက် ကျွန်ုပ်တို့၏ဆော့ဖ်ဝဲလ်ဖြေရှင်းချက်များဖြင့်၊ သင်အိပ်ပျော်နေချိန်၌ပင် နာရီပတ်လုံး အမှာစာများကို လွယ်ကူစွာလက်ခံနိုင်သည်။ ကျွန်ုပ်တို့၏စနစ်သည် သင့်လုပ်ငန်းကို မည်သည့်အခါမျှ မရပ်တန့်စေဘဲ၊ သင်နှင့် သင့်ဖောက်သည်များအတွက် အဆင်ပြေပြေနှင့် လိုက်လျောညီထွေဖြစ်စေရန် အာမခံပါသည်။",
      icon: Clock,
    },
    {
      title: "Automated Finance",
      description:
        "လက်စွဲငွေကြေး တွက်ချက်မှုများကို နှုတ်ဆက်လိုက်ပါ။ ကျွန်ုပ်တို့၏ e-commerce၊ ERP နှင့် POS အတွက် ဆော့ဖ်ဝဲလ်ဖြေရှင်းချက်များသည် သင်၏ဘဏ္ဍာရေးစီမံခန့်ခွဲမှုလုပ်ငန်းစဉ်များကို အလိုအလျောက်လုပ်ဆောင်ပေးပါသည်။ အရောင်းနှင့် ကုန်ကျစရိတ်များကို ခြေရာခံခြင်းမှ အစီရင်ခံစာများနှင့် ခန့်မှန်းချက်များကို ထုတ်ပြန်ခြင်းအထိ၊ ကျွန်ုပ်တို့၏စနစ်က ၎င်းအားလုံးကို ကိုင်တွယ်ပါသည်။",
      icon: Calculator,
    },
    {
      title: "Simple Customer Ordering",
      description:
        "ကျွန်ုပ်တို့၏ e-commerce၊ ERP နှင့် POS စနစ်များသည် သုံးစွဲသူများ၏ အော်ဒါများကို ချောမွေ့စေပြီး ချောမွေ့ပြီး ထိရောက်သော အတွေ့အကြုံကို ရရှိစေပါသည်။ ကျွန်ုပ်တို့သည် ကျန်အရာများကို ကိုင်တွယ်စဉ်တွင် အရေးကြီးဆုံးဖြစ်သော သင့်ဖောက်သည်များကို ဝန်ဆောင်မှုပေးခြင်းကို အာရုံစိုက်ပါ။",
      icon: Printer,
    },
    {
      title: "Inventory Management",
      description:
        "သင်၏မှာယူမှုပစ္စည်းများနှင့် စာရင်းများကို ပြီးပြည့်စုံသောမြင်နိုင်စွမ်းကို ရယူလိုက်ပါ။ ကျွန်ုပ်တို့၏ e-commerce၊ ERP နှင့် POS စနစ်များသည် ကုန်ပစ္စည်းများကို ထိထိရောက်ရောက် စီမံခန့်ခွဲနိုင်ပြီး လိုအပ်သလို လိုအပ်သလို သိုလှောင်မှုကို အချိန်နှင့်တပြေးညီ စောင့်ကြည့်မှုကို ပံ့ပိုးပေးပါသည်။ စာရင်းပြတ်လပ်မှုကို ကျော်လွန်ပြီး သင့်ဖောက်သည်များအား အနှောင့်အယှက်ကင်းသော ဝန်ဆောင်မှုကို ပေးဆောင်ပါ။",
      icon: Package,
    },
    {
      title: "Payment Integration",
      description:
        "WaveMoney၊ KBZPay နှင့် Debit/Credit ကတ်များကဲ့သို့ နာမည်ကြီး ငွေပေးချေမှုစနစ်များနှင့် ချောမွေ့စွာ ပေါင်းစပ်ထားသည်။ ၎င်းသည် သင့်ဖောက်သည်များအတွက် အခက်အခဲမရှိ နှင့် အဆင်ပြေသော ငွေပေးချေမှုအတွေ့အကြုံကို သေချာစေသည်။ ငွေပေးချေမှုရွေးချယ်စရာများစွာကို လွယ်ကူစွာ ပေးဆောင်ခြင်းဖြင့် အပြိုင်အဆိုင်စျေးကွက်တွင် ဆက်လက်နေပါ။",
      icon: CreditCard,
    },
    {
      title: "Discount and Rewards",
      description:
        "ငွေရှင်းစဉ်အတွင်း လျှော့စျေးများကို အသုံးပြုခြင်း သို့မဟုတ် သစ္စာစောင့်သိသည့်အချက်များစနစ်ကို အကောင်အထည်ဖော်သည်ဖြစ်စေ ကျွန်ုပ်တို့၏ e-commerce၊ ERP နှင့် POS စနစ်များက ၎င်းကို ကိုင်တွယ်ဖြေရှင်းပေးပါသည်။ စိတ်ကြိုက်လျှော့စျေးများနှင့် ဆုလက်ဆောင်များ ပေးခြင်းဖြင့် သုံးစွဲသူများ စိတ်ကျေနပ်မှုနှင့် သစ္စာရှိမှုကို မြှင့်တင်ပါ။",
      icon: Tag,
    },
    {
      title: "Delivery Status Updates",
      description:
        "ဖောက်သည်များ အဆင်ပြေစေရန်အတွက် သင့်ထံတွင် ကျွန်ုပ်တို့ ရှိပါသည်။ ကျွန်ုပ်တို့၏ဆော့ဖ်ဝဲလ်ဖြေရှင်းချက်များတွင် လက်ငင်းပေးပို့မှုအခြေအနေစနစ်တစ်ခုပါဝင်သည်။ အမှာစာများနှင့် ပတ်သက်၍ မေးမြန်းရန် ဖုန်းခေါ်ဆိုမှုများ မရှိတော့ပါ။ မှာယူမှုနေရာချထားမှုမှ ပေးပို့မှုအထိ၊ ချောမွေ့ပြီး စိတ်ပူစရာမရှိသော စျေးဝယ်အတွေ့အကြုံကို သေချာစေရန် သင်၏ဖောက်သည်များအား နည်းလမ်းတိုင်းကို အသိပေးပါ။",
      icon: Truck,
    },
    {
      title: "Reporting and Analytics",
      description:
        "သင့်အား ပြည့်စုံသော အစီရင်ခံခြင်းနှင့် ခွဲခြမ်းစိတ်ဖြာမှုဆိုင်ရာ ကိရိယာများကို ကျွန်ုပ်တို့ ပံ့ပိုးပေးပါသည်။ အရောင်းလမ်းကြောင်းများကို ခြေရာခံပါ၊ ဖောက်သည်အမူအကျင့်များကို စောင့်ကြည့်ကာ အသိဉာဏ်ဖြင့် ဆုံးဖြတ်ချက်များချပါ။ တိုးတက်မှုနှင့် အောင်မြင်မှုကို တွန်းအားပေးသည့် ဒေတာမောင်းနှင်သော မဟာဗျူဟာများဖြင့် ပြိုင်ဆိုင်မှုထက် သာလွန်နေပါစေ။",
      icon: BarChart,
    },
  ],
}
