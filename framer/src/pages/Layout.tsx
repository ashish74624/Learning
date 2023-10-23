import { motion  } from "framer-motion"
import {useState} from 'react'
export default function Layout() {
    const [open,setOpen] = useState(false)
  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll  text-2xl ">
        <h2 className="text-white my-2 underline mx-4">layout prop</h2>
      <motion.div layout className="mx-8 bg-white rounded-lg h-4 w-14"
      style={{height : open ? "500px":"45px"}}
      onClick={()=>{setOpen(!open)}}
      >
        <span>open</span> 
      </motion.div>
    </main>
  )
}
