'use client'
import Product from "../components/Product"
import { data } from "../data/products"

import Aside from "./Aside"


const page = () => {
  return (
    <div className="w-4/5 mx-auto flex mt-20 min-h-[68.5vh]">
      <Aside />
      <div className="basis-3/4 max-md:basis-full">
        <div className="my-10 hidden max-md:block bg-black text-white rounded-lg py-3 px-5 duration-300 hover:bg-white hover:text-black border border-black w-fit mx-auto cursor-pointer"
        onClick={() => {
          let aside = document.querySelector(".aside")
          aside.classList.remove("-left-full")
          aside.classList.add("left-0")
        }}
        >Filters</div>
        <div className="relative text-center mb-20">
        <input type="text" name="" id="" className="w-3/5 shadow-lg px-5 py-5 outline-none rounded-md inputSearch max-md:w-full" placeholder="Search" />
        </div>
        <div className="grid gap-10 grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 mb-20 products-container">
            { 
            data.map((product) => {
                return <Product category={product.category} id={product.id} className="product" key={product.id} name={product.name} description={product.description} price={product.price} imgSrc={product.imagSrc} rate={product.rate} />
            }) }
            </div>
      </div>
    </div>
  )
}

export default page