import './character-component-style.css'
import {FC, ReactNode} from "react";
import {ICharacter} from "../../models/ICharacter.ts";

type MyPropsType = {
    character: ICharacter,
    children: ReactNode
}

export const CharacterComponent: FC<MyPropsType> = ({character, children}) => {
    return (
        <div className='border-y-4 border-purple-500'>
            <h3>{character.name} {character.surname}. age: {character.age}</h3>
            <p>info: {children}</p>
            <img src={character.photo} alt={character.name}/>
        </div>
    );
};