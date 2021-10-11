import React from 'react'

import AuxHOC from '../../hoc/AuxHOC'
import Toolbar from '../Toolbar/Toolbar'
import Sidebar from '../Sidebar/Sidebar'
import classes from '../Layout/Layout.module.css'

const layout = (props) => (
  <AuxHOC>
    <div className={classes.container}>
      <Toolbar />
      <Sidebar className={classes.Sidebar} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </div>
  </AuxHOC>
)

export default layout
