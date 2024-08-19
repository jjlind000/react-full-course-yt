import React, {useState, useEffect, useRef} from 'react';

export default function Stopwatch() {

    // is our stopwatch currently running?
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    // if we start an interval, we need to clear it if we're not using it
    const intervalIdRef = useRef(null); 
    // when we start our stopwatch we'll need to get the current time
    const startTimeRef = useRef(0); // 0ms

    // pass in a function and a dependency array, with one state variable of isRunning: when we mount 
    // our component, and if isRunning changes, execute the function
    useEffect(() => {
        if (isRunning){
            intervalIdRef.current = setInterval(() => setElapsedTime(Date.now()-startTimeRef.current), 10); // 10ms
        }

        // cleanup function
        return () => {
            clearInterval(intervalIdRef.current);
        }    
    }, [isRunning]);

    /* Date.now() returns the current date in millis */
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;  
        //console.log(startTimeRef.current);
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }
    function formatTime(){
        //return `00:00:00`; // placeholder, for now
        // need to convert elapsedTime (epochMillis) to a string
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let millis = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        millis = String(millis).padStart(2, "0");

        //return `${hours}:${minutes}:${seconds}:${millis}`
        return `${minutes}:${seconds}:${millis}`
    }

    return (
      <div className='stopwatch'>
        <div className='display'>{formatTime()}</div>
        <div className='controls'>
            <button onClick={start} className='start-button'>Start</button>
            <button onClick={stop} className='stop-button'>Stop</button>
            <button onClick={reset} className='reset-button'>Reset</button>
        </div>
      </div>
    );
}
