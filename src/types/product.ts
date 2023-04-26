import { metadata } from "./../app/layout"

export interface ProductProps {
   params: {
      id: string
   }
}

export interface SingleProductProps {
   id?: string
   name?: string
   price?: number
   description?: string
   images?: string
   category?: string
   metadata?: {
      price: string
   }
   setSearch?: any
}

export interface ProductCartProps {
   id: string
   name: string
   images: Array<string>
   metadata: { price: string }
}
