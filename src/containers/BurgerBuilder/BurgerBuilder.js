import React , { useState }from 'react'
import Burger from '../../components/Burger/Burger.js'
import AuxHOC from '../../hoc/AuxHOC'


function BurgerBuilder () {
  // state = {
  //       ingredients : {
  //         salad: 1,
  //         bacon: 1,
  //         cheese: 1,
  //         meat: 1
  //       }
  //     }
    const [meat, changeMeat] = useState(1);
    const [salad, changeSalad] = useState(2);
    const [bacon, changeBacon] = useState(1);
    const [cheese, changeCheese] = useState(1);

    const isZero = () => {
    
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

// class BurgerBuilder extends React.Component {
//   state = {
//     ingredients : {
//       salad: 1,
//       bacon: 1,
//       cheese: 1,
//       meat: 1
//     }
//   }
  

//   render () {
//     const [meat, changeMeat] = useState(0);

//     return (
//       <AuxHOC>
//         <Burger ingredients={this.state.ingredients}/>
//         <div>Build Controls</div>
//         <button type="button" onClick={() => changeMeat(meat+1)}>Click Me</button>
//         <h2>Meat's back on the menu bois {meat}</h2>
//       </AuxHOC>
//     ) 
//   }
// }

// export default BurgerBuilder
