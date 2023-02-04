import { useState, useCallback } from "react";
import Todos from "./Todos";
 
//bir bileşenin değeri değişmedikçe yeniden render etmez

//useMemo returns a memoized value
//useCallback returns a memoized function.

function UseCallBackEx() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  //todos değişkeni diğer fonskiyonlardan izole edildi böylece diğer funclar çalıştığında yani diğer componenetlerde bir değişiklik olduğunda eğer todos değişkenin bir değişiklik yoksa re-render edilmeyecek
  const addTodo = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos([...todos, "New Todo"]);
  // };

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default UseCallBackEx;
