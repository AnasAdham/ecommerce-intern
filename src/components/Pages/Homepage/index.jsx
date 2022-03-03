import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../redux/ducks/items";
import Item from "../../Item";
const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const products = [
    {
      name: "Item 1",
    },
    {
      name: "Item 1",
    },
    {
      name: "Item 1",
    },
  ];
  const items = useSelector((state) => state.items.items);
  console.log(items);

  return (
    <div className="grid grid-cols-5 gap-3 homepage container mx-auto">
      <div className="page-title col-span-5 text-center mb-11">
        <h1 className="text-2xl text-blue-900 ">
          Welcome to the homepage for the e-commerce website
        </h1>
      </div>
      {items &&
        items.map((item) => (
          <div>
            <Item {...item} />
          </div>
        ))}
    </div>
  );
};

export default Homepage;
