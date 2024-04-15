'use client'
import { useEffect } from "react";
import { checked } from "../assets";
import { data } from "../data/categories"
import Image from "next/image";
import { filterCategory } from "./filterCategory";

const Aside = () => {
    useEffect(() => {
        let inputSearch = document.querySelector(".inputSearch")
        let products = document.querySelectorAll(".product")
        let categorey = window.location.search
        if (categorey != '') {
          categorey = categorey.slice(11)
        let categoryEle = document.querySelectorAll(".category")
        categorey = categorey.split("").map((ele) => ele == "-" ? ele = " " : ele).join("")

        categoryEle.forEach((ele) => {

          if (ele.innerHTML.toLowerCase() == categorey) {
            ele.parentElement.children[0].children[0].classList.remove("hidden")
            filterCategory()
          }
        })
        }
        function search() {
          let val = inputSearch.value.toLowerCase()
          if (val != "") {
            products.forEach((product) => {
              product.classList.add("hidden")
              product.children[1].children[0].innerHTML.toLowerCase().match(val) !== null ? product.classList.remove("hidden") : false;
              product.children[1].children[1].innerHTML.toLowerCase().match(val) !== null ? product.classList.remove("hidden") : false;
            })
          } else {
            products.forEach((product) => {
              product.classList.remove("hidden")
            })
          }
        }
    
        inputSearch.onfocus = () => {
          document.onkeyup = () => {
            search()
          }
        }
      }, [])
  return (
    <div className="basis-1/4 duration-300 max-md:fixed z-10 w-4/5 h-full top-0 max-md:shadow-2xl bg-white max-md:p-10 aside -left-full">
      <div className="hidden max-md:block absolute top-5 right-5 text-3xl duration-300 hover:text-[red] cursor-pointer"
      onClick={(ele) => {
        ele.target.parentElement.classList.add("-left-full")
        ele.target.parentElement.classList.remove("left-0")
      }}
      >x</div>
    <h3 className="font-bold text-lg mb-10">Products Categories</h3>
    { data.map((category) => {
        return <div className="flex items-center gap-3 mb-5" key={category.id}>
            <div className="border border-black rounded-md w-5 h-5 cursor-pointer"
            onClick={(ele) => {
                try{
                ele.target.children[0].classList.toggle("hidden")
                } catch {
                ele.target.classList.toggle("hidden")
                }
                filterCategory()
            }}
            >
                <Image 
                src={checked}
                alt="checked"
                className="w-5 hidden checkedImage"
                />
            </div>
            <span
            className="cursor-pointer category"
                onClick={(ele) => {
                    ele.target.parentElement.children[0].children[0].classList.toggle("hidden")
                    filterCategory()
                }}
            >{category.name}</span>
        </div>
    }) }
  </div>
  )
}

export default Aside