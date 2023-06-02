import { cookies } from "next/headers"
import ItemList from "./components/itemList"

export default function Cart() {
   const cookieStore = cookies()
   const allItems = cookieStore.get("cart")?.value || [{}]
   const parsedItems = JSON.parse(allItems.toString())

   return (
      <>
         <ItemList list={parsedItems} />
         <span className="flex justify-center p-4">
            Sessão de compra em desenvolvimento.
         </span>
      </>
   )
}
