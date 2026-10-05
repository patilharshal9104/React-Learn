import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    <div>
      <h1>Hello Harshal New project hh</h1>

      <Cart />

      <Cart name="Harshal" age={22} img="IShowSpeed.jpg" />

      <div>
        <img src="IShowSpeed.jpg" alt="IShowSpeed" />
      </div>
    </div>
  );
};

export default App;
