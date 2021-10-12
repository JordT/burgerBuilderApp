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
        <div className={ classes.Container }> 
        {/* trying to get css to organise buttons */}
        <div className={classes.Controls}>Build Controls</div>
          <div className={classes.Ingredient }>
            <button type="button" 
              className={(meat <= 2) ? classes.Button : classes.ButtonDisabled } 
              onClick={() => {(meat <= 2) ? changeMeat(meat+1) : console.log("That's enough meat.")}}>Add Meat</button>
            <button type="button" 
              className={(meat !== 0) ? classes.Button : classes.ButtonDisabled } 
              onClick={() => {(meat !== 0) ? changeMeat(meat-1) : console.log("Meat cannot be negative")}}>Remove Meat</button>
          </div>
          <div className={classes.Ingredient}>
            <button type="button" 
              className={(salad <= 2) ? classes.Button : classes.ButtonDisabled }
              onClick={() => {(salad <= 2) ? changeSalad(salad+1) : console.log("That's enough salad.")}}>Add Salad</button>
            <button type="button" 
              className={(salad !== 0) ? classes.Button : classes.ButtonDisabled } 
              onClick={() => {(salad !== 0) ? changeSalad(salad-1) : console.log("Salad cannot be negative")}}>Remove Salad</button>
          </div>
          <div className={classes.Ingredient}>
            <button type="button" 
              className={(bacon <= 2) ? classes.Button : classes.ButtonDisabled }
              onClick={() => {(bacon <= 2) ? changeBacon(bacon+1) : console.log("That's enough bacon.")}}>Add Bacon</button>
            <button type="button" 
              className={(bacon !== 0) ? classes.Button : classes.ButtonDisabled } 
              onClick={() => {(bacon !== 0) ? changeBacon(bacon-1) : console.log("Bacon cannot be negative")}}>Remove Bacon</button>
          </div>
          <div className={classes.Ingredient}>
            <button type="button" 
              className={(cheese <= 2) ? classes.Button : classes.ButtonDisabled } 
              onClick={() => {(cheese <= 2) ? changeCheese(cheese+1) : console.log("That's enough cheese.")}}>Add Cheese</button>
            <button type="button" 
              className={(cheese !== 0) ? classes.Button : classes.ButtonDisabled } 
              onClick={() => {(cheese !== 0) ? changeCheese(cheese-1) : console.log("Cheese cannot be negative")}}>Remove Cheese</button>
          </div>
        </div>
      </AuxHOC>
    ) 
}
export default BurgerBuilder;
