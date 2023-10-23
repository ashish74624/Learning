import { motion } from "framer-motion"

export default function Gesture () {
  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll text-white text-2xl ">
        <h1 className="mx-4 mt-2">Gestures - hover, tap, drag, focus and inView:</h1>
      <ol className=" space-y-2 px-4 divide-y-2">
        <li className="">
            <h2>whileTap</h2>
            <motion.button className="bg-white rounded-lg px-4 py-2 text-black"
            whileTap={{scale:1.5}}
            >
                click
            </motion.button>
        </li>
        <li className="">
            <h2>whileHover</h2>
            <motion.button className="bg-white rounded-lg px-4 py-2 text-black"
            whileHover={{scale:1.5}}
            >
                click
            </motion.button>
        </li>
        <li className="">
            <h2>whileFocus</h2>
            <motion.button className="bg-white rounded-lg px-4 py-2 text-black mb-4"
            whileFocus={{scale:1.5}}
            >
                click
            </motion.button>
        </li>
      </ol>
      <div className=" w-screen h-[80vh] bg-gray-300 grid place-content-center text-gray-800">
        Scroll Down for "whileInView"
      </div>
      <h2 className="mx-4 mt-6">whileInView</h2>
      <motion.div className="my-40 w-80 mx-auto h-80 rounded-lg bg-white"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}
      >
      </motion.div>
      
    </main>
  )
}
