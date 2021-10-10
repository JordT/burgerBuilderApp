import React , { useState }from 'react'
import Burger from '../../components/Burger/Burger.js'
import AuxHOC from '../../hoc/AuxHOC'


function BurgerBuilder () {

    const [meat, changeMeat] = useState(1);
    const [salad, changeSalad] = useState(2);
    const [bacon, changeBacon] = useState(1);
    const [cheese, changeCheese] = useState(1);

    return (
      <AuxHOC>
        <Burger meat={meat} salad={salad} bacon={bacon} cheese={cheese}/>
        <div>Build Controls</div>
        <button type="button" onClick={() => changeMeat(meat+1)}>Add Meat</button>
        <button type="button" onClick={() => {(meat !== 0) ? changeMeat(meat-1) : console.log("Meat cannot be negative")}}>Remove Meat</button>
        <button type="button" onClick={() => changeSalad(salad+1)}>Add Salad</button>
        <button type="button" onClick={() => {(salad !== 0) ? changeSalad(salad-1) : console.log("Salad cannot be negative")}}>Remove Salad</button>
        <button type="button" onClick={() => changeBacon(bacon+1)}>Add Bacon</button>
        <button type="button" onClick={() => {(bacon !== 0) ? changeBacon(bacon-1) : console.log("Bacon cannot be negative")}}>Remove Bacon</button>
        <button type="button" onClick={() => changeCheese(cheese+1)}>Add Cheese</button>
        <button type="button" onClick={() => {(cheese !== 0) ? changeCheese(cheese-1) : console.log("Cheese cannot be negative")}}>Remove Cheese</button>
      </AuxHOC>
    ) 
}
export default BurgerBuilder;
