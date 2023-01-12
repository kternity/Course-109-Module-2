import DataContext from "./dataContext";
import { useState } from "react";

function GlobalData(props) {
   const [cart, setCart] = useState([]);
   const [fakeUser, setFakeUser] = useState({ name: "Kenneth" });

   function addProductToCart() {
      console.log("Global function called");
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
