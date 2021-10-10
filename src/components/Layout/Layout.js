import React from 'react'

import AuxHOC from '../../hoc/AuxHOC'
import Toolbar from '../Toolbar/Toolbar'
import classes from '../Layout/Layout.module.css'

const layout = (props) => (
  <AuxHOC>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </AuxHOC>
)

export default layout
