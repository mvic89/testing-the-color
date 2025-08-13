'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {

  const path = usePathname()

  const navLinks = [
    {name: 'RGB', link: '/rgb'},
    {name: 'HEX', link: '/hex'}
  ];

  return (
   <nav className="flex justify-evenly">
      {navLinks.map((item, index) => <Link className="py-4 px-4" key={index} href={item.link}>{item.name}</Link>)}
   </nav>
  )
}

export default Navigation