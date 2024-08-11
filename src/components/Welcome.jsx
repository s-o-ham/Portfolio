import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { motion } from "framer-motion";


const Welcome = () => {
  return (
    <div className="pb-60 lg:mb-35 flex justify-center items-center min-h-screen">
      <div className="text-center">
        <motion.h2 
          whileInView={{opacity:1,y:0}}
          initial={{ opacity: 0 ,y:100}}
          transition={{duration:1.5}}
        className="pb-1 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-6">Hi! There</motion.h2>
        <motion.h2 
          whileInView={{opacity:1,x:0}}
          initial={{ opacity: 0 ,x:100}}
          transition={{duration:1.5}}
        className="pb-1 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-6">Welcome</motion.h2>
        <motion.h2 
          whileInView={{opacity:1,y:0}}
          initial={{ opacity: 0 ,y:-100}}
          transition={{duration:1.5}}
        className="pb-16 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-6">To My Portfolio</motion.h2>
        <div className="flex justify-center">
        <div className="rounded-2xl border-0 border-neutral-800 p-4 ">
        <motion.a 
        whileInView={{opacity:1,x:0}}
        initial={{ opacity: 0 ,x:-100}}
        transition={{duration:0.5,delay:0.5}}
        href="../components/About.jsx" target="_blank" className="next">
          <TbSquareRoundedArrowDownFilled className="text-6xl text-yellow-600" />
          </motion.a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
