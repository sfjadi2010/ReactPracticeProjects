import React, { useState, useEffect } from "react";

const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setResource(data);
      } catch (error) {
        console.error(`Error fetching ${resourceName}:`, error);
      }
    })();
  }, [getData, resourceName]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default DataSource;
