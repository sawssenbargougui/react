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

   const taskList = tasks.map((task) => (
    <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    deleteTask={deleteTask}  

    />
   )); 
   function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }; 
    setTasks([...tasks, newTask]);
   }
   function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
   } 
   
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {btnList}
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
