import React from 'react'

const Additem = ({modifyList}) => {
  const[input,addinput] =React.useState("");

  return (
      <div className='input_field'>
        <input type="text" placeholder="Write a task" value={input} onChange={(e)=>addinput(e.target.value)}/>
        <button onClick={()=>modifyList(input)}>ADD</button>
      </div>
  )
}

export default Additem
