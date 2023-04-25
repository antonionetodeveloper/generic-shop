import Image from "next/image"

import Button from "@/app/components/ui/buttons/genericButton"

const SingleProduct = async ({ id }: { id: string }) => {
   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
      next: { revalidate: 60 },
   })
   const product = await response.json()

   return (
      <section className="bg-white w-11/12 flex m-auto mt-5 rounded-lg p-5 shadow-md ">
         <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={200}
            quality={100}
            style={{ height: "60vh" }}
         />
         <div className="flex flex-col justify-center gap-10 w-4/5">
            <div>
               <h2 className="text-4xl text-center">{product.name}</h2>
               <p className="font-sans font-bold text-center">
                  $ {product.metadata?.price}.00
               </p>
            </div>
            <div className="flex flex-col items-center gap-5">
               <div className="flex gap-2">
                  <Button variant="primary" onClick={console.log("teste")}>
                     Comprar Agora
                  </Button>
                  <Button variant="secondary" onClick={console.log("teste")}>
                     Adicionar ao carrinho
                  </Button>
               </div>
               <p className="text-justify w-2/4">{product.description}</p>
            </div>
         </div>
      </section>
   )
}

export default SingleProduct
