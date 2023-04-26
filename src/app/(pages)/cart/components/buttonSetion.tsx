"use client"

import { destroyCookie, setCookie } from "nookies"
import { useEffect, useState } from "react"
import { ButtonCartProps } from "@/types/button"
import Button from "@/app/components/ui/buttons/genericButton"

const ButtonSection = ({
   itemName,
   idProduct,
   quantity: value,
}: ButtonCartProps) => {
   const [quantity, setQuantity] = useState(value)

   useEffect(() => {
      if (quantity < 1) {
         destroyCookie(null, itemName)
      }
      if (quantity > 1) {
         setCookie(null, itemName, JSON.stringify({ idProduct, quantity }), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
         })
      }
   }, [quantity, itemName, idProduct])

   return (
      <div>
         {quantity > 0 ? (
            <>
               <PlusButton setQuantity={setQuantity} />
               <p>{quantity}</p>
               <MinusButton setQuantity={setQuantity} />
            </>
         ) : (
            <>
               <Button variant="danger" onClick={() => {}}>
                  Item removido
               </Button>
            </>
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
