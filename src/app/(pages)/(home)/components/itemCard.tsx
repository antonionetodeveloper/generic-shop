import Image from "next/image"
import { ItemCardProps } from "@/types/itemCard"
import Link from "next/link"

const ItemCard = ({ id, title, price, image }: ItemCardProps) => {
   return (
      <Link
         href={`/product/${id}`}
         className="w-full h-full flex justify-center items-center p-5 shadow-md bg-white rounded-md hover:cursor-pointer"
      >
         <li className="flex flex-col h-full justify-around items-center">
            <Image
               className="transition transform scale-100 hover:scale-110"
               src={image}
               alt={title}
               width={200}
               height={300}
            />
            <div>
               {title.length > 20 ? (
                  <h3 className="text-center text-lg font-bold mt-5">
                     {title.slice(0, 20)}...
                  </h3>
               ) : (
                  <h3 className="text-center text-lg font-bold mt-5">
                     {title}
                  </h3>
               )}
               <p className="font-sans text-lg font-bold">R$ {price}.00</p>
            </div>
         </li>
      </Link>
   )
}

export default ItemCard
