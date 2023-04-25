export interface ButtonProps {
   onClick: void
   disable?: boolean
   variant: "primary" | "secondary" | "danger" | "success"
   children: React.ReactNode
}
