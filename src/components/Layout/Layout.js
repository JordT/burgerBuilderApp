import React from 'react'

import AuxHOC from '../../hoc/AuxHOC'
import classes from '../Layout/Layout.module.css'

const layout = (props) => (
  <AuxHOC>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </AuxHOC>
)

export default layout
