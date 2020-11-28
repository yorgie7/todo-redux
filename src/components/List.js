import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";

const List = (props) => {
  
  return (<>
  
    {
      props.myTodos.length>0 ?
    (<div className="container border-black px-4 m-4 border-solid border-2">
        {
        props.myTodos.map((todoObj, index) => (
         <div class="flex mb-2 mt-2 items-center py-2 bg-gray-100" key={todoObj.id}>
         <li class="w-full text-left text-grey">{todoObj.todo}</li>
         <button
          class="flex-no-shrink text-green ml-2 px-2 py-1 mr-2 border-2 rounded hover:bg-white" onClick={() => props.dispatch(deleteTodo(todoObj.id))}>
            Done
            </button>
         
         </div>
        
        ))}
  
    </div>) : (<p class="w-full text-grey-darkest my-4 mx-0">Add Your todo...</p>)
    }
    </>
  );
};

const mapStateToProps = (state) => ({
  myTodos: state.todos.data,
});

export default connect(mapStateToProps)(List);