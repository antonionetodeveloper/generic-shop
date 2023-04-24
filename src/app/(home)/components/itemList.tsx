import ItemCard from "@/app/components/ui/itemCard"

const ItemList = async () => {
   const response = await fetch(
      "https://api.stripe.com/v1/products",

      {
         headers: {
            Authorization:
               "Bearer sk_test_51MzUDJA2HJFEHW7s2NwGrsnzigqlaUyPxkRjoO4yXN4xFRO0fNRBQoBDhCWRgIYPkwWHAoq98i86Vyzc3la8NGyX00caRkpxqI",
         },

         cache: "no-store",
      }
   )
   const itemsData = await response.json()

   return (
      <section className="mt-10 p-10">
         <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
            {itemsData?.data?.map((item: any) => {
               return (
                  <ItemCard
                     key={item.id}
                     id={item.id}
                     title={item.name}
                     price={item?.metadata?.price}
                     image={item.images[0]}
                  />
               )
            })}
         </ul>
      </section>
   )
}

export default ItemList
