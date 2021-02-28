import React from 'react'

export default function timeLeft(props) {
    return (
        <div id="timer-component">
            <div id="timer-label">
                <h1>Session</h1>
                <h2 id="time-left">{props.sessionMinutes === -1 ? props.breakMinutes < 10 ? `0${props.breakMinutes}` : props.breakMinutes : props.sessionMinutes < 10 ? `0${props.sessionMinutes}` : props.sessionMinutes}:{props.seconds < 10 ? `0${props.seconds}` : props.seconds === 60 ? `00` : props.seconds}</h2>
                <audio id="beep" className="beep" src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'/>
            </div>
            <div id="controls">
                <div id="start_stop" className="control-item" onClick={props.playStop}>start/stop</div>
                <div id="reset" className="control-item" onClick={props.reset}>reset</div>
            </div>
        </div>
    )
}
