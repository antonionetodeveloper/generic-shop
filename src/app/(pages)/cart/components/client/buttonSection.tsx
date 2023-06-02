"use client"

import { destroyCookie, parseCookies, setCookie } from "nookies"
import { useState } from "react"
import { ButtonCartProps } from "@/types/button"
import Button from "@/app/components/ui/buttons/genericButton"

const ButtonSection = (props: ButtonCartProps) => {
   const { itemName, idProduct, quantity: value, price } = props
   const [quantity, setQuantity] = useState(value)

   // bug: sempre que altera o valor de itens, ele quebra aqui. 
   const cookies = parseCookies()
   const parsedCookies = JSON.parse(cookies["cart"])

   if (quantity < 1) {
      const newCookiesList = parsedCookies.filter(
         (item: { idProduct: string }) => item?.idProduct !== idProduct
      )

      setCookie(null, "cart", JSON.stringify(newCookiesList), {
         maxAge: 30 * 24 * 60 * 60,
         path: "/",
      })
   }

   if (quantity >= 1) {
      const newCookiesList = parsedCookies?.map(
         (item: { idProduct: string }) => {
            if (item?.idProduct === idProduct) {
               return { ...item, quantity }
            }
            return item
         }
      )

      setCookie(null, "cart", JSON.stringify(newCookiesList), {
         maxAge: 30 * 24 * 60 * 60,
         path: "/",
      })
   }

   return (
      <div className="p-2 md:p-4 flex items-center">
         {quantity > 0 ? (
            <div className="flex items-center">
               <p className="font-bold p-3 text-2xl">{quantity}</p>
               <div className="flex flex-col gap-1">
                  <PlusButton setQuantity={setQuantity} />
                  <MinusButton setQuantity={setQuantity} />
               </div>
            </div>
         ) : (
            <div className="flex justify-center items-center max-w-sm">
               <Button variant="danger" onClick={() => {}}>
                  Item removido
               </Button>
            </div>
         )}
      </div>
   )
}

const PlusButton = ({ setQuantity }: { setQuantity: any }) => {
   return (
      <Button
         variant="primary"
         onClick={() => {
            setQuantity((prev: number) => prev + 1)
         }}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12 4.5v15m7.5-7.5h-15"
            />
         </svg>
      </Button>
   )
}

const MinusButton = ({ setQuantity }: { setQuantity: any }) => {
   return (
      <Button
         variant="secondary"
         onClick={() => {
            setQuantity((prev: number) => prev - 1)
         }}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M19.5 12h-15"
            />
         </svg>
      </Button>
   )
}

export default ButtonSection
