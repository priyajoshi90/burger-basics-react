import React from 'react';
import Aux from '../../hoc/Hoc';
import classes from './Layout.css';
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main classes={classes.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;