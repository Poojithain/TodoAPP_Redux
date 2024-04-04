import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './Actions';
import TodoList from './TodoList';

export default function App() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');

  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle
      };
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginBottom:700 ,marginLeft:550}}>
      <h3>This is Todo Application using Redux</h3>
      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder='Add you todos here...'
          value={todoTitle} 
          onChange={(e) => setTodoTitle(e.target.value)} 
          style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <button style={{backgroundColor:'green', marginLeft:20}}onClick={handleTodo}>Add</button>
      </div>
      <TodoList />
    </div>
  );
}
