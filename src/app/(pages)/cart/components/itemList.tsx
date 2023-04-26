import SingleItem from "./singleItem"

const ItemList = ({ list }: { list: Array<object> }) => {
   return (
      <>
         <ul>
            {list.map((item: any) => {
               const product = JSON.parse(item.value)
               return (
                  <>
                     {/* @ts-expect-error - Async Component */}
                     <SingleItem
                        id={product.idProduct}
                        quantity={parseInt(product.quantity)}
                     />
                  </>
               )
            })}
         </ul>
      </>
   )
}

export default ItemList
