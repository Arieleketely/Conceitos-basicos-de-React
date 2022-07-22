import React from 'react';
export default function Total(props){
    return(
        <div>
            <h1>Total e resultado:{props.somaPeso}</h1>
            <p>{props.somaPeso>3000 ? "Passe pela estrada A - suporta peso" : "Passe pela estrada B -não suporta peso grande mais o seu veiculo suporta"}</p>

        </div>
    );
}