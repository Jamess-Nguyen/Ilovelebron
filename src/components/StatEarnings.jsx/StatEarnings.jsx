import { useState, useEffect } from 'react';

const StatEarnings = () => {
    const [playerStats, setPlayerStats] = useState(null);
    const URL = `http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/types/2/athletes/1966/statistics/0?lang=en&region=us`;

    useEffect(() => {
        const fetchPlayerStats = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                const statsArry = data.splits.categories

                const defenseArry = statsArry.filter((category, index) => {
                    if (category.name === 'defensive') {
                        console.log(`category: ${JSON.stringify(category.stats)}`);
                    }
                    else {
                        console.log('goku burger');
                    }
                });
                setPlayerStats(statsArry);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchPlayerStats();
    }, []);

    return (
        <div>
            <h2>Stat Earnings:</h2>
            <p>{JSON.stringify(playerStats, null, 2)}</p>
        </div>
    );
};

export { StatEarnings };
