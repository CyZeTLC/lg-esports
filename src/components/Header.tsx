import React from 'react';
import { setCurrentPage } from '../utils/pageUtils';

export const Header: React.FC = () => {
    return (
        <nav className="bg-[#010409] border-b border-gh-border px-4 py-3 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6">
                    {/* Orga Logo / Home */}
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage("home")}>
                        <div className="w-8 h-8 bg-vlr-red flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-300">
                            <span className="text-white font-black -rotate-45 group-hover:rotate-0 transition-transform">LG</span>
                        </div>
                        <span className="text-white font-bold tracking-tighter text-xl hidden md:block">
                            LONELY<span className="text-vlr-red">GODS</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4 text-sm font-medium text-gh-text">
                        <a href="#home" onClick={() => setCurrentPage("home")} className="hover:text-white transition-colors">Home</a>
                        <a href="#roster" onClick={() => setCurrentPage("roster")} className="hover:text-white transition-colors">Teams</a>
                        <a href="#stats" onClick={() => setCurrentPage("stats")} className="hover:text-white transition-colors">Stats</a>
                        <a href="#about" onClick={() => setCurrentPage("about")} className="hover:text-white transition-colors">About</a>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <button className="text-xs text-gh-text border border-gh-border px-3 py-1.5 rounded-md hover:bg-gh-card transition-colors">
                        Sign In
                    </button>
                    <button className="text-xs bg-vlr-red text-white px-3 py-1.5 rounded-md font-bold hover:bg-red-600 transition-all shadow-[0_0_10px_rgba(255,70,85,0.3)]">
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    );
};