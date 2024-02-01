import { useState } from 'react';
import App from './App';

function Supprimer() {
  const [inputValue, setInputValue] = useState('');
  const [msg, setMsg] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io///etudiants`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: inputValue }),
    })
      .then(response => response.json())
      .then(updatedData => {
        setInputValue('');
        setMsg(`${inputValue} supprimé`);
      })
      .catch(error => {
        console.error('Error Suppression etudiant:', error);
        setMsg('Error Suppression etudiant');
      });
  };

  return (
    <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#444', marginBottom: '20px' }}>Supprimer </h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="ID à supprimer" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#ff0000', color: 'white', cursor: 'pointer' }}> Supprimer </button>
      </form>
      <p>{msg}</p>
      <App />
    </div>
  );
}

export default Supprimer;
