import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Exit from "./pages/Exit"
import Home from "./pages/Home"
import Keyframes from './pages/Keyframes'
import Navbar from "./components/Navbar"
import Gesture from "./pages/Gesture"
import Staggered from "./pages/Staggered"
import Layout from "./pages/Layout"
import StaggerChildren from "./pages/StaggerChildren"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exit' element={<Exit/>}/>
          <Route path='/Keyframes' element={<Keyframes/>}/>
          <Route path='/Gesture' element={<Gesture/>}/>
          <Route path='/Staggered' element={<Staggered/>}/>
          <Route path='/layout' element={<Layout/>}/>
          <Route path='/staggerChildren' element={<StaggerChildren/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
