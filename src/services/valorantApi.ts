export const fetchLatestRankIcons = async () => {
    try {
        const response = await fetch('https://valorant-api.com/v1/competitivetiers');
        const data = await response.json();

        const latestTierSet = data.data[data.data.length - 1];

        const mapping: Record<string, string> = {};
        latestTierSet.tiers.forEach((tier: any) => {
            mapping[tier.tierName.toUpperCase()] = tier.largeIcon;
        });

        return mapping;
    } catch (error) {
        console.error("Fehler beim Laden der Rank-Icons:", error);
        return null;
    }
};