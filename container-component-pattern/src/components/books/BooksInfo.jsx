import React from "react";

const BooksInfo = ({ book }) => {
  const { title, author, price } = book || {};

  return (
    <>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Price: {price}</p>
    </>
  );
};

export default BooksInfo;
