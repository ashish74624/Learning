import { motion } from "framer-motion"

export default function Times() {
  return (
    <main  className="bg-[#242424] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll text-white text-2xl grid place-content-center">
      <motion.div className="bg-white w-40 h-40 rounded-full"
      animate={{scale:[1,1.2,0.2,1.2,1]}}
      transition={{times:[0,0.5,0.7,0.9,1]}} // times value should be between 0 and 1
      // Determines the time at which statge what apimation should take place
    //   transition={{duration:5}}
      ></motion.div>
    </main>
  )
}
