import React from "react"
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'
export default (props) => {
    return(
        <div>
                {props.todos.map((todo, i) => (
                     <ul key={i}>  
                        <TodoListItem todo={todo} receiveTodo={props.receiveTodo} /> 
                     </ul>
                ))}
                <TodoForm receiveTodo={props.receiveTodo} />
        </div>
    )
}


