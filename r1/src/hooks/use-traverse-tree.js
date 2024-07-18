const useTraverseTree = () => {

    function insertItem(tree,folderId,itemName,isFolder) {
        if(tree.id === folderId && tree.isFolder ){
            tree.items.unshift(
                {
                    id: new Date().toLocaleString(),
                    name:itemName,
                    isFolder,
                    items:[]
                }
            )
            return tree;
        }

        let latestNode=[];
        latestNode = tree.items.map((obj)=>{
            return insertItem(obj,folderId,itemName,isFolder);
        })

        return {...tree,items:latestNode}

    }

    return { insertItem }
}

export default useTraverseTree;