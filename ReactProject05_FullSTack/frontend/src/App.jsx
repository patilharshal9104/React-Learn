import { useEffect } from "react";

const App = () => {
  async function getData() {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    console.log("Connect ho gaya", data);
  }
  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default App;
