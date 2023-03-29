import It = jest.It;

export interface ITodo {
    title: string;
    completed: boolean;
    id: number;
}

export interface ITodoState {
    todos: ITodo[];
    titleFilter: string;
}
