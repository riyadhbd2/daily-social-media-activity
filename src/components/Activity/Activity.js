import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {activity, addToList} = props;
    const {id, name, img, time } = activity;
    return (
        <div className='activity'>
            <img src={img} alt=""/>
            <div className='activity-info'>
                <div className='first-info'>
                <h4>Name: {name}</h4>
                <h5>Time: {time}</h5>
                </div>
                <button onClick={()=>addToList(activity.time)} className='btn-add'>Add to list</button>
            </div>
        </div>
    );
};

export default Activity;