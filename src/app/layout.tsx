import "@/styles/globals.css"

import { Archivo_Black } from "next/font/google"
import { Crete_Round } from "next/font/google"

import Header from "./components/layout/header"

const Titles = Archivo_Black({
   weight: "400",
   variable: "--font-titles",
   subsets: ["latin"],
   display: "swap",
})

const Texts = Crete_Round({
   weight: "400",
   variable: "--font-texts",
   subsets: ["latin"],
   display: "swap",
})

export const metadata = {
   title: "Generic Shop",
   description: "Generic Shop is a generic shop.",
}

interface LayoutProps {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="en" className={`${Titles.variable} ${Texts.variable}`}>
         <body>
            <Header />
            <main>{children}</main>
         </body>
      </html>
   )
}
