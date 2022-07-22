import React from 'react';
export default function Peso(props){
    return(
        <div>
            <p>caso a soma for maior ou menor que 3000 o resultado muda:</p>
            <h1>Informa o peso:{props.p}</h1>
            <input type="text" value={props.peso} onChange={(e)=>props.setPeso(e.target.value)} ></input>
        </div>
    );
}