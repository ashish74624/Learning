import { motion } from "framer-motion"

export default function From() {
  return (
    <main  className="bg-[#242424] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll text-white text-2xl ">
      <motion.div className="bg-white w-80 h-80 rounded-lg"
      animate={{rotate:49}}
      transition={{from:25 ,duration: 2}}
      ></motion.div>
    </main>
  )
}
