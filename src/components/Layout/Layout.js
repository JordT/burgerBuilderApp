import React from 'react'

import AuxHOC from '../../hoc/AuxHOC'
import Toolbar from '../Toolbar/Toolbar'
import Sidebar from '../Sidebar/Sidebar'
import classes from '../Layout/Layout.module.css'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

const layout = (props) => (
  <AuxHOC>
    <div className={classes.Container}>
      <Toolbar />
      <div className={classes.ConatinerTwo}>
        <Sidebar className={classes.Sidebar} />
        <BurgerBuilder className={classes.BurgerContent} />
        <main className={classes.Content}>
          {props.children}
      </main>
      </div>
    </div>
  </AuxHOC> 
)

export default layout
