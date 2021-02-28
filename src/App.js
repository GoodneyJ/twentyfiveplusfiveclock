import React, {useState, useEffect} from 'react';

import LengthComp from './components/length.js'
import TimeLeft from './components/timeLeft.js'
import './css/App.css';

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(1);
  const [playStop, setPlayStop] = useState(false);
  const [secondsCounter, setSecondsCounter] = useState(0);
  const initialBreak = 5;
  const initialSession = 25;



  useEffect(() => {
    let timer;

    if(playStop) {
      timer = setInterval(() => {
      
        if(secondsCounter === 0) {

          setSecondsCounter(5);
          if(sessionLength === -1) {

            setBreakLength(breakLength - 2);
          } else {
            setSessionLength(sessionLength - 1);
          }
        } else {
          setSecondsCounter(secondsCounter - 1);
        }
      }, 1000)
    }

    if(document.getElementById('time-left').innerHTML === '00:00') {
      document.getElementById('beep').volume = 0.02;
      document.getElementById('beep').play();
    }

      return () => clearInterval(timer);
  })

  const handlePlayStop = (event) => {
    if(playStop) {
      setPlayStop(!playStop);
    } else {
      setPlayStop(!playStop);
    }
  }

  const handleReset = (event) => {
    setBreakLength(initialBreak);
    setSessionLength(initialSession);
    setSecondsCounter(0);
    setPlayStop(false)
  }


  const handleDecrement = (event) => {
    let target = event.target.parentNode.classList[0];

    if(target.includes('break')) {
      if(breakLength > 0) {
        setBreakLength(breakLength => breakLength - 1)
      }
    } else if(target.includes('session')) {
      if(sessionLength > 0) {
        setSessionLength(sessionLength => sessionLength - 1)
      }
    } else {
      console.log('what')
    }
  }

  const handleIncrement = (event) => {
    let target = event.target.parentNode.classList[0];

    if(target.includes('break')) {
      if(breakLength < 60) {
        setBreakLength(breakLength => breakLength + 1)
      }
    } else if(target.includes('session')) {
      if(sessionLength < 60) {
        setSessionLength(sessionLength => sessionLength + 1)
      }
    } else {
      console.log('what')
    }
  }

  let truefalse = playStop

  return (
    <div className="App">
      <h1>25 + 5 Clock {playStop ? 'true' : 'false'}</h1>
      <div id="length-container">
        <LengthComp title="break" time={breakLength} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
        <LengthComp title="session" time={sessionLength} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
      </div>
      <TimeLeft playStop={handlePlayStop} reset={handleReset} breakMinutes={breakLength} sessionMinutes={sessionLength} seconds={secondsCounter}/>
    </div>
  );
}

export default App;
