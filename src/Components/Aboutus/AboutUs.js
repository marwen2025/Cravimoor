import React from 'react'
import { motion } from 'framer-motion';
import img from './../../Images/aboutUs.jpg'
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const AboutUs = () => {
  return (
    <div name="aboutus" className="pt-24 content-center text-black w-full min-h-screen h-full ">
      <section className="h-4/5 py-12 md:py-20  lg:py-28">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Cravimoor</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Cravimoor is a leading industrial design and 3D modeling company with a passion for creating
                innovative and visually stunning products. Founded in 2015, we have worked with a wide range of
                clients, from startups to Fortune 500 companies, to bring their ideas to life.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl mt-4">
                Our team of experienced designers and 3D artists are dedicated to delivering exceptional results,
                using the latest tools and technologies to ensure that every project exceeds our clients'
                expectations.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={img}
                width={500}
                height={500}
                alt="About Cravimoor"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default AboutUs