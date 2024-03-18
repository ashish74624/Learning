import { motion } from "framer-motion"

export default function StaggerChildren() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        // staggerDirection: -1 -- For reverse
        when:"beforeChildren",
        // repeat:2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 ,x:-100 },
    show: { opacity: 1 , x:0}
  }

  
  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll text-white text-2xl flex flex-col justify-center items-center">
      <motion.ol
      className="w-max px-2 text-black h-max py-2 bg-white rounded-lg"
        variants={container}
        initial="hidden"
        animate="show">
        <motion.li variants={item}>Hello</motion.li>
        <motion.li variants={item}>There</motion.li>
        <motion.li variants={item}>There</motion.li>
        <motion.li variants={item}>There</motion.li>
        <motion.li variants={item}>There</motion.li>
      </motion.ol>
    </main>
  )
}
