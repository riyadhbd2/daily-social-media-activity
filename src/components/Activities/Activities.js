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
            <div className='question-answer'>
                <h2>Question and Answer</h2>
                <h5>How does react works?</h5>
                <p>React is a JavaScript library for building user interfaces. It uses a virtual DOM to efficiently update the actual DOM, minimizing performance bottlenecks. React components are reusable, encapsulated elements that manage their own state and can be composed to build complex UIs. The library employs a unidirectional data flow, ensuring predictable rendering and easy debugging. React's declarative syntax allows developers to describe how the UI should look based on the application state, and it automatically updates the view when the state changes.</p>
                <h5>What is the differences between props and state in react? </h5>
                <p>In React, `props` (short for properties) and `state` are both used to manage data, but they serve different purposes. `Props` are used to pass data from a parent component to a child component, and they are immutable within the child component. On the other hand, `state` is used to manage and represent the internal mutable state of a component. State is managed within the component itself and can be updated using the `setState` method, triggering a re-render of the component. While `props` are passed down from parent to child, `state` is local and specific to the component that owns it. Components that own and set a particular piece of state can pass it down to child components as `props`.</p>
                <h5>What is purposes of "useEffect" except data loading?</h5>
                <p>In addition to data loading, the `useEffect` hook in React serves various purposes:

                    1. Side Effects:** `useEffect` is used to perform side effects in functional components, such as modifying the DOM, interacting with external APIs, or subscribing/unsubscribing to external events.

                    2. Lifecycle Events:** It allows you to replicate lifecycle events of class components, such as component mount, update, and unmount, by specifying dependencies or using it without dependencies.

                    3. Timed Actions:** `useEffect` can be employed to execute code at specific intervals, mimicking functionalities like setInterval or setTimeout.

                    4. Event Listeners:** It's useful for setting up and cleaning up event listeners to handle user interactions or global events.

                    5. Conditional Effects:** `useEffect` can be conditionally applied based on certain conditions, enabling dynamic behavior depending on the component's state or props.</p>
            </div>
            </div>
            
            <div>
                <Information totalTime = {totalTime}></Information>
            </div>
        </div>
    );
};

export default Activities;  