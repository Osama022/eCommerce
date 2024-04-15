import Link from 'next/link'
import Image from "next/image";
import { star } from '../assets';


const Product = (props) => {
  return (
    <Link href={`/products/${props.id}`} className={`${props.className} shadow rounded-md ${props.collections ? "min-w-[30%] max-lg:min-w-[45%] max-sm:min-w-[95%]" : ""}`}>
    <div className="bg-slate-50 h-[300px] p-7 flex items-center justify-center">
        <img src={props.imgSrc} alt={props.name} className='max-h-full' />

    </div>
    <div className="p-5">
    <h3 className='font-bold text-xl my-5'>{props.name.length > 50 ? props.name.slice(0, 50) + "..." : props.name}</h3>
        <p>{props.description.length > 100 ? props.description.slice(0, 100) + "..." : props.description}</p>
        <span className="hidden">{props.category}</span>
        <div className="flex justify-between items-center mt-5">
        <span>{props.price}</span>
        <span className='flex gap-2 items-center'>
            <Image 
            src={star}
            alt='star'
            />
             {props.rate}</span>
        </div>
    </div>
    </Link>
  )
}

export default Product