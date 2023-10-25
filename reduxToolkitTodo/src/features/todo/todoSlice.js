import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id:1,
            text:"hellow world "
        }
    ]
}
 
export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers:{
            //property and fxn ati hai 
            addTodo: (state , action) => {
                const todo ={
                    // id: Date.now(),
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo);
            },
            removeTodo: (state , action ) => {
                state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload)
            }
        }
    }
);


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer