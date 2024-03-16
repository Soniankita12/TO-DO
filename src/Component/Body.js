import { useState } from "react";
import Input from "./Input";
import List from "./List";

const Body = ()=>{
  const [toDo,settoDo] =useState([]);
  const removeToDo =(id)=>{
    console.log(id);
    const newtoDo=toDo.filter((d,index)=>{
      if(index!==id)
      {
        return true;
      }
      else{
        return false;
      }
      
    })
    settoDo(newtoDo);
  }
  const addToDoHandler = (item) =>{
   settoDo([...toDo,{item}]);
  }
    return (
      <div className=" mx-auto my-4  border border-inherit rounded-lg bg-btntextColor min-h-[600px] max-w-[600px]">
        <Input handler={addToDoHandler} />
        <List data={toDo} remove={removeToDo} />
      </div>
    );
}
export default Body;