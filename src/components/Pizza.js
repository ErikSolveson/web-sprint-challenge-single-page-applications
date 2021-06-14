import React from "react";

export default function Pizza(props) {
  const { name, toppings, size } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>toppings: {toppings}</p>
      <p>size: {size}</p>
    </div>
  );
}
