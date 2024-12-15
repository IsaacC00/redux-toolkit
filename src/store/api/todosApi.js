//? Que es RTK Query Overview
//? esta herramieta no sustituye a axios ni fetch, 
//? lo que nos ayuda es hacer peticiones en caso de tener 
//? informacion almacenada en chace, 

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({

    reducerPath:'todos',
    //? la url base a la cual se hace la peticion
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),

    //? endpoint para traer la informacion 
    //? /todos => en este caso
    endpoints:(builder) => ({

        getTodos:builder.query({
            query: () => '/todos'
        }),

        getTodo:builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
        
    })

});

//? regresamos un customHook OJO
//? tine toda la infromacion necesario 
//? para saber si esta cargando, si tiene errores, si tiene informacion. etc
export const {useGetTodosQuery, useGetTodoQuery} = todoApi;


