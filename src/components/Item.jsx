const Item = (props) => {
  const { title, price, category } = props;
  return (
    <div className="item">
      <h1>{`${title} ( ${price}) in the ${category}`}</h1>
    </div>
  );
};

export default Item;
