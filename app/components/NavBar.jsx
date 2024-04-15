import Image from "next/image";
import { logoBlack } from "../assets";
import Link from 'next/link'
import Btn from "./Btn";


const NavBar = () => {
  return (
    <div className="w-4/5 mx-auto flex items-center py-7 justify-between max-sm:w-11/12">

        <Link href='/'>
        <Image 
        src={logoBlack}
        alt="logoBlack"
        className="max-sm:w-3/4"
        />
        </Link>
        <ul className="flex gap-10 items-center text-gray-600 max-sm:gap-5">
            <li className="relative navLink overflow-hidden py-3"><Link href='/'>Home</Link></li>
            <li className="relative navLink overflow-hidden py-3"><Link href='/shop'>Shop</Link></li>
            <li><Btn content={'Login'} href="login"/></li>
        </ul>
    </div>
  )
}

export default NavBar