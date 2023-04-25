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
}
