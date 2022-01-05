import React from 'react';
export default function TodoList({ todos, onTodoClick = () => { } }) {
    return (
        <ul>
            {todos.map(
                (item, index) => <li key={item.id}
                    onClick={() => onTodoClick(index)}
                >{item.title}</li>
            )}
        </ul>
    )
}