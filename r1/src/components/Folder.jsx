// import React from 'react' 
import PropTypes from 'prop-types';
import { useState } from 'react';

const itemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFolder: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object) // Nested items will be objects
});

Folder.propTypes = {
  explorer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(itemShape).isRequired
  }).isRequired,
  handleInsertion : PropTypes.any.isRequired
};


export default function Folder({explorer,handleInsertion}) {

  const [expand,setExpand] = useState(false);
  const [showInput,setShowInput] = useState({
    visible:false,
    isFolder: null
  });

  const handleNewFolder = (e,isFolder)=>{
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible:true,
      isFolder 
    })
  }

  const addFolder =(e)=>{
    if(e.keyCode === 13 && e.target.value){
      handleInsertion(explorer.id,e.target.value,showInput.isFolder);
      setShowInput({...showInput,visible:false});
    }
  }

  if(explorer.isFolder){

    return (
      <div className=''>
      <div className='bg-gray-200 w-max px-4 py-2 rounded-md my-2' onClick={()=>setExpand(!expand)}>
        <span>
          📁 {explorer.name}
        </span>
        <button onClick={(e)=>{handleNewFolder(e,true)}} className=' ml-16 bg-blue-500 text-white px-2 py-1 rounded'>
          Folder+
        </button>
        <button onClick={(e)=>{handleNewFolder(e,false)}} className='ml-2 bg-blue-500 text-white px-2 py-1 rounded'>
          file+
        </button>
      </div>

      <div className='ml-4 ' style={{display : expand ?'block' : 'none'}} >

        {showInput.visible && (
          <div>
            <span>{showInput.isFolder ? '📁':'📄'}</span>
            <input type='text'
            onKeyDown={addFolder}
            onBlur={()=>{setShowInput({...showInput, visible:false})}}
            autoFocus
            />
          </div>
        )}

        {explorer.items.map((exp,i)=>(
          <Folder key={i} handleInsertion={handleInsertion} explorer={exp}/>
        ))}
      </div>

    </div>
    )
  }else{
    return <span className='text-red-500 flex flex-col'>📄 {explorer.name}</span>
  }
}
