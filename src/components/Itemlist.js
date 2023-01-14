import React from 'react'

const Itemlist = ({data,uniqueKey,clearList,index}) => {

  return (
    <div key={uniqueKey} className="item">
      <h4>{data}</h4>
      {/*<button>Edit</button>*/}
      <button onClick={()=>clearList(index)}>Delete</button>
    </div>
  )
}

export default Itemlist
