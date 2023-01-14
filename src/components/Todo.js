import React from 'react'
import Additem from './Additem';
import Itemlist from './Itemlist';

const Todo = () => {
  const [list,updateList] = React.useState(["H!","SHUBH"]); 
  const clearList = (ind) => {
    let arr = list;
    arr.splice(ind,1);
    updateList([...arr]);
  };
  return (
    <div className='todo'>
      {
        list.map((data,index) => (
          <Itemlist data={data} uniqueKey={index.toString()} clearList={(index)=>clearList(index)} index={index}/>
        ))
      }
      <Additem modifyList={(val)=>updateList([...list,val])}/>
    </div>
  )
}

export default Todo
