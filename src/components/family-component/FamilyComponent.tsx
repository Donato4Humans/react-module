import {simpsons} from "../../data/familyList.ts";
import {ICharacter} from "../../models/ICharacter.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
            <div className='flex flex-col gap-3'>
                {
                    simpsons.map((character:ICharacter, index) => {
                       return <CharacterComponent key={index} character={character} >
                           {character.info}
                           </CharacterComponent>;
                    })
                }
            </div>
    );
};