import { Link } from "react-router-dom"


export default function Not_found() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
     404 Not found
     <Link to={'/'}>
        <button className="bg-blue-500 px-4 py-2 text-white">Go To Home Page</button>
     </Link> 
    </div>
  )
}
