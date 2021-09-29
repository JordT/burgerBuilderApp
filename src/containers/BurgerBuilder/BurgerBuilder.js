import React from 'react'
import Burger from '../../components/Burger/Burger.js'

import AuxHOC from '../../hoc/AuxHOC'

class BurgerBuilder extends React.Component {
  state = {
    ingredients : {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  }
  
  render () {
    return (
      <AuxHOC>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </AuxHOC>
    )
  }
}

export default BurgerBuilder
