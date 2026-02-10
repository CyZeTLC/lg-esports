const ASSET_BASE = "https://media.valorant-api.com/competitivetiers/03621f13-4f37-6296-83f5-22ad31c07111";

const rankMapping: Record<string, number> = {
    "Gold 1": 12, "Gold 2": 13, "Gold 3": 14,
    "Platinum 1": 15, "Platinum 2": 16, "Platinum 3": 17,
    "Diamond 1": 18, "Diamond 2": 19, "Diamond 3": 20,
    "Ascendant 1": 21, "Ascendant 2": 22, "Ascendant 3": 23,
    "Immortal 1": 24, "Immortal 2": 25, "Immortal 3": 26,
    "Radiant": 27
};

export const getRankIcon = (rankName: string): string => {
    const tier = rankMapping[rankName] || 0; // 0 ist "Unranked"
    return `${ASSET_BASE}/${tier}/largeicon.png`;
};