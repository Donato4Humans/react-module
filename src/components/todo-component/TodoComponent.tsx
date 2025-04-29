import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

type TodoPropsType = {
    todo: ITodo
}

const TodoComponent: FC<TodoPropsType> = ({todo:{id, todo, completed, userId}}) => {
    return (
        <div className='border-2 border-blue-500'>
            <h3>id: {id}, userId: {userId}</h3>
            <p>to_do: {todo} - done?: {completed + ''}</p>
        </div>
    );
};

export default TodoComponent;