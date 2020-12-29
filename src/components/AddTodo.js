import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = (props) => {
  const [todo, setTodo] = React.useState("");

  const updateTodo = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
    console.log(e.target.name);
  };

  return (
    <>
    <form onSubmit={(e) => { e.preventDefault();
                    let input = e.target.userInput.value;
                    props.dispatch(addTodo(input));
                    e.target.userInput.value = "";
                  }}
    >

<input
        onChange={updateTodo}
        className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        placeholder="Add Todo here..."
        type="text"
        name="userInput"
        autoComplete="off"
      />
      <button
        className="hover:bg-white border-solid border-2 p-2 ml-2"
      >
        Submit
      </button>
    </form>

     
    </>
  );
};
export default connect()(AddTodo);


{/* <input className="border-black border-dashed border-2" type="text" name="userInput" autoComplete='off' /> */}
{/* <button className="border-black hover:bg-white border-solid border-2 px-2 ml-4">Submit</button> */}

// onClick={() => {
//   props.dispatch(addTodo(todo));
// }}