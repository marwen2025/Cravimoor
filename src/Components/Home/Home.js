import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import CarImg from './../../Images/car.png'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      <div className=' h-4/5 flex shadow-gray-300 bg-center shadow-xl w-full bg-[image:var(--image-url)] rounded bg-cover bg-no-repeat items-center'style={{'--image-url': `url(${CarImg})`}}>
        <div className=' mx-auto' >
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-white font-bold text-5xl md:text-6xl border-s-2 border-blue-500'
          >
            Unleash Your Creativity with Cravimoor
          </motion.h5>
          <br></br>
          <br></br>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-2xl md:text-3xl text-white'
          >
            Innovative Industrial Design & Captivating 3D Modeling
          </motion.h1>

        </div>

      </div>
      <div className="flex justify-center items-end pt-28">
        <div className=" flex items-end justify-center animate-bounce">
          <a href="#"><Link to="aboutus" smooth={true} duration={500}><FaChevronDown color='rgb(59, 130, 246)' size={60} /></Link></a>
        </div>
      </div>

    </div>
  );
}

export default Home;
