import React, { useEffect, useState } from 'react'

const Todos = () => {
  // REST API URL:  https://jsonplaceholder.typicode.com/todos?_limit=6
  // REST API Client: Native Fetch API 
  // HTTP Method: GET

  const todosApiURL =  'https://jsonplaceholder.typicode.com/todos?_limit=6';
  const [todoList, setTodoList] = useState([]);

  useEffect( () => {
    const fetchTodos = async() => {
      const response = await fetch(todosApiURL);
      const responseInJSON = await response.json();
      
      setTodoList(responseInJSON); // updating the state
    }

    fetchTodos();
  }, []);

  return (
    <div style={{padding: '20px'}}>
      <h2>Todos</h2>
      { 
        todoList.map( (todo) => {
          return(
            <div key={todo.id} style={{borderBottom: 'solid 1px #ccc'}}>
              <p>#{todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.completed? 'Completed': 'Not Completed'}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Todos