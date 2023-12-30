import React from 'react';
import './Information.css'

const Information = ({totalTime}) => {
    let total = 0;
    for (const time of totalTime) {
        total = total + time;
    }

    return (
        <div className='all-information'>
            <h2>Easir Arafat</h2>
            <div>
                <h4>Break Time in Hours</h4>
                <div className='break-time'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
                <div>
                    <h4>Total Spending Time in Hours</h4>
                    <p>Total Time: {total}</p>
                    <p>Break Time:</p>
                </div>
                <div className='btn-done'>
                    <button>Daily Activity Done</button>
                </div>
            </div>
        </div>
    );
};

export default Information;