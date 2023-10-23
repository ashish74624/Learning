import { useState} from 'react'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'

export default function Exit() {
    const [visible,setVisible] = useState(false)
  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-hidden ">
      <button className=' bg-white px-4 py-2 rounded-lg m-10 active:bg-gray-300' 
      onClick={()=>{setVisible(true)}}>
        click to appear
      </button>
      <button className=' bg-white px-4 py-2 rounded-lg m-10 active:bg-gray-300' 
      onClick={()=>{setVisible(false)}}>
        click to disappear
      </button>
      <AnimatePresence>
      {visible && (
        <motion.div
        className=' bg-white h-40 w-40 rounded-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>

        </motion.div>
      )}
      </AnimatePresence>
    </main>
  )
}
