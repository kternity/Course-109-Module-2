import { useState } from "react";

function Contact() {
   const [isEmailVisible, setIsEmailVisible] = useState(false);


   function getEmailSection() {
      if (isEmailVisible) {
        return <h5>Email: kternity@gmail.com</h5>
      }
      else {
         return <label>Click the button below</label>;
      }
   }

   function handleClick() {
      console.log("It works!");
      setIsEmailVisible(true);
   }

   function handleClick2() {
      console.log("This works too!");
      setIsEmailVisible(false);
   }


   return (
      <div className="contact">
         <h2>Kenneth Chung</h2>

         {getEmailSection()}
         <br />
         <button onClick={handleClick} className='btn btn-sm btn-primary'>Show Email</button>  
         <button onClick={handleClick2} className='btn btn-sm btn-danger'>Hide Email</button>
      </div>
   );
}

export default Contact;
