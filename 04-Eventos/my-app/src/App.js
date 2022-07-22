import React from 'react';

const App = () => {

  function handleClick(event){

    console.log(event.target);
  }

  
  return (

    <div className="btn-group">

<button className="btn btn-outline-primary" onClick={handleClick} onMouseMove={handleClick}>

  Clique

</button>

<button  className="btn btn-outline-primary" onClick={(event) => alert(event.target.innerText)}>

  Compre violão

</button>

</div>

  );
};

export default App;
