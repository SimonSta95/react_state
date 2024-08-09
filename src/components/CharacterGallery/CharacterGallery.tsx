import CharacterCard from "../CharacterCard/CharacterCard.tsx";
import {Character} from "../../types/characterType.ts";

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const cards = props.characters.map((character) => <CharacterCard key={character.name} character={character}/>);
    return (
        <div className="character-gallery">
            {cards}
        </div>
    );
}