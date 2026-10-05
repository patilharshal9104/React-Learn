const Cart = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.img} alt="IShowSpeed" />
      <h1>Reached to Cart</h1>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
};

export default Cart;
