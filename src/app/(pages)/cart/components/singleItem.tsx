import Image from "next/image"
import { ProductCartProps } from "@/types/product"
import ButtonSection from "./buttonSetion"

const SingleItem = async ({
   id,
   quantity,
}: {
   id: string
   quantity: number
}) => {
   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
      next: { revalidate: 60 },
   })
   const product: ProductCartProps = await response.json()

   return (
      <div>
         <div>
            <Image
               src={product?.images[0]}
               alt={`imagem de ${product.name}`}
               width={100}
               height={100}
            />
            <div>
               <p>{product.name}</p>
               <p>R$ {product.metadata?.price},00</p>
            </div>
         </div>
         <ButtonSection
            idProduct={product.id}
            itemName={product.name}
            quantity={quantity}
         />
      </div>
   )
}

export default SingleItem
