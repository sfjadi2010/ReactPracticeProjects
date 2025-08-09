import React from "react";

// eslint-disable-next-line no-unused-vars
const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      <div>{sourceName} List</div>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
