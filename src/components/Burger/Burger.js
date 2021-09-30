import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.module.css'

const burger = (props) => {
  // transforms the ingredients from state to an array
  // const transformedIngredients = Object.keys(props.ingredients)
  //   .map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />
  //     })
  //   })
  // const transformedIngredients = 
  console.log(props);
  const transformedIngredients = (props) => {
    console.log(props + "<props is firing")
    return <BurgerIngredient type='meat'/>}
  // need to pass transformed BurgerIngredient both a key=(meat?) and a type (mean)

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {/* <BurgerIngredient type='meat'/> */}
      {transformedIngredients()}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
