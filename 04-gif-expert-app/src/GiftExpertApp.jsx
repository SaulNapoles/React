import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    console.log('Demon Slayer');
    setCategories( [ 'Demon Slayer', ...categories] );
  }

  return (
    <>
      {/* {titulo} */}
      <h1>GifExpertApp</h1>

      {/* {input} */}
      <AddCategory/>

      {/* {Listado de Gif} */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={ category }> { category } </li>;
        })}
        {/* <li>ABC</li> */}
      </ol>
      {/* {Gif Item} */}
    </>
  );
};