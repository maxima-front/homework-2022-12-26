import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
        // Добавить очистку таймера
        // Добавить console.log аналогичного метода!
    }
  });

  // Без параметров
  useEffect(() => {
    // выполнится на каждый рендер

    // Добавить console.log аналогичного метода!
  });

  // Пустой массив
  useEffect(() => {
    // Выполнится только на первый рендер

    // Добавить console.log аналогичного метода!
  }, []);
  
  // Массив зависимостей
  useEffect(() => {
    // Выполнится  на первый рендер
    // И на любые изменение зависимостей - здесь переменные props и state

    // Добавить console.log аналогичного метода!
  }, [prop, state]);



  return <h1>I've rendered {count} times!</h1>;
}
