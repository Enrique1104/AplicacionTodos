import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const { showTodosFilter,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!error && !loading && showTodosFilter.length === 0) && <TodosEmpty />}
        {showTodosFilter.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export { AppUI };