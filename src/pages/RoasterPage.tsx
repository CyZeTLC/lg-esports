import { useState, useEffect } from 'react';
import { PlayerCard } from '../components/PlayerCard';
import { PlayerModal } from '../components/PlayerModal';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Player } from '../types';
import { fetchLatestRankIcons } from '../services/valorantApi';

// Bsp.-Daten
const HIGH_TEAM: Player[] = [
    {
        id: '01',
        name: 'Scrat',
        role: 'Duelist',
        rank: 'Immortal 2',
        rankIcon: '',
        mainAgent: 'Neon',
        agentImage: '',
        history: [true, true, false, true, true],
        stats: { kd: 1.25, winrate: '62%', acs: 245, hs: '28%' },
        socials: { twitter: '@scrat' }
    },
    {
        id: '02',
        name: 'CyZeTLC',
        role: 'Initiator',
        rank: 'Immortal 1',
        rankIcon: '',
        mainAgent: 'Skye',
        agentImage: '',
        history: [true, true, false, true, true],
        stats: { kd: 1.08, winrate: '62%', acs: 215, hs: '36%' },
        socials: { twitter: '@cyzetlc' }
    },
    {
        id: '03',
        name: 'J21',
        role: 'Controller',
        rank: 'Immortal 1',
        rankIcon: '',
        mainAgent: 'Clove',
        agentImage: '',
        history: [false, false, false, true, true],
        stats: { kd: 0.78, winrate: '62%', acs: 170, hs: '28%' },
        socials: { twitter: '@j21' }
    },
    {
        id: '04',
        name: 'jstn',
        role: 'Sentinel',
        rank: 'Immortal 1',
        rankIcon: '',
        mainAgent: 'Cypher',
        agentImage: '',
        history: [true, false, false, true, true],
        stats: { kd: 1.25, winrate: '62%', acs: 245, hs: '28%' },
        socials: { twitter: '@jstn' }
    }
];

const LOW_TEAM: Player[] = [
    {
        id: '01',
        name: 'Hades',
        role: 'Sentinel',
        rank: 'Gold 3',
        rankIcon: '',
        mainAgent: 'Killjoy',
        agentImage: '',
        history: [true, true, false, true, true],
        stats: { kd: 1.25, winrate: '62%', acs: 245, hs: '28%' },
        socials: { twitter: '@hades' }
    },
    {
        id: '02',
        name: 'Jonsens',
        role: 'Sentinel',
        rank: 'Gold 3',
        rankIcon: '',
        mainAgent: 'Killjoy',
        agentImage: '',
        history: [false, true, false, true, true],
        stats: { kd: 1.25, winrate: '62%', acs: 245, hs: '28%' },
        socials: { twitter: '@jonsens' }
    }
];

function RoasterPage() {
    const [rankIcons, setRankIcons] = useState<Record<string, string>>({});
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

    useEffect(() => {
        fetchLatestRankIcons().then(icons => {
            if (icons) setRankIcons(icons);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gh-bg flex flex-col">
            <Header />

            <main className="bg-gh-bg text-gh-text p-8">

                <section className="max-w-6xl mx-auto">
                    <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-vlr-red inline-block"></span>
                        High Team Roster
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {HIGH_TEAM.map(player => (
                            <PlayerCard
                                key={player.id}
                                player={player}
                                rankIcon={rankIcons[player.rank.toUpperCase()]}
                                onClick={(p) => setSelectedPlayer(p)}
                            />
                        ))}
                    </div>
                </section>

                <hr className="border-gh-border my-8" />

                <section className="max-w-6xl mx-auto">
                    <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-vlr-red inline-block"></span>
                        Low Team Roster
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {LOW_TEAM.map(player => (
                            <PlayerCard
                                key={player.id}
                                player={player}
                                rankIcon={rankIcons[player.rank.toUpperCase()]}
                                onClick={(p) => setSelectedPlayer(p)}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />

            {/* Player Modal */}
            {
                selectedPlayer && (
                    <PlayerModal
                        player={selectedPlayer}
                        rankIcon={rankIcons[selectedPlayer.rank.toUpperCase()]}
                        onClose={() => setSelectedPlayer(null)}
                    />
                )
            }
        </div >
    );
}

export default RoasterPage;