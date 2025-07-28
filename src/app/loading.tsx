/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Loading() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <img src="/logo.png" alt="Logo" className="w-32 fade" />
    </div>
  )
}

export default Loading