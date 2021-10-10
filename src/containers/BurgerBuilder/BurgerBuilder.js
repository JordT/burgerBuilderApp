import React , { useState }from 'react'
import Burger from '../../components/Burger/Burger.js'
import AuxHOC from '../../hoc/AuxHOC'


function BurgerBuilder () {

    const [meat, changeMeat] = useState(1);
    const [salad, changeSalad] = useState(2);
    const [bacon, changeBacon] = useState(1);
    const [cheese, changeCheese] = useState(1);

    const isZero = () => {
      // function to catch zero errors?
    }
    return (
      <AuxHOC>
        <Burger meat={meat} salad={salad} bacon={bacon} cheese={cheese}/>
        <div>Build Controls</div>
        <button type="button" onClick={() => changeMeat(meat+1)}>Add Meat</button>
        <button type="button" onClick={() => changeMeat(meat-1)}>Remove Meat</button>
        <button type="button" onClick={() => changeSalad(salad+1)}>Add Salad</button>
        <button type="button" onClick={() => changeSalad(salad-1)}>Remove Salad</button>
        <button type="button" onClick={() => changeBacon(bacon+1)}>Add Bacon</button>
        <button type="button" onClick={() => changeBacon(bacon-1)}>Remove Bacon</button>
        <button type="button" onClick={() => changeCheese(cheese+1)}>Add Cheese</button>
        <button type="button" onClick={() => changeCheese(cheese-1)}>Remove Cheese</button>
      </AuxHOC>
    ) 
}
export default BurgerBuilder;
