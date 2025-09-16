import React, { useState, useEffect } from 'react';
import { Link } from 'lucide-react';
import './EldenInfo.css'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon } from "lucide-react";


const EldenInfo = () => {


    const exploreNavigationCard = [
    { icon: Sword, title: "Epic Battles", desc: "Witness the legendary conflicts that shaped the realm", link: "/battles", color: "text-red-400", baseBorderColor: 'border-red-300', hoveredColor: 'hover:border-red-500/50', hoveredBg: 'hover:bg-red-300' },
    { icon: Crown, title: "Demigods", desc: "Learn about the children of Queen Marika and their tragic fates", link: "/AllDemigods", color: "text-amber-400", baseBorderColor: 'border-amber-200', hoveredColor: 'hover:border-amber-500/50', hoveredBg: 'hover:bg-amber-200' },
    { icon: Shield, title: "Boss Guides", desc: "Master the patterns and strategies of mighty foes", link: "/bosses", color: "text-indigo-400", baseBorderColor: 'border-indigo-300', hoveredColor: 'hover:border-indigo-500/50', hoveredBg: 'hover:bg-indigo-300' },
    { icon: Skull, title: "Total Bosses (238)", desc: "Complete compendium of all bosses in the Lands Between", link: "/all-bosses", color: "text-purple-400", baseBorderColor: 'border-purple-400', hoveredColor: 'hover:border-purple-500/50', hoveredBg: 'hover:bg-purple-300' },
    { icon: BookOpen, title: "Lore Archives", desc: "Uncover the deep mysteries and hidden truths", link: "/lore", color: "text-cyan-400", baseBorderColor: 'border-cyan-400', hoveredColor: 'hover:border-cyan-500/50', hoveredBg: 'hover:bg-cyan-200' },
    { icon: MapPin, title: "Exploration", desc: "Navigate the vast landscapes and hidden locations", link: "/exploration", color: "text-green-400", baseBorderColor: 'border-green-400', hoveredColor: 'hover:border-green-500/50', hoveredBg: 'hover:bg-green-300' },
    { icon: Users, title: "FAQ", desc: "Find answers to your burning questions", link: "/faq", color: "text-orange-400", baseBorderColor: 'border-orange-400', hoveredColor: 'hover:border-orange-500/50', hoveredBg: 'hover:bg-orange-300' },
    
]
    return (
        <div className='  relative bg-fixed bg-center bg-cover py-40  ' style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756638263/bg2_cdwfjx.webp')" }}>
            <div className='w-[80%] border   border-white m-auto    z-2' style={{
                // transform: `translateY(${scrollY * -0.1}px)`
            }}>
                <div className='border border-white w-[80%] mb-18 m-auto'>
                    <img src="https://res.cloudinary.com/doeiccxm7/image/upload/v1758017414/elden-ring-border-leaf_fend9k.png" alt="golden-leaf" />
                </div>
                <div className='exploreNavigationTop border border-white   mb-5  '>
                    <h3 className='text-4xl text-amber-300 font-medium  font-crimson  mb-3  '>Tarnished of the Lands Between</h3>
                    
                </div>
                <div className={`    exploreNavigationAllCardContainer border border-white   text-white text-center gap-6  `}>
                   <p>The Golden Order has been shattered. Throughout the Lands Between, Demigods holding shards of the Elden Ring squabble and make war over the ruins of a perfect realm, now abandoned by the golden guidance of the Greater Will.</p>
                   <p>As the echoes of this conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend.</p>
                   <p>This is the world of ELDEN RING. As a Tarnished, the Lands Between await your exploration. You will ride through the vast fields, gallop over rolling hills, and leap to the top of rocky crags on your ephemeral steed, revealing a world teeming with life and danger.</p>
                   <p>In the grand fields where your journey begins, mythic creatures prowl the veldts, ineffable horrors lurk in the bogs and marshes, and all manner of soldiers and itinerant warriors are waiting for those who wander unawares. Shy creatures nibble on sweet grasses or scuttle through the underbrush.</p> 
                   <p>Those few inhabitants who are not mad or hostile linger near the broken remnants of cities left behind by the Shattering. They may have answers for you, if you help them. Above them all, ensconced in vast legacies bristling with traps, secrets, and guardians, the Demigods – warped Lords who began as members of a royal and noble family – rule their domains with the unyielding power granted by shards of the Elden Ring.</p>

                </div>
                  <div className='border border-white w-[80%] mt-18 m-auto'>
                    <img src="https://res.cloudinary.com/doeiccxm7/image/upload/v1758017414/elden-ring-border-leaf_fend9k.png" alt="golden-leaf" />
                </div>
            </div>
             <div className="eldenInfoOverlayBg  absolute    bg-black  inset-0  "></div>
        </div>
    );
};

export default EldenInfo;