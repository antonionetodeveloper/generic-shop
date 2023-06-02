import Image from "next/image"
import { ProductCartProps } from "@/types/product"
import ButtonSection from "./client/buttonSection"

interface SingleItemProps {
   id: string
   quantity: number
}

const SingleItem = async ({ id, quantity }: SingleItemProps) => {
   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
      next: { revalidate: 60 },
   })
   const product: ProductCartProps = await response.json()

   return (
      <div className="bg-white w-11/12 md:w-4/5 flex justify-between m-auto rounded-xl shadow-md my-5">
         <div className="flex">
            <Image
               src={product?.images[0]}
               alt={`imagem de ${product.name}`}
               width={100}
               height={100}
               className="flex-1 rounded-l-lg"
            />
            <div className="flex flex-col justify-center ml-2 md:ml-6">
               <h4 className="text-lg md:text-2xl">{product.name}</h4>
               <p className="font-sans font-semibold">
                  R$ {product.metadata?.price},00
               </p>
            </div>
         </div>
         <ButtonSection
            idProduct={product.id}
            itemName={product.name}
            quantity={quantity}
            price={parseInt(product.metadata?.price)}
         />
      </div>
   )
}

export default SingleItem
