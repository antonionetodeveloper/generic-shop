import Search from "./search"
import Logo from "./logo"
import BackButton from "./backButton"

export default function Header() {
   return (
      <header className="w-full backdrop-blur-sm bg-white/0 z-50 md:p-10 p-5 shadow-sm">
         <BackButton />
         <div className="flex flex-col justify-center gap-8">
            <Logo />
            {/* @ts-expect-error - Async Component */}
            <Search />
         </div>
      </header>
   )
}
