import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {

  // TransformedIngredients - needs a fucntion within it.
  const render = []

  const transformedIngredients = () => {
    Object.keys(props)
      .map((ingKey) => {
        return [...Array(props[ingKey])]
          .map(() => {
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
