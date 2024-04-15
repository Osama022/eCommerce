import Link from 'next/link'
import Image from "next/image";
import { loginImage, logoBlack } from "../assets";


const page = () => {

  return (
    <div className="flex absolute w-full max-2xl:gap-[10%]  h-full gap-[19.5%] bg-white z-10 top-0 left-0">
        <Image 
        src={loginImage}
        alt="loginImage"
        className="h-screen basis-1/2 max-xl:hidden"
        />
        <div className="absolute top-10 left-10">
            <Image 
            src={logoBlack}
            alt="logoBlack"
            />
        </div>
        <div className="basis-1/2 flex flex-col items-start justify-center max-xl:basis-full max-xl:items-center">
<div className="flex flex-col min-w-96 2xl:min-w-[450px]">
<h2 className="font-bold text-4xl mb-5">Welcome</h2>
            <span className="block text-gray-500 mb-10">Please login here</span>
            <label className="cursor-pointer" htmlFor="email">Email address *</label>
            <input className="w-full border border-gray-300 mb-5 mt-3 px-5 py-3 rounded-lg outline-none" type="email" name="" id="email" required />
            <label className="cursor-pointer" htmlFor="password">Password *</label>
            <input className="w-full border border-gray-300 mb-5 mt-3 px-5 py-3 rounded-lg outline-none" type="password" name="" id="password" required />
            <div className="w-full bg-black text-white rounded-lg py-3 px-5 duration-300 hover:bg-white hover:text-black border border-black text-center cursor-pointer">Login</div>
            <div className="flex justify-between items-center mt-5">
                <Link href={"/sign-up"} className="text-lg">Create an account?</Link>
                <span className="text-lg">Forgot password?</span>
            </div>
</div>
        </div>
    </div>
  )
}

export default page