import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
            variants={fadeIn('right',0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
                mix-blend-lighten bg-top lg: hidden'>
                  
          </motion.div> 
          {/* text */}
          <motion.div 
            variants={fadeIn('left',0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
            >
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>
            With a year of hands-on experience, 
            I specialize in building modern web applications 
            that prioritize performance and accessibility. 
            </h3>
            <p className='mb-6'>
            Hi there! I'm a dedicated Front-end Developer 
            with a passion for crafting responsive 
            and user-friendly web experiences.
            </p>
            {/* stats */}
            <div className='flex gap-x-6  lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView? <CountUp start={0.1} end={1} duration={3} /> :
                    null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView? <CountUp start={0} end={3} duration={2} /> :
                    null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView? <CountUp start={0} end={5} duration={3} /> :
                    null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <a href='https://wa.me/+94776911021'><button className='btn btn-lg'>Contact me</button></a>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
