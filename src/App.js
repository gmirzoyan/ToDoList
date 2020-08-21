import React, {useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoCreateList from "./TodoCreateList";


function App() {

    const initialList = [
        {id: 1, title: 'do the homework', done: false},
        {id: 2, title: 'walk with dog', done: false},
        {id: 3, title: 'prepare the presentation', done: false}
    ]

    const [list, setList] = useState(initialList)

    const create = title => {
        const newItem = {
            id: Math.random() * 10,
            title: title,
            done: false,
        }

        const updatedList = [...list, newItem];
        setList(updatedList);

    }

    const update = (id, title) => {
        const newList = list.map(el => {
            if (el.id === id) {
                el.title = title;
            }
            return el;
        })
        setList(newList);
    }

    const handleDone = (id, done) => {
        const newList = list.map(el => {
            if (el.id === id) {
                el.done = done;
            }
            return el;
        })
        setList(newList);
    }

    const deleteItem = (id) => {
        const delList = list.filter(el => el.id !== id);
        setList(delList);
    }

    return (
        <div className="d-flex justify-content-center">
            <h3>TodoList</h3>
            <TodoCreateForm create={create}/>
            <TodoCreateList list={list} deleteItem={deleteItem} handleDone={handleDone} update={update}/>

        </div>
    );
}

export default App;
