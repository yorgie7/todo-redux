const initialState = { data: [], isEditing : false };

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.message !== "") {
        return {
          ...state,
          data: [
            ...state.data,
            {
              todo: action.message,
              id: action.id,
            },
          ],
        };
      } else {
        return { ...state };
      }

    case "DELETE_TODO":
      const todos = state.data.filter((todo) => todo.id !== action.id);
   
      return { ...state, data: todos };

    case "EDIT_TODO":
        
        const todos1 = state.data.filter((todo) => todo.id !== action.id);
        const editTodo = state.data.filter((todo) => todo.id === action.id)
    
        if (action.message !== "" || action.message !== editTodo.message) {
                return {...state, data : [...todos1 , {
        todo:  action.message  , id: action.id,
      }]};
      console.log('hgghghg');
    }
    else {
        return { ...state };
      }


    default:
      return state;
  }
};
