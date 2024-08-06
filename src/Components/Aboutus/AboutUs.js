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
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">About Us</div>
            <h2 className="text-xl font-bold py-4 tracking-tighter sm:text-2xl md:text-3xl">
            Crazy Vision Modeling Organisation
            </h2>
              <p className="text-muted-foreground py-4 text-lg md:text-xl">
              At Cravimoor, we are a 100% remote services company dedicated to pushing the boundaries of industrial design and 3D modeling. With a passion for innovation and a commitment to engineering excellence, our team combines expertise and initiative to tackle every challenge head-on. We thrive on transforming bold inventions into tangible solutions, helping our clients achieve their dreams with creativity and precision. As a Crazy Vision Modeling Organization, Cravimoor is not just about designs; we are about realizing the extraordinary.
              </p>
              <a href='https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_work-design-ingenierie-activity-7062536317527576576-I6qP?utm_source=share&utm_medium=member_android' target="_blank" className="underline text-xl text-blue-700 font-bold">
                View Examples.
              </a>
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
                height={300}
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