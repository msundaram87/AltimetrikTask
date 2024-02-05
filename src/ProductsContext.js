import React, { createContext, useContext, useState } from "react";

// Create a context with an initial value (empty object)
const ProductsContext = createContext({});

// Create a provider component to wrap the components that need access to the context
export const ProductsProvider = ({ children }) => {
  const [contextData, setContextData] = useState({});

  return (
    <ProductsContext.Provider value={{ contextData, setContextData }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Create a custom hook to simplify accessing the context
export const useProductsContext = () => useContext(ProductsContext);
