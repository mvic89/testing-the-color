import Link from "next/link"
import Navigation from "../Navigation"

const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-amber-200 p-6">
      <Link className="text-3xl self-center" href={'/'}><h1>Home</h1></Link>
      <Navigation/>
    </header>
  )
}

export default Header