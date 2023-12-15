import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const { state, stateUpdaters } = useTodos()
    const { loading } = state
    const { addTodo } = stateUpdaters

    return (
        <TodoForm
            loading={loading}
            label="Escribe tu nuevo TODOs"
            submitText="Anadir"
            submitEvent={(text) => addTodo(text)} />
    )

}

export { NewTodoPage }