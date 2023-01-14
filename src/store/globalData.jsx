import DataContext from "./dataContext";
import { useState } from "react";

function GlobalData(props) {
   const [cart, setCart] = useState([]);
   const [fakeUser, setFakeUser] = useState({ name: "Kenneth" });

   function addProductToCart(product) {
      console.log("Global function called");
      //create a copy, modify the copy, and than set the copy to replace the original cart
      let copy = [...cart]; //This is a new empty array. 3 dots=aka spread operator copies everything
      copy.push(product);
      setCart(copy);
   }

   function removeProductFromCart() {}

   return (
      <DataContext.Provider
         value={{
            cart: cart,
            user: fakeUser,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
         }}
      >
         {props.children}
      </DataContext.Provider>
   );
}

export default GlobalData;
