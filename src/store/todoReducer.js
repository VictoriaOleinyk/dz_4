import axios from "axios"

const initialState = {
    todos: []
}

// export function deleteTodo(todoId) {
//     return async (dispatch) => {
//         // Удаляем заметку из внешнего источника данных
//         await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
//
//         // Диспатчим action для удаления заметки из состояния
//         dispatch({ type: 'DELETE_TODO', payload: todoId });
//     };
// }
const deleteTodoRequest = (id) => {
    return {
        type: 'DELETE_TODO_REQUEST',
        payload: id,
    };
};
export const deleteTodo = (id) => {
    return (dispatch) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                dispatch(deleteTodoRequest(id));
            })
    };
};



const todoReducer = (state = initialState, action) => {
    if (action.type == 'ADD_TODO') {
        // ... код добавления заметки ...
    } else if (action.type == 'REMOVE_TODO') {
        // ... код удаления заметки ...
    } else if (action.type == 'SET_TODOS') {
        // ... код установки заметок ...
    }
    else if (action.type == 'DELETE_TODO') {
        // Удаляем заметку из состояния по todoId
        const updatedTodos = state.todos.filter((id) => id !== action.payload);
        return { ...state, todos: updatedTodos };
    }

    return state;
};

export const fetchTodos = () => {
    return  async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(
                resp => dispatch({type: 'SET_TODOS', payload: resp.data})
            )
    }
}




export const addTodo = payload => ({type: "ADD_TODO", payload})

export default todoReducer
