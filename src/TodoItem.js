import React, {useState} from 'react';

function TodoItem(props) {
    const {el, handleDone, deleteItem, update} = props;
    const [edit, setEdit] = useState(false);
    const [inputTitle, setInputTitle] = useState(el.title);

    const inputOnChange = e => {
        setInputTitle(e.target.value)
    };

    const handleEdit = () => {
        setEdit(true);
    }

    const onUpdate = (id) => {
        update(id, inputTitle);
        //setInputTitle('')
        setEdit(false);
    }

    if (edit) {
        return (
            <div>
                <input value={inputTitle} onChange={inputOnChange} />
                <button className="btn btn-outline-warning btn-sm m-2" onClick={() => {onUpdate(el.id)}}>Save</button>
            </div>
        );
    } else {
        return (
            <div>
                {(el.done) ? <del>{el.title}</del> : el.title}
                <button className="btn btn-outline-success btn-sm m-2" onClick={handleEdit}>Edit</button>
                {(!el.done) ? <button className="btn btn-outline-success btn-sm m-2"
                                      onClick={() => handleDone(el.id, true)}>Done</button> :
                    <button className="btn btn-outline-success btn-sm m-2"
                            onClick={() => handleDone(el.id, false)}>Undone</button>}
                <button className="btn btn-outline-success btn-sm m-2"
                        onClick={() => deleteItem(el.id)}>Delete
                </button>
            </div>
        )
    }

}

export default TodoItem;
