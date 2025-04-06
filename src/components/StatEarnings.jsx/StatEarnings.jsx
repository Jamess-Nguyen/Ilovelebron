import { useState, useEffect } from 'react';

const StatEarnings = () => {
    const [playerStats, setPlayerStats] = useState(null);
    const URL = `http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/types/2/athletes/1966/statistics/0?lang=en&region=us`;

    useEffect(() => {
        const fetchPlayerStats = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                const statsAry = data.splits.categories // It's an Arry of all Lebrons Stats
                const targetCategories = {
                    defense: new Set(['blocks', 'steals']),
                    general: new Set(['totalRebounds', 'gamesStarted', 'tripleDouble']),
                    offense: new Set(['assists', 'fieldGoalsMade', 'points', 'threePointFieldGoalsMade'])
                };

                const renderedStats = []
                // Gets the defensive stats
                renderedStats.push(...statsAry[0].stats.filter((category) => {
                    if (targetCategories.defense.has(category.name)) {
                        return true;
                    }
                    return false;
                }));

                // Gets General Stats
                renderedStats.push(...statsAry[1].stats.filter((category) => {
                    if (targetCategories.general.has(category.name)) {
                        return true;
                    }
                    return false;
                }));

                // Gets Offensive Stats
                renderedStats.push(...statsAry[2].stats.filter((category) => {
                    if (targetCategories.offense.has(category.name)) {
                        return true;
                    }
                    return false;
                }));

                setPlayerStats(renderedStats);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchPlayerStats();
    }, []);

    return (
        <div>
            <h2>Stat Earnings:</h2>
            <pre>{JSON.stringify(playerStats, null, 2)}</pre>
        </div>
    );
};

export { StatEarnings };
