import { useState, useEffect } from 'react';
import './LebronClicker.css';
import lebron from '../../assets/lebron.png';

const LebronClicker = () => {
    const [clickerCounter, setClickerCounter] = useState(0);

    return (
        <div className='clicker-counter'>
            {/* 
            Todo: Build a flask server that hosts the counter uncomment this
            then stylize the button to have the lebron image. 

            For now it'll just serve text cause that's pretty cool too

            <button>I'm a button</button>
            <p>People who love Lebron: {clickerCounter}</p> 
            */}
            <img src={lebron} style={{ width: '35%', height: '35%' }}></img>
        </div >
    );
};

export { LebronClicker };