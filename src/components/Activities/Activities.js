import React, { useEffect, useState } from 'react';
import './Activities.css'
import Activity from '../Activity/Activity';
import Information from '../Information/Information';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(()=>{
        fetch("activity.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='activities'>
            <div>
            <h1>Daily Social Media Activity</h1>
            <div className='activities-all'>
                {
                    activities.map(activity => <Activity key = {activity.id} activity = {activity}></Activity>)
                }
            </div>
            </div>
            
            <div>
                <Information></Information>
            </div>
        </div>
    );
};

export default Activities;