import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../redux/ducks/items";
import ItemCard from "../../ItemCard";
import Item from "../../Item";
const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const items = useSelector((state) => state.items.items);
  console.log(items);

  return (
    <div className="grid grid-cols-2 gap-5 homepage container mx-auto">
      <div className="page-title col-span-2 text-center mb-11">
        <h1 className="text-2xl text-blue-900 ">
          Welcome to the homepage for the e-commerce website
        </h1>
      </div>
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <Item {...item} />
          </div>
        ))}
    </div>
  );
};

export default Homepage;
