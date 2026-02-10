import React from 'react';
import { Player } from '../types';

export const PlayerModal: React.FC<{ player: Player; rankIcon?: string; onClose: () => void }> = ({ player, rankIcon, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-gh-bg border border-gh-border w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="relative h-32 bg-vlr-red flex items-end p-6 overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-20 text-8xl font-black text-black select-none">
                        {player.role}
                    </div>
                    <h2 className="text-4xl font-black text-white italic uppercase z-10">{player.name}</h2>
                    <button onClick={onClose} className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform">✕</button>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Stats Section */}
                    <div>
                        <h4 className="text-gh-text text-xs uppercase tracking-tighter mb-4 border-b border-gh-border pb-2">Combat Stats</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <StatBox label="K/D Ratio" value={player.stats.kd.toString()} color="text-white" />
                            <StatBox label="Winrate" value={player.stats.winrate} color="text-green-400" />
                            <StatBox label="ACS" value={player.stats.acs.toString()} color="text-vlr-red" />
                            <StatBox label="HS %" value={player.stats.hs} color="text-vlr-blue" />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-4">
                        <h4 className="text-gh-text text-xs uppercase tracking-tighter mb-4 border-b border-gh-border pb-2">Information</h4>
                        <div className="flex items-center gap-4 bg-gh-card p-3 rounded border border-gh-border">
                            {rankIcon ? (
                                <img src={rankIcon} alt={player.rank} className="w-10 h-10 object-contain" />
                            ) : (
                                <div className="w-10 h-10 bg-gh-border animate-pulse rounded" />
                            )}
                            <div>
                                <p className="text-xs text-gh-text">Current Rank</p>
                                <p className="text-white font-bold">{player.rank}</p>
                            </div>
                        </div>
                        <div className="text-sm text-gh-text leading-relaxed">
                            Spezialisiert auf {player.role}-Lurks und aggressives Entry-Fragging mit {player.mainAgent}.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatBox = ({ label, value, color }: { label: string, value: string, color: string }) => (
    <div className="bg-gh-card border border-gh-border p-3 rounded">
        <p className="text-[10px] text-gh-text uppercase mb-1">{label}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
);