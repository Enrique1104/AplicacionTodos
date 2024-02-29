import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {completedTodos,totalTodos} = React.useContext(TodoContext);
    return (
      <h1 className='TodoCounter'>
        {totalTodos === 0 ? `Agrega un TODO para iniciar`:
          totalTodos === completedTodos ? `Felicidades completaste todos los TODOs`:
          `Has completado ${completedTodos} de ${totalTodos} TODOs`        
        }
      </h1>
    );
  }

  export {TodoCounter};