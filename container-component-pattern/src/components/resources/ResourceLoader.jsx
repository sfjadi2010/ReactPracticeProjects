import axios from "axios";
import React, { useState, useEffect } from "react";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(resourceUrl);
        setResource(response.data);
      } catch (error) {
        console.error(`Error fetching:`, error);
      }
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
      })}
    </>
  );
};

export default ResourceLoader;
