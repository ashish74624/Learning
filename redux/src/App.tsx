import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store/store"
import { decrement,  incrementAsync,   } from "./store/counter/counterSlice";


function App() {

  const count = useSelector((state:RootState)=>state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className=" bg-gray-200 h-screen w-screen grid place-content-center">
      <div className="bg-white h-56 w-56 flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-6xl text-blue-400">{count}</h1>
        <div className="flex gap-2 mt-2">
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full" onClick={()=>{dispatch(incrementAsync(10))}} >Increment</button>
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full" onClick={()=>{dispatch(decrement())}} >decrement</button>
        </div>
      </div>
    </section>
  )
}

export default App
