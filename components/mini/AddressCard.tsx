const AddressCard = () => {
  return (
    <div className="font-medium dark:font-base">
      <h1 className="text-xl mb-4">ShopDoora Co., Ltd</h1>
      <div className="flex mb-3">
        <p className="w-[100px]">Address :</p>
        <div className="space-y-1">
          <p>Orchid Condo, No189, 18th Floor,</p>
          <p>Ahlone Township,Yangon, Myanmar</p>
        </div>
      </div>

      <div className="flex mb-3">
        <p className="w-[100px]">Phone :</p>
        <div className="space-y-1">
          <p>09 450880001</p>
          <p>09 5231938</p>
        </div>
      </div>
      <div className="flex mb-3">
        <p className="w-[100px]">Email :</p>
        <div className="space-y-2">
          <p>Shopdoora@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
