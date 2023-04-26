import SingleItem from "./singleItem"

const ItemList = ({ list }: { list: Array<object> }) => {
   return (
      <>
         <ul>
            {list.map((item: any) => {
               return (
                  <>
                     {/* @ts-expect-error - Async Component */}
                     <SingleItem id={item.value} />
                  </>
               )
            })}
         </ul>
      </>
   )
}

export default ItemList
