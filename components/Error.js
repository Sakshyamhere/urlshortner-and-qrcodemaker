import Link from 'next/link'
import React from 'react'
import Footer from './Footer'

function Error() {
  return (
    <div className='mt-5'>
       <p className="font-bold text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl my-5 text-gray-700 mb-10">
        URL SHORTNER & QRCODE MAKER
      </p>
      <div>
    <div className="justify-center flex my-5">
      <div className="flex flex-col p-7 border shadow-lg w-full mx-5 md:w-[80%] lg:w-1/2">
        <p className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-[10px]">
         Some Error Occured : 
        </p>
        <ul className='text-lg md:text-xl lg:text-2xl xl:text-3xl mx-2 my-10 '>
<li className="list-disc mb-[5px]">Check if the domain is correct</li>
<li className="list-disc mb-[5px]">Check if the site is online</li>
<li className="list-disc mb-[5px]">Check the address bars and punctuation</li>
<li className="list-disc mb-[5px]">The URL may be being used for spam</li>
<li className="list-disc mb-[5px]">The URL may have been blocked</li>
<li className="list-disc mb-[5px]">The URL may have been reported</li>
<li className="list-disc mb-[5px]">The URL was recently shortened</li>
<li className="list-disc mb-[5px]">The URL is not allowed</li>
<li className="list-disc mb-[5px]">You shortened many URLs in a short time</li>
</ul>
<Link className='p-2 rounded-sm bg-gray-500 mx-2 font-normal text-md text-center md:text-xl lg:text-2xl xl:text-3xl mb-[5px] w-1/4' href='/'>GO BACK</Link>
      </div>
    </div>
    </div>
    <div className='left-0 bottom-0 md:fixed mt-[20%]  w-full'>
      <Footer/>
    </div>
    
    </div>
  )
}

export default Error