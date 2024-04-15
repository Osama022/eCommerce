"use client"
import { useEffect } from "react";
import { left, right } from "../assets";
import { data } from "../data/products"
import Product from "./Product"
import Image from "next/image";

const Collections = () => {
    let moveX = 0
    useEffect(() => {
        let leftBtn = document.querySelector(".left-btn")
        let rightBtn = document.querySelector(".right-btn")
        let slider = document.querySelector(".slider")
        let pageCount = document.querySelector(".page-count")
        rightBtn.onclick = () => {
            leftBtn.classList.remove("cursor-not-allowed")
            if (window.innerWidth >= 1024) {
                if (pageCount.innerHTML < Math.ceil(data.length / 3)) {
                    moveX -= 105
                    slider.style.cssText = `transform: translateX(${moveX}%)`
                    pageCount.innerHTML = +pageCount.innerHTML + 1
                } else {
                    rightBtn.classList.add("cursor-not-allowed")
                }
            } else if (window.innerWidth <= 1024 && window.innerWidth >= 640) {
                if (pageCount.innerHTML < Math.ceil(data.length / 2)) {
                    moveX -= 100
                    slider.style.cssText = `transform: translateX(${moveX}%)`
                    pageCount.innerHTML = +pageCount.innerHTML + 1
                }else {
                    rightBtn.classList.add("cursor-not-allowed")
                }
            } else {
                if (pageCount.innerHTML < data.length ) {
                    moveX -= 100
                    slider.style.cssText = `transform: translateX(${moveX}%)`
                    pageCount.innerHTML = +pageCount.innerHTML + 1
                }else {
                    rightBtn.classList.add("cursor-not-allowed")
                }
            }

        }
        leftBtn.onclick = () => {
            rightBtn.classList.remove("cursor-not-allowed")
            if (window.innerWidth >= 1024) {
                if (pageCount.innerHTML > 1) {
                    moveX += 105
                    slider.style.cssText = `transform: translateX(${moveX}%)`
                    pageCount.innerHTML = +pageCount.innerHTML - 1
                }else {
                    leftBtn.classList.add("cursor-not-allowed")
                }
            }else {
                if (pageCount.innerHTML > 1) {
                    moveX += 100
                    slider.style.cssText = `transform: translateX(${moveX}%)`
                    pageCount.innerHTML = +pageCount.innerHTML - 1
                }else {
                    leftBtn.classList.add("cursor-not-allowed")
                }
            } 
        }
        

    })
  return (
    <div className="mb-20 w-11/12 mx-auto collections translate-y-16 opacity-0">
        <h2 className="font-medium text-center text-4xl mb-20">
        New Collections
        </h2>
        <div className="mb-20 overflow-hidden ">
            <div className="flex gap-[5%] items-center duration-300 slider">
            { 
            data.map((product) => {
                return <Product category={product.category} id={product.id} className="" collections={true} key={product.id} name={product.name} description={product.description} price={product.price} imgSrc={product.imagSrc} rate={product.rate} />
            }) }
            </div>
        </div>
        <div className="flex items-center justify-center gap-5 ">
            <Image 
            src={left}
            alt="left"
            className=" cursor-pointer left-btn"
            />
            <span>Page <span className="page-count">1</span> Of <span className="hidden lg:inline">{Math.ceil(data.length / 3)}</span><span className="hidden max-lg:inline max-sm:hidden">{Math.ceil(data.length / 2)}</span><span className="hidden max-sm:inline">{data.length}</span></span>
            <Image 
            src={right}
            alt="right"
            className=" cursor-pointer right-btn"
            />
        </div>
    </div>
  )
}

export default Collections