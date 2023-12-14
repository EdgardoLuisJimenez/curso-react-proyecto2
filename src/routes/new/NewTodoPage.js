import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const { stateUpdaters } = useTodos()
    const { addTodo } = stateUpdaters

    return (
        <TodoForm
            label="Escribe tu nuevo TODOs"
            submitText="Anadir"
            submitEvent={(text) => addTodo(text)} />
    )

}

export { NewTodoPage }