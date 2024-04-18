import React from 'react';
import Todo from "../../components/todo/Todo";
import styles from './TodosPage.module.css';

const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className={styles.container}>
            <h1>Todos Page</h1>
            <div className={styles.todoList}>
                {todos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default TodosPage;
