import { Suspense } from "react"
import ItemList from "./components/itemList"
import ItemListSkeleton from "../components/ui/skeleton/itemList"

export default function Home() {
   return (
      <>
         <Suspense fallback={<ItemListSkeleton />}>
            {/* @ts-expect-error - Async Component*/}
            <ItemList />
         </Suspense>
      </>
   )
}
