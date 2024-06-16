import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
              variants={fadeIn('right',0.2)}
              initial='hidden'
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='flex-1 flex  flex-col  gap-y-12 mb-10 lg:mb-0'
            >
            {/* text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>
                  My Latest <br />
                  work.
                </h2>
                <p className='max-w-sm mb-16'>
                Displaying my most recent projects, 
                showcasing innovative solutions and creative designs to meet diverse client needs.!
                </p>
                <a href='https://github.com/itsajayk?tab=repositories'><button className='btn btn-sm'>View all products</button></a>
              </div>
              {/* image */}
              <div className='group relative overflow-hidden border-2
                border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute 
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img 
                  className='group-hover:scale-125 transition-all duration-500' 
                  src={Img1} 
                  alt="" 
                />
                {/* preTitle */}
                <div className='absolute -bottom-full left-12  
                group-hover:bottom-14  transition-all  duration-700 z-50'>
                  <span className='text-gradient'>MERN-STACK Project</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12  
                group-hover:bottom-24  transition-all  duration-500 z-50'>
                  <a href='https://github.com/itsajayk/notes'>
                  <span className='text-3xl text-white cursor-pointer'>Notes-Taking App</span>
                  </a>
                </div>
              </div>
              
          </motion.div>
          <motion.div 
            variants={fadeIn('left',0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1  flex  flex-col  gap-y-10'
        >
            {/* image */}
            <div className='group relative overflow-hidden border-2
                border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute 
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img 
                  className='group-hover:scale-125 transition-all duration-500' 
                  src={Img2} 
                  alt="" 
                />
                {/* preTitle */}
                <div className='absolute -bottom-full left-12  
                group-hover:bottom-14  transition-all  duration-700 z-50'>
                  <span className='text-gradient'>React Project</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12  
                group-hover:bottom-24  transition-all  duration-500 z-50'>
                  <a href='https://actodo-beryl.vercel.app/'>
                  <span className='text-3xl text-white cursor-pointer'>AcTodo</span>
                  </a>
                </div>
              </div>
            <div className='group relative overflow-hidden border-2
                border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute 
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img 
                  className='group-hover:scale-125 transition-all duration-500' 
                  src={Img3} 
                  alt="" 
                />
                {/* preTitle */}
                <div className='absolute -bottom-full left-12  
                group-hover:bottom-14  transition-all  duration-700 z-50'>
                  <span className='text-gradient'>Ecommerce Site</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12  
                group-hover:bottom-24  transition-all  duration-500 z-50'>
                  <a href='https://itsajayk.github.io/Nostra/'>
                  <span className='text-3xl text-white'>Nostra</span>
                  </a>
                  
                </div>
              </div>
          </motion.div>
        </div>
      </div>
  </section>
  );
};

export default Work;
