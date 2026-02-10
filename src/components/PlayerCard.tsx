import React from 'react';
import { Player } from '../types';

interface Props {
    player: Player;
    rankIcon?: string;
    onClick: (player: Player) => void;
}

export const PlayerCard: React.FC<Props> = ({ player, rankIcon, onClick }) => {
    return (
        <div
            onClick={() => onClick(player)}
            className="bg-gh-card border border-gh-border p-4 rounded-md hover:border-vlr-red transition-all cursor-pointer group hover:shadow-[0_0_15px_rgba(255,70,85,0.1)]"
        >
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    {rankIcon ? (
                        <img src={rankIcon} alt={player.rank} className="w-10 h-10 object-contain" />
                    ) : (
                        <div className="w-10 h-10 bg-gh-border animate-pulse rounded" />
                    )}
                    <div>
                        <h3 className="text-white font-bold group-hover:text-vlr-red">{player.name}</h3>
                        <p className="text-[10px] text-gh-text uppercase">{player.rank}</p>
                    </div>
                </div>
                <span className="text-[10px] text-gh-text uppercase tracking-widest opacity-50 font-mono">
                    {player.id}
                </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-gh-bg border border-gh-border px-2 py-0.5 rounded text-gh-text">
                    {player.role}
                </span>
                <span className="text-xs text-gh-text/60">Rank: {player.rank}</span>
            </div>

            <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                    {player.history.map((win, i) => (
                        <div key={i} className={`w-3 h-1 rounded-full ${win ? 'bg-green-500' : 'bg-vlr-red'}`} />
                    ))}
                </div>
                <span className="ml-auto text-[10px] text-gh-text/40 uppercase">Details ansehen →</span>
            </div>
        </div>
    );
};