
import './App.css';
import ListasRenderizar from './Componentes/ListasRenderizar/index'



function App() {
 const meusItens= ['Carro','Avião','Moto']
  return (
    <>
<h1>Renderização de listas:</h1>
    <ListasRenderizar itens={meusItens}/>
    </>
  );
}

export default App;
