import 'bootstrap/dist/css/bootstrap.css';
import Buscador from './Componentes/buscador';
import Navbar from './Componentes/navbar';
import Personajes from './Componentes/personajes';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const url = 'https://rickandmortyapi.com/api';
  const [data, setData] = useState();
  const [dataCharacter, setDataCharacter] = useState(null);

  async function getData() {
    const dataRequest = await fetch(url);
    const dataJSON = await dataRequest.json();
    setData(dataJSON);
    setDataCharacter(dataJSON.characters);
  }

  useEffect(() => {
    getData();
  }, [dataCharacter]);
  return (
    <div className="App">
      <Navbar />
      <Buscador />
      <Personajes chraracters={dataCharacter} />
    </div>
  );
}

export default App;
