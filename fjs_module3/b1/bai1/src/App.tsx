import ProductCard from "./ProductCard";
import UserCard from "./UserCard";
import ToDoList from "./ToDoList";
import MyButton from "./MyButton";

export default function App() {
  const todos = [
    { id: "1", title: "Ngủ", done: true },
    { id: "2", title: "Ăn", done: false },
  ];

  const handleClick = () => {
    console.log("Con vừa gọi cha");
  };
  return (
    <>
      <ToDoList todos={todos}></ToDoList>
      <MyButton onClick={handleClick}></MyButton>
    </>
  );
}
