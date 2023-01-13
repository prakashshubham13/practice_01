import React from 'react'

const Additem = ({modifyList}) => {
  const[add,toggleAdd] =React.useState(0);
  const[input,addinput] =React.useState("");

  return (
    <div>
      <div>
        <input type="text" placeholder="Write a task" value={input} onChange={(e)=>addinput(e.target.value)}/>
        <button onClick={()=>modifyList(input)}>+</button>
      </div>
    </div>
  )
}

export default Additem
