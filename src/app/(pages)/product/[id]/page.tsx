import { Suspense } from "react"
import type { Metadata } from "next"

import { ProductProps } from "@/types/product"
import SingleProduct from "./components/singleProduct"
import Loading from "@/app/loading"

interface Context {
   params: { id: string }
}

export const revalidate = 60 * 60 // 1 hour

export async function generateMetadata(context: Context): Promise<Metadata> {
   const { id } = context.params

   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
   })
   const product = await response.json()

   return { title: product?.name }
}

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
