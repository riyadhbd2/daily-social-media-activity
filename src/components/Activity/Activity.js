import React from 'react';
import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
                <button onClick={()=>addToList(activity.time)} className='btn-add'>Add to list
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Activity;