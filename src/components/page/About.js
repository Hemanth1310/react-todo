import React from 'react';

function About(){
    return (
        <React.Fragment>
            <div style={pageStyle}>
            <h1>Instructions</h1>
            <br></br>
            <ul>
            <li>Add your to do task through Add to list component</li>
            <li> Check the box for Making the task as completed</li>
            <li>Use the X button to delete the task from the list</li>
            </ul>
            </div>
        </React.Fragment>
    )
}
const pageStyle = {
    //  display:'flex',
    // background: '#333',
    // color: '#fff',
    //  textAlign: 'center',
    padding: '10px',
     justifyContent: 'left',
    border: '5px solid #FFFF00',
    padding: '25px'
    
}
const page = {
    position: 'relative',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
border: '5px solid #FFFF00',
padding: '10px'

 
}
export default About;