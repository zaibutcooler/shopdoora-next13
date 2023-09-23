import { Icon, Store } from "lucide-react"

export interface Service {
  title: string
  description: string
  icon: any
}

export interface ServiceProps {
  services: Service[]
}

export const serviceEnglish: ServiceProps = {
  services: [
    {
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, ex id facilisis tempus, dui turpis bibendum est, eget bibendum metus libero vel est.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 2",
      description:
        "Praesent eu ante at odio vulputate consectetur. Sed tincidunt venenatis justo, nec scelerisque velit tristique a. Sed eget tortor sit amet justo.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 3",
      description:
        "Quisque non quam sed nisi euismod vestibulum. Fusce id risus justo. Vestibulum eu justo et nisi tristique dictum.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 4",
      description:
        "Aenean ut luctus orci. Curabitur eget libero at elit laoreet tristique a id purus. Fusce sollicitudin eleifend odio, eu luctus quam facilisis eu.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 5",
      description:
        "Vestibulum nec consequat purus. Fusce sit amet hendrerit sapien. Curabitur hendrerit justo ac odio tincidunt, ut volutpat nunc auctor.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 6",
      description:
        "Donec eu quam in ipsum luctus vehicula. Sed posuere ante et lectus fringilla, a blandit sapien volutpat. Sed vitae metus quis velit tincidunt dapibus.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 7",
      description:
        "Suspendisse potenti. Phasellus eu dui a mi eleifend posuere. Proin ut tortor eget purus varius rhoncus. Vivamus tincidunt, nunc vel euismod.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 8",
      description:
        "Vivamus nec lorem sed massa consectetur fermentum ut non metus. Maecenas euismod vel felis in bibendum. Sed euismod tincidunt magna.",
      icon: <Store className="w-8 h-8" />,
    },
  ],
}

export const serviceBurmese = {
  services: [
    {
      title: "Service 1 (Burmese)",
      description:
        "လူသားအသက်တွေအတွက် သတ်မှတ်ထားတဲ့ ကျွန်တော်တို့ ကိုယ့်ရဲ့ ဝက်စ္စာများကိုပေါင်းစုံပါတယ်။ အစဉ်အမှန်တကယ် ကျွန်တော်တို့ မြန်မာနိုင်ငံရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းတင်ပေးနိုင်တယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 2 (Burmese)",
      description:
        "ယောက်ျားအတွက် တစ်ယောက်တည်းက နေထိုင်ကြတာလဲ သတ်မှတ်ခဲ့ပါတယ်။ အဆင်ပြေစဉ်သူတွေ လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 3 (Burmese)",
      description:
        "သတ်မှတ်ခဲ့တဲ့ အစီအစဉ်တွေက ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 4 (Burmese)",
      description:
        "လူသားအသက်တွေရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းတင်ပေးနိုင်တယ်။ လက်စွပ်တွေရှိပါတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 5 (Burmese)",
      description:
        "သူတို့က ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။ အစဉ်အမှန်တကယ် လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 6 (Burmese)",
      description:
        "သတ်မှတ်ခဲ့တဲ့ အစီအစဉ်တွေက ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 7 (Burmese)",
      description:
        "လူသားအသက်တွေရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။ အစဉ်အမှန်တကယ် လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Service 8 (Burmese)",
      description:
        "သူတို့က ကျွန်တော်တို့ရဲ့ အခြေခံကျောင်းသားတွေအတွက် အမြဲတမ်းရှိပါတယ်။ အစဉ်အမှန်တကယ် လူ့အသက်တွေမှာ အမြဲတမ်းရှိတဲ့ လက်စွပ်တွေရှိတယ်။",
      icon: <Store className="w-8 h-8" />,
    },
  ],
}
