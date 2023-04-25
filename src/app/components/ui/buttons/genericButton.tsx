"use client"

import { ButtonProps } from "@/types/button"

const Button = ({ children, onClick, disable, variant }: ButtonProps) => {
   return (
      <button
         type="button"
         onClick={() => onClick}
         className={`${disable ? "cursor-not-allowed" : "pointer"} ${
            (variant === "primary" &&
               "bg-gray-800 hover:bg-gray-900 text-white") ||
            (variant === "secondary" &&
               "bg-white hover:bg-slate-200 text-black") ||
            (variant === "danger" &&
               "bg-red-500 hover:bg-red-600 text-white") ||
            (variant === "success" &&
               "bg-green-500 hover:bg-green-600 text-white")
         } 
         font-sans font-bold rounded-lg text-lg px-5 py-2 duration-150 shadow-md`}
      >
         {children}
      </button>
   )
}

export default Button
