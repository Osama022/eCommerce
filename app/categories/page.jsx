'use client'
import { data } from '../data/categories'
import Card from '../components/Card'
import { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        let categoriesPageCards = document.querySelectorAll(".categories-page-cards")
        categoriesPageCards.forEach((card) => {
            setTimeout(() => {
              card.classList.remove("opacity-0")
            }, 100);
          })
    }, [])
  return (
    <div className="w-11/12 mx-auto mb-20 mt-20 translate-y-16 opacity-0 animate-showTop categories-page">
    <div className="flex justify-center items-center mb-10">
        <h2 className="text-3xl font-medium max-md:text-xl">Shop by Categories</h2>
    </div>
    <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
      { data.map((category) => {
        return <Card href={category.href} key={category.id} className={"categories-page-cards"}  name={category.name} src={category.src} delay={category.id} />
      }) }
    </div>
</div>
  )
}

export default page