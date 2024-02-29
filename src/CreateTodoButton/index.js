import React from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {openModal,openModalFunction} = React.useContext(TodoContext);
    return (
      <button className="CreateTodoButton" 
      onClick={(event) => {
        openModalFunction(openModal)
      }} >+</button>
    );
  }

  export {CreateTodoButton};