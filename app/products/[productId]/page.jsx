import ProductDatails from "./ProductDatails"



const page = ({ params }) => {

  return (
    <div className="w-4/5 mx-auto min-h-[68.5vh]">
      <ProductDatails id={params.productId}/>
    </div>
  )
}

export default page