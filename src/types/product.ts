export interface ProductProps {
   params: {
      id: string
   }
}

export interface SingleProductProps {
   id?: string
   name: string
   price: number
   description: string
   image: string
   category: string
}
