import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const iconvariants = (duration)=>({
   initial:{y:-10},
   animate:{
    y:[10,-10],
    transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
    },
   },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconvariants(2.5)}
        initial="initial"
        animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconvariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div 
        variants={iconvariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-red-700" />
        </motion.div>
        <motion.div 
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div 
        variants={iconvariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-blue-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
