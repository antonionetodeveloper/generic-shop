import { cookies } from "next/headers"
import ItemList from "./components/itemList"

export default function Cart() {
   const cookieStore = cookies()
   const allItems = cookieStore.getAll()

   return (
      <>
         <ItemList list={allItems} />
      </>
   )
}
