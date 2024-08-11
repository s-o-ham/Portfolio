import aboutImg1 from "../assets/4about/curiosity.png";
import aboutImg2 from "../assets/4about/adaptive.png";
import aboutImg3 from "../assets/4about/problem-solving.png";
import aboutImg4 from "../assets/4about/leadership.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";





const Container = (delay) => ({
  hidden:{x:-100,opacity:0},
  visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5,delay:delay},
  },
});



const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
                 whileInView={{opacity:1,x:0}}
                 initial={{ opacity: 0 ,x:-100}}
                 transition={{duration:0.5,delay:0}}
                   className="my-20  text-center text-4xl">About 
            <motion.span 
           whileInView={{opacity:1,x:0}}
           initial={{ opacity: 0 ,x:-100}}
           transition={{duration:0.5,delay:0}}
            className="text-yellow-600"> Me</motion.span>
        </motion.h2>
        
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="flex justify-center lg:justify-start">
                  <motion.p 
                 whileInView={{opacity:1,x:0}}
                 initial={{ opacity: 0 ,x:-100}}
                 transition={{duration:0.5,delay:0.3}} 
                 className="my-2 text-center py-6">{ABOUT_TEXT}</motion.p>
                </div>
                <div className="flex flex-wrap justify-center gap-20 py-12 overflow-x-auto">
                <div className="flex flex-col items-center ">
                 
                  <motion.img
                  whileInView={{opacity:1,x:0}}
                  initial={{ opacity: 0 ,x:-100}}
                  transition={{duration:0.5,delay:0.5}}
                  className=" w-40 h-40 object-cover mb-3 " src={aboutImg1} alt="Image1"/>
                 
                  <h3 className="py-2 text-yellow-500">Curiosity</h3>
                  <motion.p 
                  variants={Container(1.2)}
                  initial="hidden"
                  animate="visible"   className="text-center text-grey-700 w-60">Passionate about exploring new technologies</motion.p>
                </div>
                <div className="flex flex-col items-center ">
                  <motion.img 
                   whileInView={{opacity:1,x:0}}
                   initial={{ opacity: 0 ,x:-100}}
                   transition={{duration:0.5,delay:0.5}}
                  className=" w-40 h-40 object-cover mb-3" src={aboutImg2} alt="Image1"/>
                  <h3 className="py-2 text-yellow-500">Adaptability</h3>
                  <motion.p 
                  variants={Container(1.2)}
                  initial="hidden"
                  animate="visible"  
                  className="text-center text-grey-700 w-60">Quick to learn and adapt to new challenges in the fast-paced world</motion.p>
                </div>
                <div className="flex flex-col items-center ">
                  <motion.img 
                  whileInView={{opacity:1,x:0}}
                  initial={{ opacity: 0 ,x:-100}}
                  transition={{duration:0.5,delay:0.5}}
                     className=" w-40 h-40 object-cover mb-3" src={aboutImg3} alt="Image1"/>
                  <h3 className="py-2 text-yellow-500">Problem-solving</h3>
                  <motion.p 
                  variants={Container(1.2)}
                  initial="hidden"
                  animate="visible"   className="text-center text-grey-700 w-60">Skilled in identifying and addressing complex issues</motion.p>
                </div>
                <div className="flex flex-col items-center  ">
                  <motion.img 
                   whileInView={{opacity:1,x:0}}
                   initial={{ opacity: 0 ,x:-100}}
                   transition={{duration:0.5,delay:0.5}}
                     className=" w-40 h-40 object-cover mb-3" src={aboutImg4} alt="Image1"/>
                  <h3 className="py-2 text-yellow-500">Leadership</h3>
                  <motion.p 
                  variants={Container(1.2)}
                  initial="hidden"
                  animate="visible"  className="text-center text-grey-700 w-60">Ability to lead projects and teams effectively</motion.p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About