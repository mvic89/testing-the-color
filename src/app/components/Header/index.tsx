import Link from "next/link"
import Navigation from "../Navigation"

const Header = () => {
  return (
    <header className=" bg-amber-200 ">
      <div className="flex flex-row justify-between px-0 py-6 w-full max-w-[1200px] mx-auto">
        <Link className="text-3xl self-center" href={'/'}><h1>Home</h1></Link>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header