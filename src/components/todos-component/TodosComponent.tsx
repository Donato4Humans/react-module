import {ITodo} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";
import {getTodos} from "../../services/api.service.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos().then(value => {
            setTodos(value);
        });

        return () => {
            console.log('done fetch');
        };
    }, []);


    return (
        <div>
            {todos.map(value => <TodoComponent key={value.id} todo={value}/>)}
        </div>
    );
};

export default TodosComponent;