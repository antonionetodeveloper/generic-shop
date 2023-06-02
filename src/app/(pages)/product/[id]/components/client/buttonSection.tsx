"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { parseCookies, setCookie } from "nookies"

import { ButtonSectionPros } from "@/types/button"
import Button from "@/app/components/ui/buttons/genericButton"

const ButtonSection = (props: ButtonSectionPros) => {
   const { idProduct, productName, price } = props

   const router = useRouter()
   const cookies = parseCookies()

   const [alreadyInCart, setAlreadyInCart] = useState<boolean>()

   useEffect(() => {
      const cookies = parseCookies()
      for (let cookie in cookies) {
         if (cookie === productName) {
            setAlreadyInCart(true)
         }
      }
   }, [productName])

   const handleAddToCart = useCallback(() => {
      const cart = cookies["cart"] ? JSON.parse(cookies["cart"]) : []
      const content = {
         idProduct,
         quantity: 1,
         price,
      }
      cart.push(content)

      setCookie(null, "cart", JSON.stringify(cart), {
         maxAge: 7 * 24 * 60 * 60, // 1 week
         path: "/",
      })

      router.push("/cart")
   }, [cookies, idProduct, price, router])

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
