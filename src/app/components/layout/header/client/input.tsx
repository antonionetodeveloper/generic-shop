"use client"

import { useState } from "react"
import { InputProps } from "@/types/dropDown"
import { SingleProductProps } from "@/types/product"
import Link from "next/link"

const Input = ({ products }: InputProps) => {
   const [search, setSearch] = useState<string>("")
   const filteredProducts =
      search.length > 0
         ? products
              .filter((product) => product.name.toLowerCase().includes(search))
              .slice(0, 5)
         : []

   return (
      <div>
         <input
            className="flex relative w-full bg-white pl-12 p-2 rounded-xl duration-150 focus:outline-none focus:shadow-md shadow-md md:shadow-none "
            placeholder="Digite o nome do produto ..."
            onChange={(event) => setSearch(event.target.value)}
            value={search}
         />
         <DropDown products={filteredProducts} setSearch={setSearch} />
      </div>
   )
}

const DropDown = ({ products, setSearch }: InputProps) => {
   return (
      <ul className="absolute mt-1 w-full space-y-1">
         {products.map((product: SingleProductProps) => (
            <Item
               key={product.id}
               id={product.id}
               name={product.name}
               price={product.price}
               setSearch={setSearch}
            />
         ))}
      </ul>
   )
}

const Item = ({ id, name, price, setSearch }: SingleProductProps) => {
   return (
      <li onClick={() => setSearch("")}>
         <Link href={`/product/${id}`}>
            <div className="bg-slate-50 hover:bg-slate-200 duration-150 cursor-pointer flex justify-between p-3 rounded relative z-30">
               <div>
                  <p>{name}</p>
                  <p>{price}</p>
               </div>
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
                     d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
               </svg>
            </div>
         </Link>
      </li>
   )
}

export default Input
