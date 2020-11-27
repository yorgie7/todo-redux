
const initialState = { data : [], };

export const todos = (state = initialState, action) =>
{
    switch (action.type){
        case "ADD_TODO":
            if(action.message !== "")
           {return {...state,
            data : [...state.data, {
                message : action.message,
                id: action.id,
            }]
            }} else{return {...state}}

        case "DELETE_TODO":
            const todos = state.data.filter(todo => todo.id !== action.id);

            return {...state,
                data : todos
            }
           ;
    
        default: return state;
    }
};
