import { useState, useEffect } from 'react';

const LebronClicker = () => {
    const [clickerCounter, setClickerCounter] = useState(0);

    return (
        <>
            <button>I'm a button</button>
            <p>People who love Lebron: {clickerCounter}</p>
        </>
    );
};

export { LebronClicker };