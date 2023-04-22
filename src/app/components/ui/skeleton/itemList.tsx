const ItemListSkeleton = () => {
   return (
      <section className="mt-10 p-10">
         <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
            {Array.from({ length: 10 }).map((_, index) => (
               <ItemCardSkeleton key={`skeleton_${index}`} />
            ))}
         </ul>
      </section>
   )
}

const ItemCardSkeleton = () => {
   return (
      <li className="w-full h-96 animate-pulse flex justify-center items-center p-5 shadow-md bg-white rounded-md">
         <div className="w-full flex flex-col h-full justify-around items-center">
            <div className="rounded-sm w-full h-80 bg-gray-200 animate-pulse" />
            <div className="w-full h-4 bg-slate-700 rounded col-span-2 my-2"></div>
            <div className="w-32 h-4 flex mr-auto left-0 bg-slate-700 rounded col-span-1"></div>
         </div>
      </li>
   )
}

export default ItemListSkeleton
