import React from 'react';
import './TodosError.css'

function TodosError({searchValue,setSearchValue}) {
    return (
      <input placeholder="Cortar Cebolla" className="TodosError"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}/>
    );
  }

  export {TodosError};