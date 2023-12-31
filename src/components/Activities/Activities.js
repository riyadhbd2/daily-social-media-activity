import React, { useEffect, useState } from 'react';
import './Activities.css';
import Activity from '../Activity/Activity';
import Information from '../Information/Information';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [totalTime, setTotalTime] = useState([]);
    useEffect(()=>{
        fetch("activity.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);
    const addToList =(time)=>{
        const newTotal = [...totalTime, time];
        setTotalTime(newTotal);
    }
    return (
        <div className='activities'>
            <div>
                <div className='header'>
                    <h2><FontAwesomeIcon icon ={faCoffee}></FontAwesomeIcon></h2>
                    <h1>Daily Social Media Activity</h1>
                </div>
            
            <div className='activities-all'>
                {
                    activities.map(activity => <Activity key = {activity.id} activity = {activity} addToList={addToList}></Activity>)
                }
            </div>
            </div>
            
            <div>
                <Information totalTime = {totalTime}></Information>
            </div>
        </div>
    );
};

export default Activities;