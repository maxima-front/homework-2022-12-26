import { useState } from "react";

function Laptop() {
  const [brand, setBrand] = useState("Apple");
  const [model, setModel] = useState("Macbook Pro");
  const [year, setYear] = useState("2023");
  const [color, setColor] = useState("Space gray");

  return (
    <>
      <h1>My lapop is {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
