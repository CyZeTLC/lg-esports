import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="max-w-7xl mx-auto px-4 py-12 mt-20 border-t border-gh-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright & Logo */}
                <div className="flex items-center gap-4 text-xs text-gh-text">
                    <span className="opacity-50">© 2026 LonelyGods, Inc.</span>
                    <a href="#" className="hover:text-vlr-blue">Terms</a>
                    <a href="#" className="hover:text-vlr-blue">Privacy</a>
                    <a href="#" className="hover:text-vlr-blue">Cookies</a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6 text-gh-text">
                    <SocialIcon platform="Twitter" />
                    <SocialIcon platform="Twitch" />
                    <SocialIcon platform="Discord" />
                    <SocialIcon platform="GitHub" />
                </div>

                {/* Status Anzeige */}
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gh-text">All Systems Operational</span>
                </div>
            </div>

            {/* Valorant Disclaimer */}
            <div className="mt-8 text-center">
                <p className="text-[10px] text-gh-text/30 uppercase tracking-[0.2em]">
                    LonelyGods is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games.
                </p>
            </div>
        </footer>
    );
};

const SocialIcon = ({ platform }: { platform: string }) => (
    <a href="#" className="hover:text-white transition-colors">
        <span className="text-xs font-mono uppercase tracking-widest">{platform}</span>
    </a>
);