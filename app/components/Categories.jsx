import Link from 'next/link'
import { data } from '../data/categories'
import Card from './Card'
const Categories = () => {
  data.length = 6
  return (
    <div className="w-11/12 mx-auto mb-20 translate-y-16 opacity-0 categories">
        <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-medium max-md:text-xl">Shop by Categories</h2>
            <Link href="/categories" className="text-lg text-gray-600 max-md:text-normal">Show All</Link>
        </div>
        <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          { data.map((category) => {
            return <Card href={category.href} className={"categoriesCard"} key={category.id}  name={category.name} src={category.src} delay={category.id} />
          }) }
        </div>
    </div>
  )
}

export default Categories