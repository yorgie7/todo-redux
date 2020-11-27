
import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = (props) => {
  const [todo , setTodo] =React.useState("");
  const updateTodo = (e) =>{
    e.preventDefault();
    setTodo(e.target.value);
  
  }
  return (
  <>
      <input onChange={updateTodo} className="shadow appearance-none border rounded py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" type="text" name="userInput" autoComplete='off' />
      <button onClick={()=>{props.dispatch(addTodo(todo));setTodo("")} } className="border-black hover:bg-white border-solid border-2 px-2 ml-4">Submit</button>
  </>);
};
export default connect()(AddTodo);


// import React from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../redux/actions";

// const AddTodo = (props) => {
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         let input = e.target.userInput.value;
//         props.dispatch(addTodo(input));
//         e.target.userInput.value = "";
//       }}
//     >
//       <input className="border-black border-dashed border-2" type="text" name="userInput" autoComplete='off' />
//       <button className="border-black hover:bg-white border-solid border-2 px-2 ml-4">Submit</button>
//     </form>
//   );
// };
// export default connect()(AddTodo);


// className="border-black border-dashed border-2"