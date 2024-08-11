import pdfFile from "../assets/CV/SohamPradhanCV.pdf";
import {motion} from "framer-motion";
const CV = () => {

    const openPdf = () => {
        window.open(pdfFile,'_blank');
    };

  return (
    <div className='border-b border-neutral-800 pb-24'>
        < motion.h2 whileInView={{opacity:1,y:0}}
                 initial={{ opacity: 0 ,y:-100}}
                 transition={{duration:1.5}} className='my-8 mt-20 text-center text-5xl'>Wanna Know More!</motion.h2>
        <div className=" text-center">
        <motion.p whileInView={{opacity:1,x:0}}
                 initial={{ opacity: 0 ,x:-100}}
                 transition={{duration:1.5,delay:0.5}} 
                 className="text-center mb-6 font-bold border-b border-yellow-500 inline-block">Presenting My Curriculum Vitae</motion.p>
        </div>
        
        <motion.p whileInView={{opacity:1,x:0}}
                 initial={{ opacity: 0 ,x:-100}}
                 transition={{duration:1.5}}  className="text-center ">An Aspiring Cyber Security Engineer and third year B.Tech Computer Science student.<span className="block"> I present to you my curriculum vitae </span></motion.p>
        <div className="flex items-center justify-center py-20 h-20">
            <button onClick={openPdf} className="text-center bg-yellow-600 text-white font-bold py-2 px-8 border border-white rounded hover:bg-white hover:text-blue-500">Open</button>
        </div>
    </div>
  );
};

export default CV