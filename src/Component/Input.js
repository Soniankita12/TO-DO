import { FaPlusCircle } from "react-icons/fa";
import { useRef } from "react";
const Input = (props) => {
  const inputBox=useRef();
  const handleKeyPress = (event) => {
    if (event.key === "Enter" &&(inputBox.current.value !=='')) {
      event.preventDefault(); // Prevent form submission
      props.handler(inputBox.current.value);
      inputBox.current.value = "";
    }
  };
  return (
    <div className="my-2 mx-2 flex flex-wrap justify-center space-x-4 ">
      <input
        className=" bg-bgColor border border-headingColor rounded m-2 p-2 w-9/12"
        placeholder="Write here"
        type="text"
        ref={inputBox}
        onKeyDown={handleKeyPress}
      />
      <button
        className="text-headingColor"
        onClick={() => { if(inputBox.current.value !=''){
          props.handler(inputBox.current.value);
          inputBox.current.value = "";}
        }}>
        <FaPlusCircle size={30} />
      </button>
    </div>
  );
};
export default Input;
