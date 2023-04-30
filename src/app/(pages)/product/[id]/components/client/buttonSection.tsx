"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { parseCookies, setCookie } from "nookies"

import { ButtonSectionPros } from "@/types/button"
import Button from "@/app/components/ui/buttons/genericButton"

const ButtonSection = ({ idProduct, productName, price }: ButtonSectionPros) => {
   const router = useRouter()
   const [alreadyInCart, setAlreadyInCart] = useState<boolean>()

   useEffect(() => {
      const cookies = parseCookies()
      for (let cookie in cookies) {
         if (cookie === productName) {
            setAlreadyInCart(true)
         }
      }
   }, [productName])

   const handleAddToCart = () => {
      setCookie(
         null,
         productName,
         JSON.stringify({
            idProduct,
            quantity: 1,
            price
         }),
         {
            maxAge: 24 * 60 * 60, // 1 day
            path: "/",
         }
      )
      router.push("/cart")
   }

   return (
      <div className="flex md:flex-row flex-col md:gap-2 gap-5">
         <Button variant="primary" onClick={() => {}}>
            Comprar Agora
         </Button>
         {alreadyInCart ? (
            <Button
               variant="success"
               onClick={() => {
                  router.push("/cart")
               }}
            >
               Adicionado ao carrinho!
            </Button>
         ) : (
            <Button variant="secondary" onClick={handleAddToCart}>
               Adicionar ao carrinho
            </Button>
         )}
      </div>
   )
}

export default ButtonSection
