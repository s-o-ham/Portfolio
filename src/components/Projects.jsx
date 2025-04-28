import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project1 from "../assets/ProImg/Slider/keylogger.png";
import Project2 from "../assets/ProImg/Slider/CurrencyConverter.png";
import Project3 from "../assets/ProImg/Slider/JavaCourse.png";
import { PROJECTS } from '../constants';
import {motion} from 'framer-motion'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,            // <-- this line added
  autoplaySpeed: 3000,       // <-- slide every 3 seconds
  pauseOnHover: true,         // <-- optional: pause when mouse hovers
  cssEase: "linear"
};
const Projects = () => {
return (
  <section id="projects" className="projects-section">
  <div className="border-b border-neutral-900 pb-4 w-full max-w-4xl mx-auto">
    <div className=' pb-20 '>
         <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{ opacity: 0 ,y:-100}}
         transition={{duration:0.5}}
         className="my-12 mt-20 text-center text-5xl "><span className='text-yellow-700'>P</span><span className='text-4xl'><span className='text-yellow-700'>RO</span>JECTS</span></motion.h2>     
         <motion.p 
         whileInView={{opacity:1,x:0}}
         initial={{ opacity: 0 ,x:-100}}
         transition={{duration:1}}
         className='text-center my-8 mx-8'>There is no better way to understand my work than through my projects.As you browse through this site, take a moment to explore my projects and see how they reflect my dedication to cyber security and technology. Each project showcases my skills and unique approach, giving you a glimpse into my signature touch in the field.</motion.p>
    </div>
    <div className="border-b border-neutral-900 pb-16 w-full max-w-2xl mx-auto">
    <Slider {...settings}>
      <div className="relative group ">
        <img src={Project1} alt="Keylogger" className="object-cover w-full h-auto rounded-3xl" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-3xl">
          <a href='https://github.com/s-o-ham/Keylogger/blob/main/README.md' target='blank'>
          <button className="bg-white text-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">View</button>
          </a>
        </div>
      </div>
      <div className="relative group">
        <img src={Project2} alt="Project 2" className="w-full h-auto rounded-3xl" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-3xl">
        <a href='https://github.com/s-o-ham/Currency-Converter/blob/main/README.md' target='blank'>
          <button className="bg-white text-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">View</button>
        </a>
        </div>
      </div>
      <div className="relative group">
        <img src={Project3} alt="Project 3" className="w-full h-auto rounded-3xl" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-3xl">
        <a href='https://github.com/s-o-ham/Java/blob/main/README.md' target='blank'>
          <button className="bg-white text-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">View</button>
        </a>
        </div>
      </div>
    </Slider>
    </div>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {PROJECTS.map((project, index) => (
    <motion.div 
      key={index} 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative group bg-neutral-900 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      
      {/* Overlay View Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-2xl">
      {project.url && (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          View
        </button>
        </a>
      )}
      </div>

      <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
      <p className="mb-4 text-neutral-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className="bg-yellow-700 text-black px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>


    


  </div>
  </section>
);
};

export default Projects