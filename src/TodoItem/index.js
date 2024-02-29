import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem({ text, completed, onCompleted, onDeleted }) {
  return (
    <li className="TodoItem">
{/*       <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      onClick={onCompleted}
      >V {completed}</span> */}
      <CompleteIcon 
        completed={completed}
        onComplete = {onCompleted}
      />
      <p className={`TodoItem-p ${completed &&"TodoItem-p--complete"}`}>{text}</p>
      {/* <span className="Icon Icon-delete"
        onClick={onDeleted}
      >X</span> */}
      <DeleteIcon 
        onDelete = {onDeleted}
      />
    </li>
  );
}

export { TodoItem };