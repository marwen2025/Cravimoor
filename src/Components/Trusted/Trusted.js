import React from 'react'
import img from './../../Images/ds.png'
const Trusted = () => {
  return (
    <div name="services" className='w-full lg:pt-24 items-center h-full h-m-screen  bg-gray-200'>
        <section className="w-full sm:h-screen content-center min-h-max py-12 md:py-24 lg:py-32 bg-muted">
        <div className="mx-auto items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
              Our Trusted Clients
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Companies We've Worked With</h2>
            <p className="mx-auto max-w-[700px]text-gray-700 text-center text-pretty text-lg sm:text-xl md:text-2xl">
              We're proud to have collaborated with some of the leading companies in various industries. Our expertise
              and dedication have earned the trust of these respected brands.
            </p>
          </div>
          <div className=" py-12">
            <img src={img} width={300} alt="dassault systemes" className="mx-auto hover:brightness-50" />


            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trusted