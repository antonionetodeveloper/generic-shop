import { SingleProductProps } from "@/types/product"

const SingleItem = async ({ id }: { id: string }) => {
   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
      next: { revalidate: 60 },
   })
   const product: SingleProductProps = await response.json()
   console.log(id, "-> ", product)

   return (
      <div>
         <span>{product.name}</span>
         <span> - </span>
         <span>R$ {product.metadata?.price},00</span>
      </div>
   )
}

export default SingleItem
