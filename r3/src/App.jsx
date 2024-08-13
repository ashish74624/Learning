import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [products,setProducts] = useState([]);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages]=useState(0);

  

  const handlePage = (selectedPage)=>{
    if(selectedPage>=1 && selectedPage<=totalPages){
      setPage(selectedPage);
    }
  }

  useEffect(()=>{
    const fetchData = async()=>{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await res.json();
    console.log(data)
    
    setProducts(data.products);
    setTotalPages(Math.trunc(data.total/10 ));
  }
    fetchData();
  },[page])

  return (
    <>
    <section className='grid grid-cols-3 gap-4 w-max mx-auto'>
      {products.map((prod)=>(
        <div className='p-4 rounded-md bg-blue-950 w-64 h-64' key={prod.id}>
          <img src={prod.thumbnail} className='w-full h-40 rounded' alt={prod.title} />
          <p className='mt-2 rounded-full w-full py-2 bg-white text-black font-semibold'>{prod.title}</p>
        </div>
      ))}
    </section>
    {
      products.length>0 && (
        <div className='w-full'>
          <button onClick={()=>{handlePage(page-1)}}>⬅️</button>
          {[...Array(totalPages)].map((_,i)=>(
            <button onClick={()=>{handlePage(i+1)}} className={` ${page===i+1 ?'bg-blue-500 text-white':'bg-white text-black'}  px-2 py-1 rounded mx-4`} key={i}>{i+1}</button>
          ))}
          <button onClick={()=>{handlePage(page+1)}}>➡️</button>
        </div>
      )
    }
      </> 
  )
}

export default App
