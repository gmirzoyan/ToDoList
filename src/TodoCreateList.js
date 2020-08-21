import React from 'react';
import TodoItem from "./TodoItem";

function TodoCreateList(props) {

    return (

        <div className="container">
            <br/>
            <ol>
                {props.list.map(el => <li key={el.id}><TodoItem el={el} handleDone={props.handleDone} deleteItem={props.deleteItem} update={props.update}/></li>)}
            </ol>
        </div>
    );
}

export default TodoCreateList;
