import { useEffect, useState, useRef } from "react"

const ContractEarnings = () => {
    const [curDateTime, setCurDateTime] = useState(new Date());
    const [curEarnings, setCurEarnings] = useState(0);
    const [curEarningsSinceVisit, setCurEarningsSinceVisit] = useState(0);

    /* BONUS NOTE:
       https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/athletes/1966
       If you ever wanna get freaky with it, this is an endpoint that contains contract information
       about Lebron. We can actually make the contract progress bar dynamic. But since my king
       is retiring soon it doesn't look like we'll do this LMAO
    */
    const visitedTime = useRef(new Date());
    const total2024Contract = 101350000 / 2;


    /* 
    On Mount does the following:
    1. Updated curDateTime to current Datetime every 1 second
    */
    useEffect(() => {
        setInterval(() => {
            setCurDateTime(new Date())
        }, 1000);
    }, []);

    /*
    Calculates the Amount Lebrons made every second
    */
    useEffect(() => {
        const dollarPerSec = 1.61 // Amount Lebron makes Per Second

        // Renders the progress bar of how much of the 2024-2025 contract was fulfilled
        const timeDiffSecsContract = Math.floor((new Date() - new Date("2024-07-01T00:00:00")) / 1000);
        setCurEarnings((timeDiffSecsContract * dollarPerSec).toFixed(2))

        // Renders the amount of money leGOAT has made since you've visited the site
        const timeDiffSecsVisited = Math.floor((new Date() - visitedTime.current) / 1000);
        setCurEarningsSinceVisit((timeDiffSecsVisited * dollarPerSec).toFixed(2))
    }, [curDateTime]);

    return (
        <>
            <p>Current Earnings: {curEarnings}</p>
            <p>Percentage Earnings: {(curEarnings / total2024Contract).toFixed(2)}</p>
            <progress value={(curEarnings / total2024Contract).toFixed(2)} />
            <p>Visited Time: {visitedTime.current.toLocaleString()} | Earnings Since visit: {curEarningsSinceVisit} </p>
        </>
    )
};

export { ContractEarnings };