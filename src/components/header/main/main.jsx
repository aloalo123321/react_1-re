import React from "react";
import "./Main.css";

const Main = () => {
  const items = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];

  return (
    <div className="main">
      {items.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
