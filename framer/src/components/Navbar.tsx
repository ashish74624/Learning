import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className=" bg-white w-screen h-[8vh]  shadow-[0_3px_10px_rgb(255,255,255,0.2)] py-2 px-6 overflow-hidden">
      <Link className='text-3xl text-rose-700 my-auto font-sans font-extrabold' to={'/'}>
        Framer Motion
      </Link>
    </nav>
  )
}
