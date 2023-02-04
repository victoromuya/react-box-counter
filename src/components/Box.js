import React from 'react'


export default function Box(props){

   /* const [on, setOn] = React.useState(props.on) /* props.on brings square.on here */

    const styles = {
        backgroundColor : props.on ? '#222222' : 'green',
        color : props.on ? 'red' : 'white'
    }

    /*
    function toggle(){
        setOn(prevTog => !prevTog)
    }
    ***/
    const status = props.on ? "OFF" : "ON"
    
return(
    <div className="box" style={styles} onClick={()=>props.toggle(props.id)}>
        {status}
    </div>

)
}