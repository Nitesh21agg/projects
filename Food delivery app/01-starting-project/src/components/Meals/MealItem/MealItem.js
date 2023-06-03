 //import { Fragment } from "react";
// /import classes from "./MealItem.module.css";
// const MealItem = (props) => {
//     return(
//         <Fragment>
//         <div>
//             <li> </li>
//         </div>
//         <div></div>
//         </Fragment>
//     );
// };

                                                                                                                                                                          
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
 const MealItem = (props) => {

    const price1 = `$${props.price.toFixed(2)}`; // doubt
     return(  
        <li className = {classes.meal}>        
         <div>
         <h3>{props.name_1}</h3>
         <div className = {classes.description}>{props.description_1}</div>
         <div className = {classes.price}>{price1}</div>    
         </div>
         <div> 
            <MealItemForm />
         </div>
         </li> 
     ) 
};



export default MealItem;