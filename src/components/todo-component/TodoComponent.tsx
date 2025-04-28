import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

type TodoPropsType = {
    todo: ITodo
}

const TodoComponent: FC<TodoPropsType> = ({todo}) => {
    return (
        <div className='border-2 border-amber-200'>
             <h3>userId: {todo.userId}</h3>
             <p>postId: {todo.id}, title: {todo.title}, completed? : {todo.completed+''}</p>
        </div>
    );
};

export default TodoComponent;