import React, { useState } from 'react';
function Form() {
const [id, setId] = useState('');
const [data, setData] = useState([]);
const handleChange = (event) => {
setId(event.target.value);
};
const rechercher = () => {
fetch(`https://localhost:3001/etudiants/${id}`)
.then(response => response.json())
.then(data => setData(data))
.catch(error => console.error('Erreur :', error));
}
return (
<div>
<h1>Search Form</h1>
<form>
<label>
ID Etudiant:
<input
type="number"
value={id}
onChange={handleChange}
/>
</label>
<button type="button" onClick={rechercher}>
Rechercher
</button>
</form>
<div>
<div>
<p>Nom: {data.name}</p>
</div>
</div>
</div>
);
}
export default Form;



