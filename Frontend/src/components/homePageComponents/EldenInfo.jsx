import React, { useState, useEffect } from 'react';
import { Link } from 'lucide-react';
import './EldenInfo.css'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon } from "lucide-react";
import KeyFeature from './KeyFeature';
import ScrollReveal from '../../../ReactBitsComponents/ScrollReveal/ScrollReveal';
import ShinyText from '../../../ReactBitsComponents/ShinyText'
import Armors from './Armors';

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

    const scrollWallpaper = [
        { url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758017432/ER-Tarnished-Edition-Key-Feature-Screenshot-2_ncsga8.webp" },
        { url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758017431/ER-Tarnished-Edition-Key-Feature-Screenshot-1_mtkng1.webp" },
        { url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758017430/ER-Tarnished-Edition-Key-Feature-Screenshot-3_zo2u98.webp" },

    ]
    return (
        <div className='  relative bg-fixed bg-center bg-cover pt-40 pb-20  ' style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756638263/bg2_cdwfjx.webp')" }}>
            <div className='  m-auto    z-2' style={{
                // transform: `translateY(${scrollY * -0.1}px)`
            }}>
                <KeyFeature />
                {/* upper golden leaf  */}
                <div className=' w-[90%] mb-4 m-auto      md:w-[80%] md:mb-8 lg:w-[50%] '>
                    <img src="https://res.cloudinary.com/doeiccxm7/image/upload/v1758017414/elden-ring-border-leaf_fend9k.png" alt="golden-leaf" />
                </div>

                <div className=' eldenInfoHeadingContainer    mb-2  sm-mb-4   '>
                    <h3 className='text-lg   font-medium  font-crimson    sm:text-2xl  md:text-3xl  lg:text-4xl  '>Tarnished of the Lands Between</h3>

                </div>
                <div className={` w-[95%] m-auto   exploreNavigationAllCardContainer  text-white text-center gap-6    sm:w-[70%] lg:w-[50%]`}>

                    <p className='text-xs leading-tight sm:text-sm'>The Golden Order has been shattered. Throughout the Lands Between, Demigods holding shards of the <span> Elden Ring </span> squabble and make war over the ruins of a perfect realm, now abandoned by the golden guidance of the Greater Will.</p>
                    <p className='text-xs leading-tight sm:text-sm'>As the echoes of this conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend.</p>
                    <p className='text-xs leading-tight sm:text-sm'>This is the world of <span> ELDEN RING </span>. As a Tarnished, the Lands Between await your exploration. You will ride through the vast fields, gallop over rolling hills, and leap to the top of rocky crags on your ephemeral steed, revealing a world teeming with life and danger.</p>
                    <p className='text-xs leading-tight sm:text-sm'>In the grand fields where your journey begins, mythic creatures prowl the veldts, ineffable horrors lurk in the bogs and marshes, and all manner of soldiers and itinerant warriors are waiting for those who wander unawares. Shy creatures nibble on sweet grasses or scuttle through the underbrush.</p>
                    <p className='text-xs leading-tight sm:text-sm'>Those few inhabitants who are not mad or hostile linger near the broken remnants of cities left behind by the Shattering. They may have answers for you, if you help them. Above them all, ensconced in vast legacies bristling with traps, secrets, and guardians, the Demigods – warped Lords who began as members of a royal and noble family – rule their domains with the unyielding power granted by shards of the <span> Elden Ring</span> .</p>

                </div>

                {/* lower golden leaf */}
                <div className=' w-[90%] mt-4 mb-8  m-auto      md:w-[80%] md:mb-8  lg:w-[50%] '>
                    <img src="https://res.cloudinary.com/doeiccxm7/image/upload/v1758017414/elden-ring-border-leaf_fend9k.png" alt="golden-leaf" />
                </div>

                {/* Armor component */}
                <Armors />


                <div className=' w-[90%] mt-8 mb-8  m-auto      md:w-[80%]  lg:w-[50%] '>
                    <img src="https://res.cloudinary.com/doeiccxm7/image/upload/v1758017414/elden-ring-border-leaf_fend9k.png" alt="golden-leaf" />
                </div>


                <div className={` w-[95%] m-auto   exploreNavigationAllCardContainer    text-white text-center gap-6    sm:w-[70%] lg:w-[50%]`}>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text=" The guidance of lost graces – should you find them - will put you on a road to re-take these lands from the Demigods through might and magic, but you need not follow their path."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />

                    </p>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text=" The choice is yours. Do you crave power, or do you seek understanding? Decide for yourself, then build your character as you see fit."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                    </p>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text=" Try dozens of skills and find one to best suit your style. Practice stealth to avoid danger or catch enemies unaware. Use the environment, the weather, and the time of day to gain an advantage. Learn the art of combat , where you must read your enemy’s intentions and a well-timed dodge or parry could be the difference between life and death. Ride your steed into battle against mounted mercenaries and cut them from their horses. Master arcane spells from the masters that still linger among the ruins of the war. Summon familiar spirits to even the odds against you or call on your fellow Tarnished to fight at your side and share the burden as you explore. Or, delve into the complex, bloody history of the Shattering and discover the lost secrets of the Demigods and their kin. All these paths are possible, and more."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />

                    </p>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text="  Ultimately, your journey will be defined by the strength of your own ambition. The greater your goals, the greater the challenge will be. Should you choose to claim the Lands Between as your birthright then yes, you must fight."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                    </p>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text="  And yes, you may die."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />

                    </p>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text=" But you will return to fight again."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />


                    </p>
                    <p className='text-xs leading-tight sm:text-sm'>
                        <ShinyText
                            text=" For that is how a champion – or a Lord – is born."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                    </p>
                </div>

                <div className=' w-[60%] mt-8 mb-8  m-auto      md:w-[80%]  lg:w-[50%] '>
                    <img className='m-auto' src="https://res.cloudinary.com/doeiccxm7/image/upload/v1758017415/Elden-ring-ornament-icon-feather-two_p95p8d.png" />
                </div>
            </div>
            <div className="eldenInfoOverlayBg  absolute    bg-black  inset-0  "></div>
        </div>
    );
};

export default EldenInfo;