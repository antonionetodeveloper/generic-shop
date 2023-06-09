import Search from "./search"
import Logo from "./logo"
import BackButton from "./client/backButton"

export default function Header() {
   return (
      <header className="w-full backdrop-blur-sm bg-white/0 md:p-10 p-8 shadow-sm relative z-20">
         <BackButton />
         <div className="flex flex-col justify-center gap-8">
            <Logo />
            {/* @ts-expect-error - Async Component */}
            <Search />
         </div>
      </header>
   )
}
