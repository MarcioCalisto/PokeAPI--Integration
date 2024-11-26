import { useState } from 'react'
import './App.css'

function App() {
  const [getIMG, setIMG] = useState("")  
  const [getID, setUserID] = useState("")  

  const consultar = async (event) => {
    event.preventDefault(); 
    const resultado_api = await fetch(`https://pokeapi.co/api/v2/pokemon/${getID}`)
    const resultado_obj = await resultado_api.json();
    console.log(resultado_obj);

    setIMG(resultado_obj.sprites.front_default);
  }

  const receberID = (event) => {
    setUserID(event.target.value);
  }

  return (
    <div>
      {getIMG && <img src={getIMG} alt="Pokémon" />}

      <form className="d-flex" onSubmit={consultar}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar Pokémon"
          aria-label="Search"
          onChange={receberID}
        />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default App;