import React, { useState } from 'react';
import './Information.css';



const Information = ({totalTime}) => {
    const[breakTime, setBreakTime] = useState(0);
    
    let total = 0;
    for (const time of totalTime) {
        total = total + time;
    }


const addBreak =(e)=>{
setBreakTime(e.target.value);
    
}

const showMessage = () =>{
    alert("All Social Media Activities Done For Today");
}


    return (
        <div className='all-information'>
            <h2>Easir Arafat</h2>
            <div>
                <h4>Break Time in Hours</h4>
                <div className='break-time'>
                    <button onClick={addBreak} value = "1">1</button>
                    <button onClick={addBreak} value = "2">2</button>
                    <button onClick={addBreak} value = "3">3</button>
                    <button onClick={addBreak} value = "4">4</button>
                    <button onClick={addBreak} value = "5">5</button>
                </div>
                <div>
                    <h4>Total Spending Time in Hours</h4>
                    <p>Total Time: {total}</p>
                    <p>Break Time: {breakTime}</p>
                </div>
                <div className='btn-done'>
                    <button onClick={showMessage}>Daily Activity Done</button>
                </div>
            </div>
        </div>
    );
};

export default Information;