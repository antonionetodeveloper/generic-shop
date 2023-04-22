import Image from "next/image"

const Logo = () => {
   return (
      <div className="flex items-center justify-center gap-3">
         <Image src="/logo.png" alt="Logo" width={60} height={60} />
         <h1 className="text-2xl">Generic Shop</h1>
      </div>
   )
}

export default Logo
