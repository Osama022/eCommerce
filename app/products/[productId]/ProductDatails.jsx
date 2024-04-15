import Product from "@/app/components/Product"

import { data } from "@/app/data/products";


const ProductDatails = (props) => {
        let productData = data.slice(+props.id, +props.id + 1)
        let productsWithSameCategory = data.filter((product) => product.category == productData[0].category)
        productsWithSameCategory = productsWithSameCategory.filter((product) => product != productData[0])
  return (
    <div className="">
            <div className="flex items-center gap-5 mb-40 max-lg:flex-col">
        <div className=" bg-slate-50 p-10 basis-1/2  flex justify-center items-center">
            <img 
            src={productData[0].imagSrc}
            alt={productData[0].name}
            className="h-[400px] max-lg:h-fit max-lg:max-h-[500px]"
            />
        </div>
        <div className="basis-1/2">
            <h2 className="font-bold text-3xl">{productData[0].name}</h2>
            <span className="block my-5">Category : <span className="text-gray-700 ">{productData[0].category}</span></span>
            <span className="block mb-10">{productData[0].price}</span>
            <h3 className="font-bold text-xl">Description</h3>
            <p className="my-5 leading-loose text-gray-700">{productData[0].description}</p>
            <div className=" bg-black text-white rounded-lg py-3 px-5 duration-300 hover:bg-white hover:text-black border border-black text-center cursor-pointer">Add to Cart</div>
        </div>
    </div>
    {productsWithSameCategory.length != 0 ?     <div className="">
        <h2 className="text-3xl mb-10">Related Products</h2>
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        { 
            productsWithSameCategory.map((product) => {
                return <Product category={product.category} id={product.id} className=""  key={product.id} name={product.name} description={product.description} price={product.price} imgSrc={product.imagSrc} rate={product.rate} />
            }) }
        </div>
    </div> : ""}
    </div>
  )
}

export default ProductDatails