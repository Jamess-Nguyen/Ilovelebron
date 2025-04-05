import { useEffect, useState } from "react"

const ProgressBar = () => {
    const [curDateTime, setCurDateTime] = useState(new Date());
    const total2024Contract = 101350000;


    // Updates the Current Date
    useEffect(() => {
        setInterval(() => {
            setCurDateTime(new Date())
        }, 1000);
    }, []);


    return (
        <>
            <p>Current Datetime: {curDateTime.toLocaleString()}</p>
        </>
    )
};

export { ProgressBar };