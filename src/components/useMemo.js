import { useState, useMemo } from "react";

//useMemo kaydedilmiş değeri döner
//eğer değerde bir değğişiklik yoksa tekrar hesaplama yapma fonskiyonunu çağırmaz
//useMemo returns a memoized value
//useCallback returns a memoized function.

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(() =>
        expensiveCalculation(count),
        [count] //bağımlı olduğu değer değişmeden  expensiveCalculation fonks. çalışmaz
    );

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div style={{ background: "red" }}>
            <h1>UseMemo Example</h1>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 100; i++) {
        num += 1;
    }
    console.log("Calculation Finished");
    return num;
};
 