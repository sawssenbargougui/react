

import React, { useState } from 'react';
function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(""); 
  function handleChange(e) { 
    setNewName(e.target.value); 
   }
   function handleSubmit(e) { 
    e.preventDefault(); 
    props.editTask(props.id, newName); 
    setNewName(""); 
    setEditing(false); 
   }
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Nouveau nom pour {props.name}
        </label>
        <input 
        id={props.id} 
 className="todo-text" 
 type="text" 
 value={newName} 
 onChange={handleChange} 
/>
      </div>

      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Annuler
          <span className="visually-hidden">renaming {props.name}</span>
        </button>

        <span className="visually-hidden">renommer {props.name}</span>

        <button type="submit" className="btn btn__primary todo-edit">
          Sauvegarder
          <span className="visually-hidden"> Nouveau nom pour {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Editer <span className="visually-hidden">{props.name}</span>
        </button>

        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Supprimer <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}

export default Todo;
