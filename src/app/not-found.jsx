import React from 'react'

const notFound = () => {
  return (
    <div className='flex flex-col w-full items-center gap-2 mt-8'>
        <p className='text-[2vw] font-bold'>Page not found :(</p>
        <a className='text-[1vw] hover:underline' href="/">Return home</a>
    </div>
  )
}

export default notFound