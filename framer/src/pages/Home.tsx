import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <main className="bg-[#242424] h-[92vh] w-screen overflow-hidden flex flex-col justify-center items-center ">
      <Link className='text-white text-2xl hover:underline' to={'/exit'}>Exit Animations</Link>
      <Link className='text-white text-2xl hover:underline' to={'/Keyframes'}>Keyframes Animations</Link>
      <Link className='text-white text-2xl hover:underline' to={'/Gesture'}>Gesture  Animations</Link>
      <Link className='text-white text-2xl hover:underline' to={'/Staggered'}>Staggered  Animations</Link>
      <Link className='text-white text-2xl hover:underline' to={'/layout'}>Layout Animations</Link>
      <Link className='text-white text-2xl hover:underline' to={'/staggerChildren'}>staggerChildrens Animations</Link>
    </main>
  )
}
