import { motion } from "framer-motion"

export default function Keyframes() {
  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-hidden text-white text-2xl ">
        <ol className=" space-y-2 px-4 divide-y-2">
            <li>
                <h2>initial=&#123; x:0&#125;
                animate =&#123;x:[0,300,0]&#125;</h2>
                <motion.div className="bg-white h-52 w-52 shadow-[0_3px_10px_rgb(40,50,40,0.2)] rounded-lg"
                initial={{x:0}}
                animate={{x:[0,300,0]}}>
                </motion.div>
            </li>
            <li>
                <h2>animate=x: [null, 100, 0]</h2>
                <motion.div className="bg-white h-52 w-52 shadow-[0_3px_10px_rgb(40,50,40,0.2)] rounded-lg"
                initial={{x:0}}
                animate={{x:[null, 300, 0]}}>
                </motion.div>
                <h2>This way, if a keyframes animation starts while the value is currently animating, the transition will be more natural. It also reduces duplication in our code.</h2>
            </li>
      </ol>
    </main>
  )
}
