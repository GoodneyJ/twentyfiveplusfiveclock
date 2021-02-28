import React, { useEffect } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

export default function Length(props) {

    return (
        <div id={`${props.title}-label`} className="length-component">
            <h2>{props.title} Length</h2>
            <div className="display-container">
                <div id={`${props.title}-decrement`} className={`${props.title}-decrement down-btn `} onClick={props.handleDecrement}><FaArrowDown className={`${props.title}-decrement`}/></div>
                <h4 id={`${props.title}-length`}>{props.time > -1 ? props.time : '0'}</h4>
                <div id={`${props.title}-increment`} className={`${props.title}-increment up-btn`}  onClick={props.handleIncrement}><FaArrowUp className={`${props.title}-increment`} /></div>
            </div>
        </div>
    )
}
