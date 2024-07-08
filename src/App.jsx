import React from "react";
import "./App.css";
const App = () => {
  const items = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];
  return (
    <main>
      {items.map((item) => (
        <div className="card">
          <h1 className="title">{item.title}</h1>
          <p className="description"> {item.description}</p>
        </div>
      ))}
    </main>
  );
};

// const App = () => {
//   const array = [1, 2, 3, 4, 5];
//   const array2 = ["1", "2", "3"];
//   const array3 = [null, undefined, 1, true, false, 2, 0];
//   const array4 = [
//     {
//       firstname: "john",
//       lastname: "doe",
//     },
//     {
//       firstname: "john",
//       lastname: "doe",
//     },
//   ];
//   const Are = [];
//   for (let i = 0; i < array4.length; i++) {
//     let obj = array4[i];
//     Are.push(<div>{obj.firstname}</div>);
//   }
//   const arrayjsx = [<h1>1</h1>, <h1>2</h1>];

export default App;
