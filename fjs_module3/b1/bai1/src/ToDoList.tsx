type Todo = {
  id: string;
  title: string;
  done: boolean;
};

type TodoListProps = {
  todos: Todo[];
};

export default function ToDoList({ todos }: TodoListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.done ? "Xong" : "Chưa xong"}
          </li>
        ))}
      </ul>
    </>
  );
}
