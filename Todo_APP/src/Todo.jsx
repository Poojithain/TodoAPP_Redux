import  { useState } from 'react';
import { editTodo,delTodo } from './Actions';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line react/prop-types
function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title); // Changed to camelCase for consistency
  const dispatch = useDispatch(); // Added parentheses to call useDispatch

  function handleTodo() {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  }
  function handleDel(){
    dispatch(delTodo({id:id}))
  }

  return (
    <div>
      {editing ? (
        <div>
          <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button onClick={handleTodo}>Save</button> 
        </div>
      ) : (
        <li>
          <p>{title}</p>
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={handleDel}>DELETE</button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;
