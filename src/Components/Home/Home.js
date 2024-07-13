import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import CarImg from './../../Images/car.png'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      <div className=' h-4/5 flex shadow-gray-300 bg-center shadow-xl w-full bg-[image:var(--image-url)] rounded bg-cover bg-no-repeat items-center'style={{'--image-url': `url(${CarImg})`}}>
      <div className="mx-auto items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
              Cravimoor
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Industrial Design & 3D Modeling
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Crafting innovative products and captivating visuals.
            </p>
          </div>
        
        </div>
      </div>

    </div>
  );
}

export default Home;
