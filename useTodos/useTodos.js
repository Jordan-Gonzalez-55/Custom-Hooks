import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    const handleNewTodo = (todo) => {
      const action = {
        type: "[TODO] Add Todo",
        payload: todo,
      };
      dispatch(action);
    };
  
    const handleDeleteTodo = (id) => {
      dispatch({
        type: "[TODO] Remove Todo",
        payload: id,
      });
    };
  
    const handleToggleTodo = (id) => {
      const action = {
        type: "[TODO] Toggle Todo",
        payload: id,
      };
      dispatch(action);
    };
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
