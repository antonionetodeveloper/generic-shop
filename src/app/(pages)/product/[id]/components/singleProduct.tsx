import Image from "next/image"

import ButtonSection from "./buttonSection"

const SingleProduct = async ({ id }: { id: string }) => {
   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
      next: { revalidate: 60 },
   })
   const product = await response.json()

   return (
      <section className="bg-white w-11/12 md:flex m-auto mt-5 rounded-lg p-5 shadow-md ">
         <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={200}
            quality={100}
            style={{
               height: "60vh",
               objectFit: "cover",
            }}
         />
         <div className="flex flex-col justify-center gap-10 md:w-4/5">
            <div>
               <h2 className="text-4xl text-center">{product.name}</h2>
               <p className="font-sans font-bold text-center">
                  R$ {product.metadata?.price},00
               </p>
            </div>
            <div className="flex flex-col items-center gap-5">
               <ButtonSection idProduct={id} productName={product.name} />
               <p className="text-justify md:w-2/4 md:p-0 p-5">
                  {product.description}
               </p>
            </div>
         </div>
      </section>
   )
}

export default SingleProduct
