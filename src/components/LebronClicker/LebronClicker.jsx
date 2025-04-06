import { useState, useEffect } from 'react';
import './LebronClicker.css';

const LebronClicker = () => {
    const [clickerCounter, setClickerCounter] = useState(0);

    return (
        <div className='clicker-counter'>
            <button>I'm a button</button>
            <p>People who love Lebron: {clickerCounter}</p>
        </div>
    );
};

export { LebronClicker };