import { Suspense } from "react"
import { cookies } from "next/headers"

import { ProductProps } from "@/types/product"
import SingleProduct from "./components/singleProduct"
import Loading from "@/app/loading"
import CartIcon from "@/app/components/cart/icon"

export default function Product({ params }: ProductProps) {
   const cookieStore = cookies()
   const allItems = cookieStore.getAll()

   return (
      <>
         <Suspense fallback={<Loading />}>
            {/* @ts-expect-error - Async Component */}
            <SingleProduct id={params.id} />
         </Suspense>
         {allItems.length > 0 && <CartIcon cartCount={allItems.length} />}
      </>
   )
}
