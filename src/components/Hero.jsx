import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/sohamPradhanProfile.jpg";
import '../components/custom-link.css';
import { motion } from "framer-motion";


const Hero = () => {
  return( 
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
              whileInView={{opacity:1,x:0}}
              initial={{ opacity: 0 ,x:-100}}
              transition={{duration:0.5,delay:0.5}} 
                className="pb-16 text-white text-outline text-6xl font-thin tracking-tighter lg:mt-16 lg:text-7xl" data-text="Soham Pradhan">Soham Pradhan</motion.h1>
                <motion.span 
                whileInView={{opacity:1,x:0}}
                initial={{ opacity: 0 ,x:-100}}
                transition={{duration:0.5,delay:0.5}}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">CYBER SECURITY ENGINEER</motion.span>
                <motion.p 
                 whileInView={{opacity:1,x:0}}
                 initial={{ opacity: 0 ,x:-100}}
                 transition={{duration:0.5,delay:0.5}}
                 className="my-2 max-w-xl py-6 font-light tracking-tight">
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
            <div className="flex justify-center">
                <motion.img whileInView={{opacity:1,x:0}}
                  initial={{ opacity: 0 ,x:100}}
                  transition={{duration:0.5,delay:0}}
                className="rounded-2xl" width={400} src={profilePic} alt="Soham Pradhan"></motion.img>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Hero