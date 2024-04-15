import Link from 'next/link'
import '../delay.css'


const Card = (props) => {
  return (

<Link href={`/shop?categorey=${props.href}`} className={`p-5 bg-slate-50 opacity-0 duration-300 ${props.className} delay-${props.delay}`}>
        <img 
        src={props.src}
        alt={props.name}
        className='w-full max-h-[400px] mb-5'
        />
        <div className="bg-white p-5 text-lg text-center rounded-md">{ props.name }</div>
    </Link>

  )
}

export default Card