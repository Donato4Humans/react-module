import {ITodo} from "./ITodo.ts";

export interface ITodoResponse {
    todos: ITodo[];
    total: number;
    skip: number;
    limit: number;
}