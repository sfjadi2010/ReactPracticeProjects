import React from "react";

const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  console.log("UserInfo", user);
  return user ? (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Country:</strong> {country}
      </p>
      <h3>Books:</h3>
      <ul>
        {books && books.map((book, index) => <li key={index}>{book}</li>)}
      </ul>
    </div>
  ) : (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default UserInfo;
