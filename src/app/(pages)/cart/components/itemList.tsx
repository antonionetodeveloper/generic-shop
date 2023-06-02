import SingleItem from "./singleItem"

interface ItemListProps {
   list: Array<{ idProduct: string; quantity: string }>
}

const ItemList = ({ list }: ItemListProps) => {
   console.log(list)

   return (
      <>
         <ul>
            {list.map((item) => {
               const { idProduct, quantity } = item

               return (
                  <>
                     {/* @ts-expect-error - Async Component */}
                     <SingleItem id={idProduct} quantity={parseInt(quantity)} />
                  </>
               )
            })}
         </ul>
      </>
   )
}

export default ItemList
