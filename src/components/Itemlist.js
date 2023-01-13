import React from 'react'

const Itemlist = ({data,uniqueKey,clearList,index}) => {

  return (
    <div key={uniqueKey}>
      <h1>{data}</h1>
      <button>Edit</button>
      <button onClick={()=>clearList(index)}>Delete</button>
    </div>
  )
}

export default Itemlist
