import React from 'react';
import classes from './Button.css'

const button = (props) => (
    <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
)

// class Button extends Component{

//     componentDidUpdate(){
//         console.log("1")
//     }
    
//     render(){
//         console.log("render")
//         return(
//             <button className={[classes.Button, classes[this.props.btnType]].join(' ')} onClick={this.props.clicked}>{this.props.children}</button>
//         )
//     }
// }

export default button;