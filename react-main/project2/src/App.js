import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react"; 
import { nanoid } from "nanoid"; 
 


function App(props) {
  const btnList = props.filters.map((filter) => <FilterButton id={filter.id} name={filter.name} key={filter.id} />);
  const remTasks = props.tasks.filter((task) => !task.completed).length;
  const completedTasks = props.tasks.filter((task) => task.completed).length;
  const allTasks = props.tasks.length;
  const [tasks, setTasks] = useState(props.tasks); 
  const [filter, setFilter] = useState("Toutes");

  function FilterButton(props) { 
    return ( 
    <button 
    type="button" 
    className="btn toggle-btn" 
    onClick={() => props.setFilter(props.name)}> 
    <span className="visually-hidden">Montrer </span> 
    <span>{props.name}</span> 
    <span className="visually-hidden"> Tâches</span> 
    </button> 
    ); 
   } 
   
     const FILTER_MAP = { 
      Toutes: () => true, 
      Actives: (task) => !task.completed, 
      Terminées: (task) => task.completed, 
     }; 
     const FILTER_NAMES = Object.keys(FILTER_MAP); 
     // vous devez utiliser name comme prop dans le composant FilterButton pour le texte du bouton
      
     const filterList = FILTER_NAMES.map((name) => ( 
      <FilterButton 
      key={name} 
      name={name} 
      setFilter={setFilter} 
      /> 
     ));
     // vous devez utiliser name comme prop dans le composant FilterButton pour le texte du bouton
     const taskList = tasks 
     .filter(FILTER_MAP[filter]) 
     .map((task) => ( 
     <Todo 
     id={task.id} 
     name={task.name} 
     completed={task.completed} 
     key={task.id} 
     toggleTaskCompleted={toggleTaskCompleted} 
     deleteTask={deleteTask} 
     editTask={editTask} 
     /> 
     ))
    function addTask(name) {
      const newTask = { id: `todo-${nanoid()}`, name, completed: false }; 
      setTasks([...tasks, newTask]);
     }
     function deleteTask(id) {
      const remainingTasks = tasks.filter((task) => id !== task.id);
      setTasks(remainingTasks);
     } 
     function editTask(id, newName) { 
      const editedTaskList = tasks.map((task) => { 
      // if this task has the same ID as the edited task 
      if (id === task.id) { 
      // 
      return { ...task, name: newName }; 
      } 
      return task; 
      }); 
      setTasks(editedTaskList); 
     }  
    
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {btnList}
        {filterList}
      </div>
      <table>
      <thead>
          <tr>
            <th>Tâches terminées</th>
            <th>Tâches restantes</th>
            <th>Total de tâches</th>
          </tr>
        </thead>
        <tbody>
      <tr>
        <td>{completedTasks}</td>
        <td>{remTasks}</td>
        <td>{allTasks}</td>
      </tr>
      </tbody>
      </table>

      <ul
        role="list"
        className="todo-list stack-large stack-exception">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
