import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.module.css'

const burger = (props) => {

  // Console log props shows they are correct
  console.log("Burger.js: Line 16: Keys are: " + Object.keys(props))
  console.log("Burger.js: Line 17: Values are: " + Object.values(props))

  // TransformedIngredients - needs a fucntion within it.
  const render = []
  const transformedIngredients = () => {
    Object.keys(props)
      .map((ingKey) => {
        return [...Array(props[ingKey])]
          .map(()/*(_,i)*/ => {
            return render.push(<BurgerIngredient /*key={i}*/ type={ingKey} />)
            })
      })
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients()}
      {render}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
