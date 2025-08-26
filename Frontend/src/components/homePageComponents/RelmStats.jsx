import React, { useState, useEffect } from 'react';
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon } from "lucide-react";
import './RelmStats.css'

const gameStats = [
    { label: "Total Bosses", value: "238", icon: Skull },
    { label: "Unique Weapons", value: "300+", icon: Sword },
    { label: "Discoverable Areas", value: "150+", icon: MapPin },
    { label: "NPCs & Merchants", value: "80+", icon: Users }
];

const RelmStats = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        // <div className="relm-stats border">
        //     <div className='relm-stats-container'>
        //     <div className='exploreNavigationTop   mb-5  '>
        //         <h2 className='text-amber-200   font-light font-crimson'>EXPLORE THE LANDS BETWEEN</h2>
        //         <p>Realm Statistics</p>
        //     </div>

        //     <div className='relm-stats-card '>

        //         <div>sadklasd</div>
        //         <div>asasfaf</div>
        //         <div>asfdaf</div>
        //         <div>afasfaf</div>
        //     </div>

        //     </div>


        // </div>
        <div className="   relative  bg-center bg-fixed bg-cover  mx-auto" style={{ backgroundImage: "url('/img/background1.webp')" }}>
            <div className=' relm-stats   inset-0    ' >
                <div className=' relm-stats-container  '>
                    <h3 className="text-3xl  text-amber-400 text-center font-crimson mb-12 animate-fade-in" style={{
                        transform: `translateY(${scrollY * -0.05}px)`
                    }}>
                        Realm Statistics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{
                        transform: `translateY(${scrollY * -0.1}px)`
                    }}>
                        {gameStats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            let hoveredBorder = ` hover:border-amber-400`
                            return (
                                <div key={index} className={`    border border-transparent    rounded-lg  hover:scale-103 ${hoveredBorder} transition-all duration-500 hover-scale hover:backdrop-blur-[2px] animate-fade-in`} style={{ animationDelay: `${index * 0.3}s` }}>
                                    <div className="p-6 text-center">
                                        <IconComponent className="h-8 w-8 text-amber-400 mx-auto mb-3 transition-all duration-500 group-hover:h-10 group-hover:w-10" />
                                        <div className="text-2xl font-bold text-amber-300 mb-1">{stat.value}</div>
                                        <div className="text-slate-400 text-sm">{stat.label}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RelmStats;