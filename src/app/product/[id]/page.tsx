import { ProductProps } from "@/types/product"
import SingleProduct from "./components/singleProduct"
import { Suspense } from "react"
import Loading from "@/app/loading"

export default function Product({ params }: ProductProps) {
   return (
      <>
         <Suspense fallback={<Loading />}>
            {/* @ts-expect-error - Async Component */}
            <SingleProduct id={params.id} />
         </Suspense>
      </>
   )
}
