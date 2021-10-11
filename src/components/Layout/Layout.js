import React from 'react'

import AuxHOC from '../../hoc/AuxHOC'
import Toolbar from '../Toolbar/Toolbar'
import Sidebar from '../Sidebar/Sidebar'
import classes from '../Layout/Layout.module.css'

const layout = (props) => (
  <AuxHOC>
    <Toolbar />
    <Sidebar />
    <div>SideDrawer and Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </AuxHOC>
)

export default layout
