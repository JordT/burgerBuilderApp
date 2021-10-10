import React , { useState }from 'react'
import Burger from '../../components/Burger/Burger.js'
import AuxHOC from '../../hoc/AuxHOC'
import classes from './BurgerBuilder.module.css'

function BurgerBuilder () {

    const [cheese, changeCheese] = useState(1);
    const [meat, changeMeat] = useState(1);
    const [salad, changeSalad] = useState(1);
    const [bacon, changeBacon] = useState(1);
    
    return (
      <AuxHOC>
        <Burger meat={meat} salad={salad} bacon={bacon} cheese={cheese}/>
        <div>Build Controls</div>
        <div> 
        {/* trying to get css to organise buttons */}
          <button type="button" 
            className={(meat <= 2) ? null : classes.ButtonDisabled } 
            onClick={() => {(meat <= 2) ? changeMeat(meat+1) : console.log("That's enough meat.")}}>Add Meat</button>
          <button type="button" 
            onClick={() => {(meat !== 0) ? changeMeat(meat-1) : console.log("Meat cannot be negative")}}>Remove Meat</button>
          <button type="button" 
            className={(salad <= 2) ? null : classes.ButtonDisabled }
            onClick={() => {(salad <= 2) ? changeSalad(salad+1) : console.log("That's enough salad.")}}>Add Salad</button>
          <button type="button" 
            onClick={() => {(salad !== 0) ? changeSalad(salad-1) : console.log("Salad cannot be negative")}}>Remove Salad</button>
          <button type="button" 
            className={(bacon <= 2) ? null : classes.ButtonDisabled }
            onClick={() => {(bacon <= 2) ? changeBacon(bacon+1) : console.log("That's enough bacon.")}}>Add Bacon</button>
          <button type="button" 
            onClick={() => {(bacon !== 0) ? changeBacon(bacon-1) : console.log("Bacon cannot be negative")}}>Remove Bacon</button>
          <button type="button" 
            className={(cheese <= 2) ? null : classes.ButtonDisabled } 
            onClick={() => {(cheese <= 2) ? changeCheese(cheese+1) : console.log("That's enough cheese.")}}>Add Cheese</button>
          <button type="button" 
            onClick={() => {(cheese !== 0) ? changeCheese(cheese-1) : console.log("Cheese cannot be negative")}}>Remove Cheese</button>
        </div>
      </AuxHOC>
    ) 
}
export default BurgerBuilder;
