import { useState } from "react";
function Calculatrice()
{
const [nb1,setNb1]=useState("");
const [nb2,setNb2]=useState("");
const [som,setSom]=useState("");
const [prod,setProd]=useState("");
const [isRendu1,setIsRendu1]=useState(true);
function handleChange1(e)
{
const n1=parseFloat(e.target.value);
setNb1(n1);
}
function handleChange2(e)
{
const n2=parseFloat(e.target.value);
setNb2(n2);
}
function calculer(e)
{
e.preventDefault();
setIsRendu1(false);
setSom(nb1+nb2);
setProd(nb1*nb2);
setNb1("");
setNb2("");
}
function refaire(e)
{
e.preventDefault();
setIsRendu1(true);
}
const rendu1 = (
<form onSubmit={calculer}>
<label>Nombre 1</label>
<input type="number"
value={nb1}
onChange={handleChange1}
/><br/>
<label>Nombre 2</label>
<input type="number"
value={nb2}
onChange={handleChange2}
/><br/>
<button type="submit">Calculer</button>
</form>
);
const rendu2 = (
<form onSubmit={refaire}>
<label>Somme</label>
<input type="number"
value={som}
/><br/>
<label>Produit</label>
<input type="number"
value={prod}
/><br/>
<button type="submit">Refaire</button>
</form>
);
return <div>{isRendu1? rendu1: rendu2}</div>
}
export default Calculatrice;