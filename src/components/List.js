import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";

const List = (props) => {
  console.log(props);
  return (<>
  
    {
      props.myTodos.length>0 ?
    (<div className="container mx-auto border-black border-solid border-2">

        {props.myTodos.map((todo, index) => (
         <div class="flex mb-4 items-center" key={todo.id}>
         <p class="w-full text-grey-darkest">{todo.message}</p>
         <button
          class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green hover:bg-green" onClick={() => props.dispatch(deleteTodo(todo.id))}>
            Done
            </button>
         
         </div>
  
        
        ))}
  
    </div>) : (<p class="w-full text-grey-darkest my-4 mx-0">Enter todo...</p>)
    }
    </>
  );
};

const mapStateToProps = (state) => ({
  myTodos: state.todos.data,
});

export default connect(mapStateToProps)(List);

// <div className="container mx-auto">
// <ul>
//   {props.myTodos.map((todo, index) => (
//     <li
//       className="text-left text-white border-black border-dashed border-2 my-2 py-2 bg-gray-400 px-2"
//       key={index}
//     >
//       {todo.message}
//       <button
//         className="flex-2 bg-gray-50 ml-32 text-black px-2"
//         onClick={() => props.dispatch(deleteTodo(todo.id))}
//       >
//         Done
//       </button>
//     </li>
//   ))}
// </ul>
// </div>