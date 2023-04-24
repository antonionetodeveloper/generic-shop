import { ProductProps } from "@/types/product"

export default function Product({ params }: ProductProps) {
   return <div>Id product: {params.id}</div>
}
