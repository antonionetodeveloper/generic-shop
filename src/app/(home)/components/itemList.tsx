import ItemCard from "@/app/components/ui/itemCard"
import { ItemCardProps } from "@/types/itemCard"

const ItemList = async () => {
   const response = await fetch("https://fakestoreapi.com/products?limit=10", {
      next: { revalidate: 60 },
   })
   const itemsData = await response.json()

   return (
      <section className="mt-10 p-10">
         <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
            {itemsData?.map((item: ItemCardProps) => {
               return (
                  <ItemCard
                     key={`Item_0${item.id}`}
                     title={item.title}
                     price={item.price}
                     image={item.image}
                  />
               )
            })}
         </ul>
      </section>
   )
}

export default ItemList
