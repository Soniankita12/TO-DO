import { FaPlusCircle } from "react-icons/fa";

const Input = () => {
  return (
    <div className="my-2 mx-2 flex flex-wrap justify-center space-x-4 ">
      <input
        className=" bg-bgColor border border-inherit rounded m-2 p-2 w-9/12"
        placeholder="Write here"
        type="text"
      />
      <button>
        <FaPlusCircle size={30}/>
      </button>
    </div>
  );
};
export default Input;
