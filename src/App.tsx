import './App.css'
import {useState} from "react";
import {characters} from "./Characters.ts";
import CharacterGallery from "./components/CharacterGallery/CharacterGallery.tsx";

function App() {
  const [searchText, setSearchText] = useState("");

  const filteredCharacters =
      characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <>
      <input type="text" onChange={
        (event) => setSearchText(event.target.value)
      } placeholder="Search Character" />
      {
        filteredCharacters.length > 0 ? <CharacterGallery characters={filteredCharacters}/> : <p>No characters found!</p>
      }
    </>
  )
}

export default App
