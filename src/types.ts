export interface Player {
    id: string;
    name: string;
    role: 'Duelist' | 'Initiator' | 'Controller' | 'Sentinel';
    rank: string;
    rankIcon: string;
    mainAgent: string;
    agentImage: string;
    history: boolean[];
    stats: {
        kd: number;
        winrate: string;
        acs: number;
        hs: string;
    };
    socials: {
        twitter?: string;
        twitch?: string;
    };
}