import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {

  // TransformedIngredients - needs a function within it.
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

  transformedIngredients()

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {render}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
