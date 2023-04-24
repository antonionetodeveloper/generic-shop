import Image from "next/image"

const SingleProduct = async ({ id }: { id: string }) => {
   const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
         Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      },
      next: { revalidate: 60 },
   })
   const product = await response.json()

   return (
      <>
         <h2>{product.name}</h2>
         <p>{product.description}</p>
         <p>$ {product.metadata?.price}.00</p>
         <Image
            src={product.images[0]}
            alt={product.name}
            width={100}
            height={200}
         />
      </>
   )
}

export default SingleProduct
