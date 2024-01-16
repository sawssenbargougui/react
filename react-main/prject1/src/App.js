import './App.css';

function App(props) {
  const nom = props.nom;
  const age = props.age;
  return (
    <div className="App">
      <p>Votre nom {nom}</p>
      <p>Votre age {age} </p>
    </div>
  );
}

export default App;
