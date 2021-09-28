import { useState } from "react";
import produce from "immer";

function App() {
  const initTodo = [
    { id: 1, title: "React勉強会の資料作成", isDone: false },
    { id: 2, title: "React勉強会でプレゼンする", isDone: false },
  ];
  const [todo, setTodo] = useState(initTodo);

  const changeIsDone = (index) => {
    setTodo((prev) => {
      const next = prev.map((todo, i) => {
        if (i !== index) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      });
      return next;
    });
  };

  const immerChangeIsDone = (index) => {
    setTodo((prev) =>
      produce(prev, (draft) => {
        draft[index].isDone = !prev[index].isDone;
      })
    );
  };
  return (
    <ul>
      {todo.map((todo, index) => (
        <li key={index}>
          {todo.title} {todo.isDone ? "完了" : "未完了"}
          <button onClick={() => changeIsDone(index)}>変更</button>
          {/* <button onClick={() => immerChangeIsDone(index)}>変更</button> */}
        </li>
      ))}
    </ul>
  );
}

export default App;
