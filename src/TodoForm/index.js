import React from "react"
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {openModal,openModalFunction,addTodo} = React.useContext(TodoContext);
    const onSubmit = (event)=>{
        event.preventDefault();
        openModalFunction(openModal);
        addTodo(newValue);
    }
    const onCancel = (event) => {
        openModalFunction(openModal)
      }

    const [newValue,setNewValue] = React.useState('');

    const onChange = (event) => {
        setNewValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla"
                value={newValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm }