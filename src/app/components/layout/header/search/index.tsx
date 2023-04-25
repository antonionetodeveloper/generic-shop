import Input from "./input"

const Search = async () => {
   const response = await fetch(
      "https://api.stripe.com/v1/products?active=true",
      {
         headers: {
            Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
         },
         next: { revalidate: 60 },
      }
   )
   const products = await response.json()

   return (
      <div className="flex w-full md:w-3/5 lg:w-2/5 flex-col m-auto justify-center relative">
         <div className="pointer-events-none absolute left-2 z-10">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
               />
            </svg>
         </div>
         <Input products={products?.data} />
      </div>
   )
}

export default Search
