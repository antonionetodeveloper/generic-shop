import "@/style/globals.css"

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
}

interface LayoutProps {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="pt-BR">
         <body>{children}</body>
      </html>
   )
}
