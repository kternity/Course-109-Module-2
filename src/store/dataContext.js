// INTERFACE

import { createContext } from "react";

// interface, promise to have an array called cart, and object called user, blueprint
//should not have any values or implementation
// just describes the structure of the data
// setdata are immutable

const DataContext = createContext({
   cart: [],
   user: {},
   addProductToCart: () => {},
   removeProductFromCart: () => {},
});

export default DataContext;
