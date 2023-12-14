import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage() {
    const { id } = useParams()
    const { stateUpdaters } = useTodos()
    const { editTodo } = stateUpdaters


    return (
        <TodoForm
            label="Edita tu TODOs"
            submitText="Editar"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    )

}

export { EditTodoPage }