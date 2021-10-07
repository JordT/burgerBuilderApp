import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.module.css'
import burgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // transforms the ingredients from state to an array
  // const transformedIngredients = Object.keys(props.ingredients)
  //   .map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />
  //     })
  //   })
  // Console log props shows they are correct
  console.log("Burger.js: Line 16: Keys are: " + Object.keys(props))
  console.log("Burger.js: Line 17: Values are: " + Object.values(props))

  // TransformedIngredients - needs a fucntion within it.
  const render = []
  const transformedIngredients = () => {
    Object.keys(props)
      .map((ingKey) => {
        // console.log("There should be: " + props[ingKey] + " x " + ingKey)
        return [...Array(props[ingKey])]
          .map(()/*(_,i)*/ => {
            // We get to here
            console.log("line 27: IngKey is - " + ingKey)
            return render.push(<BurgerIngredient /*key={i}*/ type={ingKey} />)
            })
      })
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {/* <BurgerIngredient type='meat'/> */}
      {transformedIngredients()}
      {render}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
