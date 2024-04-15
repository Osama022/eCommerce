import Link from 'next/link'
import Btn from './components/Btn'

const NotFound = () => {
  return (
    <div className=' flex justify-center items-center flex-col min-h-[68.5vh]'>
    <h1 className=' text-[250px] max-sm:text-[200px] text-gray-100 font-bold'>404</h1>
    <div className='flex flex-col gap-5 items-center -mt-20'>
    <p className='font-bold text-lg'>Error 404 | not Found</p>
    <Btn content="Return to Home" href="/"/>
    </div>
  </div>
  )
}

export default NotFound