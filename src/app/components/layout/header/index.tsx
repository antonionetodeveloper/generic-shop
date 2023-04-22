import Search from "./search"
import Logo from "./logo"

export default function Header() {
   return (
      <header className="w-full backdrop-blur-sm bg-white/0 z-50 p-10 bg-red-300 shadow-sm">
         <div className="flex flex-col justify-center gap-8">
            <Logo />
            <Search />
         </div>
      </header>
   )
}
