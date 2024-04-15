'use client'
import { useEffect } from "react";
import { data } from "../data/hero";
import Btn from "./Btn";


const Hero = () => {

useEffect(() => {

   let categories = document.querySelector(".categories")
   let categoriesCards = document.querySelectorAll(".categoriesCard")

   let collections = document.querySelector(".collections")



   window.onscroll = () => {
    if (window.scrollY >= categories.offsetTop -500) {
      categories.classList.add("animate-showTop")
      categoriesCards.forEach((card) => {
        setTimeout(() => {
          card.classList.remove("opacity-0")
        }, 100);
      })
    }
    
    if (window.scrollY >= collections.offsetTop -500) {
      collections.classList.add("animate-showTop")
    }



   }

}, [])
  return (
    <div className=" bg-slate-50 h-[80vh] w-11/12 mx-auto pl-40 relative translate-y-16 opacity-0 animate-showTop mb-20">
<div className="relative w-full h-full max-xl:hidden">
        <img 
        src={data[0].src}
        alt="hero"
        className="w-full h-full  absolute top-0 left-0"

        />
</div>
        <div className="absolute top-1/2 left-40 max-md:left-5 -translate-y-1/2 overflow-hidden py-5">
            <h1 className="text-6xl font-bold text-gray-950 leading-[1.4] w-3/4 mb-5 max-md:text-4xl max-md:w-full -translate-x-full animate-showLeft">Unleash Innovation in Every Byte</h1>
            <p className="text-2xl text-gray-600 mb-16 max-md:text-lg -translate-x-full animate-showLeft">Explore a World of Cutting-Edge Tech</p>
            <div className="-translate-x-full animate-showLeft">
            <Btn content={'Shop now'} href="shop"/>
            </div>
        </div>
    </div>
  )
}

export default Hero