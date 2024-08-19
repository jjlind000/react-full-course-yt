import React, { useState, useEffect } from 'react';

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    // perform some code during each re-render, or when teh component mounts, or when some variable's value change
    useEffect(() => { // after every 1s, update the state of time, with the current time
        const intervalId = setInterval(() => // intervalId is the id of the setInterval function being set up
                    {setTime(new Date())}, 1000); // every 1000ms 

        // add cleanup fn for when teh component unmounts (free up resources)
        return () => clearInterval(intervalId);

    }, []); // do only when the component mounts


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // if A == 0 is equivalent to false
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )

}

