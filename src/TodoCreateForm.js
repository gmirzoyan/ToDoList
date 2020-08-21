import React, {useState} from 'react';


function TodoCreateForm(props) {


    const [inputValue, setInputValue] = useState('');

    const inputOnChange = (e) => {
        setInputValue(e.target.value)
    };

    const onCreate = () => {
        props.create(inputValue);
        setInputValue('')
    }

    return (
        <div>
            <br/>
            <h5>Add New Item:</h5>
            <input className="form-inline navbar navbar-light sm-light" value={inputValue} onChange={inputOnChange}/>
            <button type="button" className="btn btn-success m-2" onClick={() => onCreate(inputValue)}> Create</button>
        </div>
    );
}

export default TodoCreateForm;
