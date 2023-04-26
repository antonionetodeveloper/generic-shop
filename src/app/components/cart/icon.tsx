import Link from "next/link"

const CartIcon = ({ cartCount }: { cartCount: number }) => {
   return (
      <div className="fixed bottom-0 right-0">
         <Link href={"/cart"}>
            <div className="md:hover:bg-slate-200 bg-slate-200 md:bg-transparent rounded-full p-6 m-6 duration-150">
               <div className="bg-red-400 rounded-full absolute right-0 top-0 m-8 w-8 h-8 flex justify-center items-center">
                  <span className="text-slate-50 text-2xl font-sans font-semibold">
                     {cartCount}
                  </span>
               </div>
               <div>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="black"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-14 h-14"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                     />
                  </svg>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default CartIcon