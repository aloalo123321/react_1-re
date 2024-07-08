const App = () => {
  const names = [
    "fiona",
    "mamarda",
    "kupre",
    "mindia",
    "xuna",
    "kvara",
    "Giorgi",
    "levani",
    "vano",
    "saba",
  ];

  const forIndex = Math.floor(Math.random() * names.length);
  const RName = names[forIndex];
  return <div>Hello, {RName}</div>;
};

export default App;
