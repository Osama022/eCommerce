import Image from "next/image";
import { logoWhite } from "../assets";


const Footer = () => {
  return (
    <div className="flex justify-between items-center px-16 py-10 mt-20 bg-black text-white max-sm:flex-col max-sm:gap-5">
        <Image 
        src={logoWhite}
        alt="logoWhite"
        className="max-sm:w-1/2"
        />
        <span>Created By Osama Ali</span>
    </div>
  )
}

export default Footer
