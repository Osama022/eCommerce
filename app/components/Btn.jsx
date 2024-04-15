import Link from 'next/link'

const Btn = ( props ) => {
  return (
    <Link href={`/${props.href}`} className=" bg-black text-white rounded-lg py-3 px-5 duration-300 hover:bg-white hover:text-black border border-black">{props.content}</Link>
  )
}

export default Btn