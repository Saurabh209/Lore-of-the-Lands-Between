import React, { useState, useEffect } from 'react';
import { Link } from 'lucide-react';
import './ExploreNavigationCards.css'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon } from "lucide-react";

const exploreNavigationCard = [
    { icon: Sword, title: "Epic Battles", desc: "Witness the legendary conflicts that shaped the realm", link: "/battles", color: "text-red-400", baseBorderColor: 'border-red-300', hoveredColor: 'hover:border-red-500/50', hoveredBg: 'hover:bg-red-300' },
    { icon: Crown, title: "Demigods", desc: "Learn about the children of Queen Marika and their tragic fates", link: "/AllDemigods", color: "text-amber-400", baseBorderColor: 'border-amber-200', hoveredColor: 'hover:border-amber-500/50', hoveredBg: 'hover:bg-amber-200' },
    { icon: Shield, title: "Boss Guides", desc: "Master the patterns and strategies of mighty foes", link: "/bosses", color: "text-indigo-400", baseBorderColor: 'border-indigo-300', hoveredColor: 'hover:border-indigo-500/50', hoveredBg: 'hover:bg-indigo-300' },
    { icon: Skull, title: "Total Bosses (238)", desc: "Complete compendium of all bosses in the Lands Between", link: "/all-bosses", color: "text-purple-400", baseBorderColor: 'border-purple-400', hoveredColor: 'hover:border-purple-500/50', hoveredBg: 'hover:bg-purple-300' },
    { icon: BookOpen, title: "Lore Archives", desc: "Uncover the deep mysteries and hidden truths", link: "/lore", color: "text-cyan-400", baseBorderColor: 'border-cyan-400', hoveredColor: 'hover:border-cyan-500/50', hoveredBg: 'hover:bg-cyan-200' },
    { icon: MapPin, title: "Exploration", desc: "Navigate the vast landscapes and hidden locations", link: "/exploration", color: "text-green-400", baseBorderColor: 'border-green-400', hoveredColor: 'hover:border-green-500/50', hoveredBg: 'hover:bg-green-300' },
    { icon: Users, title: "FAQ", desc: "Find answers to your burning questions", link: "/faq", color: "text-orange-400", baseBorderColor: 'border-orange-400', hoveredColor: 'hover:border-orange-500/50', hoveredBg: 'hover:bg-orange-300' },
    
]


const ExploreNavigationCards = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className='exploreNavigationCardMainContainer relative bg-fixed bg-center bg-cover ' style={{ backgroundImage: "url('/img//backgroundCollection/bg1.png')" }}>
            <div className='w-[80%] m-auto my-12 z-2' style={{
                // transform: `translateY(${scrollY * -0.1}px)`
            }}>
                <div className='exploreNavigationTop   mb-5  '>
                    <h3 className='text-4xl text-amber-300 font-medium  font-crimson  mb-3  '>EXPLORE THE LANDS BETWEEN</h3>
                    <p>Choose your path through the shattered realm</p>
                </div>
                <div className={`    exploreNavigationAllCardContainer   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  `}>
                    {exploreNavigationCard.map((item, index) => {
                        const IconComponent = item?.icon;
                        const hoverBorder = `${item?.hoveredColor}`
                        const hovereBg = `${item?.hoveredBg}`

                        return (
                            <div key={index} className={`group border border-white/1  bg-[#16223e73] hover:bg-[#0f172ac2] backdrop-blur-[4px] ${hoverBorder} hover:scale-103     exploreNavigationSingleCard  `} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div >
                                    <IconComponent className={`h-8 w-8  ${item?.color}  group-hover:scale-110 transition-transform duration-300`} />
                                    <h3 className={` ${item?.color} `}>{item?.title}</h3>
                                </div>
                                <div>
                                    <p>{item?.desc}</p>
                                </div>
                                <div className=''>
                                    <a href={item?.link}>
                                        <button className={` ${item?.color}  border border-${item?.color}-400 ${hovereBg} hover:text-black `}>Discover</button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
             <div className="overlayBackground absolute    bg-black  inset-0  "></div>
        </div>
    );
};

export default ExploreNavigationCards;