import { MdDelete } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

const Item = (props) => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="my-1 mx-2 flex flex-wrap justify-center space-x-4">
      <button
        className="text-headingColor"
        onClick={() => {
          settoggle(!toggle);
        }}>
        {toggle ? (
          <IoCheckbox size={30} />
        ) : (
          <MdCheckBoxOutlineBlank size={30} />
        )}
      </button>
      <div className=" border  bg-bgColor  border-headingColor rounde m-1 p-2 w-9/12 ">
        <h1>{props.item}</h1>
      </div>
      <button onClick={()=>{props.remove(props.id);}} className="text-headingColor">
        <MdDelete size={30} />
      </button>
    </div>
  );
};

export default Item;
