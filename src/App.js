import React, {useEffect, useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoCreateList from "./TodoCreateList";
import axios from 'axios';


function App() {

    // const initialList = [
    //     {id: 1, name: 'do the homework', done: false},
    //     {id: 2, name: 'walk with dog', done: false},
    //     {id: 3, name: 'prepare the presentation', done: false}
    // ]

    const [list, setList] = useState([])

    const create = async (title) => {

      await axios.post('http://localhost:5000/todo', {name:title})
            .then(function (response) {
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


      await axios.get('http://localhost:5000/todo')
                .then(function (response) {
                    const listFromServer = response.data
                    console.log(listFromServer);
                    setList(listFromServer)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });


        // const newItem = {
        //     _id: Math.random() * 10,
        //     title: title,
        //     done: false,
        // }

        // const updatedList = [...list, newItem];
        // setList(updatedList);

    }

    const update = async (id, name) => {
        await axios.patch(`http://localhost:5000/todo/${id}`, {'name': name})
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        // const newList = list.map(el => {
        //     if (el._id === id) {
        //         el.title = title;
        //     }
        //     return el;
        // })
        // setList(newList);
    }

    const handleDone = async (id, done) => {

        await axios.put(`http://localhost:5000/todo/${id}`, {'done': done})
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        // const newList = list.map(el => {
        //     if (el._id === id) {
        //         el.done = done;
        //     }
        //     return el;
        // })
        // setList(newList);
    }

    const deleteItem = async (id) => {
        // const delList = list.filter(el => el._id !== id);
        // setList(delList);
        await axios.delete(`http://localhost:5000/todo/${id}`)
            .then(function (response) {

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:5000/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    },[])

    return (
        <div className="d-flex justify-content-center">
            <h3>TodoList</h3>
            <TodoCreateForm create={create}/>
            <TodoCreateList list={list} deleteItem={deleteItem} handleDone={handleDone} update={update}/>

        </div>
    );
}

export default App;
