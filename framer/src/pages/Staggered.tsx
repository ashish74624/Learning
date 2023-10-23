import { motion } from "framer-motion";
export default function Staggered() {

    const variant ={
        initial :{opacity:0, y:100},
        animate :{opacity:1,y:0}
    }
    const data = [
        { id: 1, heading: "Apple", subheading: "Red" },
        { id: 2, heading: "Banana", subheading: "Yellow" },
        { id: 3, heading: "Orange", subheading: "Citrus" },
        { id: 4, heading: "Grape", subheading: "Purple" },
        { id: 5, heading: "Strawberry", subheading: "Sweet" },
        { id: 6, heading: "Blueberry", subheading: "Small" },
        { id: 7, heading: "Cherry", subheading: "Tart" },
        { id: 8, heading: "Pineapple", subheading: "Tropical" },
        { id: 9, heading: "Mango", subheading: "Exotic" },
      ];
      

  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll text-white text-2xl ">
        <h1 className="my-4 mx-4">Staggered Animations</h1>
        <div className=" w-screen h-[90vh] bg-gray-300 grid place-content-center text-gray-800">
        Scroll Down for "Staggered Animations"
      </div>
        <div className="grid grid-cols-3 w-[520px] mx-auto place-content-center gap-4 mt-4 mb-10">

        {data.map((item,index) => (
            <motion.div className=" bg-blue-300 h-40 w-40 rounded-lg text-sm grid place-content-center " key={item.id}
            variants={variant}
            initial="initial"
            // animate="animate" -- if we do this the animation occurs as soon the website loads 
            whileInView="animate"
            viewport={{
                once:true // Insures the animation doesn't happen in scroll up
            }}
            transition={{ duration:1.1, delay: index * 0.1 }}
            >
                <h2>{item.heading}</h2>
                <p>{item.subheading}</p>
            </motion.div>
        ))}
        </div>
    </main>
  )
}
