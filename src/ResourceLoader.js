import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ResourceLoader = ({ resourceUrl, resourceName, slice, children }) => {
  const [currentData, setCurrentData] = useState([]);
  const dispatch = useDispatch();
  const carData = useSelector((state) => state.cars);
  const productData = useSelector((state) => state.products);

  useEffect(() => {
    if (resourceName === "cars") {
      setCurrentData(carData.carData);
    } else {
      setCurrentData(productData.productData);
    }
  }, [resourceName, carData, productData]);

  useEffect(() => {
    dispatch(slice(resourceUrl));
  }, [dispatch, resourceUrl, slice]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            [resourceName]: currentData,
          });
        }
      })}
    </>
  );
};

export default ResourceLoader;
