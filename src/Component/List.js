import { useState } from "react";
import Item from "./Item";
const List =(props)=>{
    const item =props.data.map((singleData,key)=>{
        return (
          <Item
            remove={props.remove}
            key={key}
            id={key}
            item={singleData.item}
          />
        );
    })
    return (
      <div className="m-2 p-2">
       {item}
      </div>
    );
}

export default List;