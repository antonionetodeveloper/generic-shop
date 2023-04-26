import { Suspense } from "react"
import { cookies } from "next/headers"

import ItemList from "./components/itemList"
import ItemListSkeleton from "@/app/components/ui/skeleton/itemList"
import CartIcon from "@/app/components/cart/icon"

export default function Home() {
   const cookieStore = cookies()
   const allItems = cookieStore.getAll()

   return (
      <>
         <Suspense fallback={<ItemListSkeleton />}>
            {/* @ts-expect-error - Async Component*/}
            <ItemList />
         </Suspense>
         {allItems.length > 0 && <CartIcon cartCount={allItems.length} />}
      </>
   )
}
