import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <TodoForm
            label="Escribe tu nuevo TODOs"
            submitText="Anadir"
            submitEvent={() => console.log("Llamar a addtodo")} />
    )

}

export { NewTodoPage }