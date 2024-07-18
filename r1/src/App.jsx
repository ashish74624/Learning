import { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertItem } = useTraverseTree();

  const handleInsertion=(folderId,itemName,isFolder)=>{
    const finalTree = insertItem(explorerData,folderId,itemName,isFolder);
    setExplorerData(finalTree);
  }

  return (
    <section className='h-screen w-screen p-4 bg-zinc-900'>
      <Folder handleInsertion={handleInsertion} explorer={explorerData}/>
    </section>
  )
}

export default App
