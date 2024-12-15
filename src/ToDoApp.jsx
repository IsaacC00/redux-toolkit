import { useGetTodosQuery, useGetTodoQuery } from "./store/api/todosApi"
import { useState } from "react";

export const ToDoApp = () => {

  
  //? : -> renombro la data
  // const {isLoading, data:todos = []} = useGetTodosQuery();
  //? customHook que permite la consulata de un todo por el id
  //? debemos de pasar como argumentp un id 
  //? para eloo creamos un useState para actualizar el id
  const [todoId, setTodoId] = useState(1);

  const {isLoading, data:todo} = useGetTodoQuery(todoId);

  const nextId = () => {
    setTodoId( todoId + 1 )
  }

  const prevId = () => {
    if ( todoId === 1 ) {
      return 
    }else{
      setTodoId( todoId - 1 )
    }
  }

  return (
    <>
        <h1>
            ToDo - RTK Query
        </h1>

        <hr />
        <h4>is Loading { isLoading? 'True': 'False' } </h4>
        <pre>{JSON.stringify(todo)}</pre>
        
        {/* <ul>
           {/* {
            todos.map(
              todo => (
                <li key={todo.id}>
                  <strong>{todo.completed? 'Done ':'Pending '}</strong>
                  {todo.title}</li>
              )
            )
          } 
        </ul> 
            */}
        

        <button
          onClick={ nextId }
        >
            Next ToDo
        </button>

        <button
          onClick={ prevId }
        >
            Prev ToDo
        </button>

    
    </>
  )
}
