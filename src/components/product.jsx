import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import Cart from "../pages/cart";
import DataContext from "../store/dataContext";

function Product(props) {
   const [quantity, setQuantity] = useState(1);

   let addProductToCart = useContext(DataContext).addProductToCart;

   function handleQuantityChange(qty) {
      console.log("quantity change", qty);
      setQuantity(qty);
   }

   function getTotal() {
      let total = props.data.Price * quantity;
      return total.toFixed(2);
   }

   function handleAdd() {
      console.log("Added to Cart", props.data);
      addProductToCart(); //call the global function
   }

   return (
      <div className="product">
         <img src={"/images/" + props.data.image} alt=""></img>

         <h5>{props.data.title}</h5>
         <div className="prices">
            <label>Total: ${getTotal()}</label>
            <label>price: ${props.data.Price.toFixed(2)}</label>
         </div>

         <div className="controls">
            <QuantityPicker onChange={handleQuantityChange} />

            <button onClick={handleAdd} className="btn btn-sm btn-success">
               Add
            </button>
         </div>
      </div>
   );
}

export default Product;
