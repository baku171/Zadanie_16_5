import React from 'react';
import style from './TodoList.css'

const TodoList = props => {
    return (
        <ol className={style.TodoList}>
            {props.dataList.map(item => <li key={item.id} onClick={() => props.removeTodo(item.id)}>{item.text}</li>)}
        </ol>
    );
}

export default TodoList;