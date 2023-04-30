export interface ButtonProps {
   onClick: any
   disable?: boolean
   variant: "primary" | "secondary" | "danger" | "success"
   children: React.ReactNode
   isLoading?: boolean
}

export interface ButtonSectionPros {
   idProduct: string
   productName: string
   price: number
}

export interface ButtonCartProps {
   idProduct: string
   itemName: string
   quantity: number
   price: number
}
