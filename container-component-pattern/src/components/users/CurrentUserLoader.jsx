import axios from "axios";
import React, { useState, useEffect } from "react";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/current-user");
        setUser(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching current user:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  console.log("CurrentUserLoader", { user, loading, error });

  if (loading) {
    return <div>Loading current user...</div>;
  }

  if (error) {
    return <div>Error loading user: {error}</div>;
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Pass the user prop to the child component
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
