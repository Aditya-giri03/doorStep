import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "./Catagories";
const Category_container = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getproducts").then((response) => {
      setItems(response.data);
    });
  }, []);

  const obj = {};
  items.map((detail) => {
    if (obj[detail.categories]) {
      obj[detail.categories].push(detail);
    } else {
      obj[detail.categories] = [detail];
    }
  });
  return (
    <div>
      <Categories categories={obj} />
    </div>
  );
};

export default Category_container;
