"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const BackButton = () => {
   const router = useRouter()
   const pathname = usePathname()

   return (
      <>
         {pathname !== "/" ? (
            <button
               onClick={() => router.push("/")}
               className="hover:bg-gray-300 duration-150 rounded-full p-3 absolute"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
               </svg>
            </button>
         ) : null}
      </>
   )
}

export default BackButton
