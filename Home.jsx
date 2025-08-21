import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'




import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon } from "lucide-react";


import Bosses from './src/components/boss/Bosses';
import ExploreNavigationCards from './src/components/homePageComponents/ExploreNavigationCards';
import AllDemigods from './src/components/demigods/AllDemigods';
import RelmStats from './src/components/homePageComponents/RelmStats';

// import HomePageBgImage from ' ./public/img/eldenRingBg.jpg';
import EldenRingLogo from './public/img/eldenRingLogo.png'

const Home = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mainBosses = [
        { name: "Margit, the Fell Omen", location: "Stormgate", difficulty: "Hard", hp: "4,174", drops: "Talisman Pouch" },
        { name: "Godrick the Grafted", location: "Stormveil Castle", difficulty: "Medium", hp: "6,080", drops: "Remembrance of the Grafted" },
        { name: "Rennala, Queen of the Full Moon", location: "Academy of Raya Lucaria", difficulty: "Medium", hp: "2,428", drops: "Remembrance of the Full Moon Queen" },
        { name: "Starscourge Radahn", location: "Caelid", difficulty: "Extreme", hp: "9,572", drops: "Remembrance of the Starscourge" },
        { name: "Malenia, Blade of Miquella", location: "Haligtree", difficulty: "Extreme", hp: "33,251", drops: "Remembrance of the Rot Goddess" },
        { name: "Mohg, Lord of Blood", location: "Mohgwyn Palace", difficulty: "Hard", hp: "18,389", drops: "Remembrance of the Blood Lord" }
    ];

    const miniBosses = [
        { name: "Tree Sentinel", location: "Limgrave", reward: "Golden Halberd", level: "30+" },
        { name: "Crucible Knight", location: "Stormhill Evergaol", reward: "Aspects of the Crucible", level: "40+" },
        { name: "Bloodhound Knight Darriwil", location: "Forlorn Hound Evergaol", reward: "Bloodhound's Fang", level: "25+" },
        { name: "Flying Dragon Agheel", location: "Dragon-Burnt Ruins", reward: "Dragon Heart", level: "20+" }
    ];

    const weaponCategories = [
        { name: "Straight Swords", count: 24, icon: Sword, description: "Balanced weapons for beginners", effectiveness: "Versatile" },
        { name: "Great Swords", count: 19, icon: Sword, description: "Heavy, powerful two-handed weapons", effectiveness: "High Damage" },
        { name: "Hammers & Maces", count: 23, icon: Hammer, description: "Blunt weapons that crush armor", effectiveness: "Strike Damage" },
        { name: "Shields", count: 35, icon: Shield, description: "Defensive equipment for blocking", effectiveness: "Protection" },
        { name: "Staves & Catalysts", count: 18, icon: Wand2, description: "Magical implements for sorcery", effectiveness: "Magic Scaling" },
        { name: "Bows & Crossbows", count: 16, icon: Target, description: "Ranged weapons for tactical combat", effectiveness: "Range Combat" }
    ];

    const beginnerBuilds = [
        { name: "Vagabond Knight", stats: "STR/VIG", difficulty: "Easy", weapon: "Longsword + Shield", startLevel: "9" },
        { name: "Magic Swordsman", stats: "INT/DEX", difficulty: "Medium", weapon: "Uchigatana + Glintstone Staff", startLevel: "16" },
        { name: "Faith Paladin", stats: "FAI/STR", difficulty: "Easy", weapon: "Mace + Sacred Seal", startLevel: "8" },
        { name: "Dexterity Samurai", stats: "DEX/VIG", difficulty: "Medium", weapon: "Katana + Bow", startLevel: "12" }
    ];

    const gameStats = [
        { label: "Total Bosses", value: "238", icon: Skull },
        { label: "Unique Weapons", value: "309", icon: Sword },
        { label: "Discoverable Areas", value: "150+", icon: MapPin },
        { label: "NPCs & Merchants", value: "80+", icon: Users }
    ];

    const recentDiscoveries = [
        { title: "Hidden Catacombs in Caelid", type: "Location", rarity: "Rare" },
        { title: "Mohg's Secret Phase Transition", type: "Boss Mechanic", rarity: "Epic" },
        { title: "Ancient Dragon Communion", type: "Ritual", rarity: "Legendary" },
        { title: "Miquella's Haligtree Entrance", type: "Secret Path", rarity: "Mythic" }
    ];

    const timeline = [
        { era: "The Age of the Erdtree", event: "Queen Marika's Ascension", year: "??? B.S." },
        { era: "The Shattering", event: "Elden Ring Destroyed", year: "0 A.S." },
        { era: "War of Demigods", event: "Battle of Caelid", year: "50 A.S." },
        { era: "Current Era", event: "The Tarnished Returns", year: "Present" }
    ];
    const quotes = [
        // `"I am Malenia, Blade of Miquella. And I have never known defeat."`,
        // `"Long ago, I was the lord of the battlefield, as Serosh." — Godrick the Grafted`,
        // `"A crown is warranted with strength." — Morgott, the Omen King`,
        // `"I command thee, kneel!" — Radahn, Starscourge`,
        // `"Destined death... restored!" — Maliketh, the Black Blade`,
        // `"Fear the flame... and let it burn." — Hyetta`,
        // `"Hark, Tarnished. You may be our champion, but you are not one of us." — Rykard, Lord of Blasphemy`,
        // `"You will witness true horror." — Mohg, Lord of Blood`,
        // `"I am the Lord of all that is Golden!" — Godfrey, First Elden Lord`,
        // `"Ahh, my apprentice. You've finally come..." — Rennala, Queen of the Full Moon`,
        // `"Great is the bounty of the Erdtree." — Gideon Ofnir, the All-Knowing`,
        // `"Rise now, ye Tarnished... Ye dead who yet live..." — Intro narrator`,
        // `"In Marika's own words: Hark, brave warriors. Hark, my lord Godfrey. We commend your souls to the battlefield." — Item description`,
        // `"Let the record show, I lived in fear... of the fire, but not of man!" — Shabriri`,
        // `"Forgive me... The rhythm of war... it’s in my blood." — Vyke, Knight of the Roundtable`,
        `If you are not dying in every 5 minutes, are you even playing Elden Ring ?`,
        'A Tarnished of no renown. Cross the fog, to the Lands Between. To stand before the Elden Ring, And become the Elden Lord.'
    ];

    function getRandomQuote() {
        const index = Math.floor(Math.random() * quotes.length);
        return quotes[index];
    }
    const [quote, setQuote] = useState('');


    useEffect(() => {
        setQuote(getRandomQuote());
        const interval = setInterval(() => {
            setQuote(getRandomQuote());
        }, 8000); // change quote every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="min-h-screen  overflow-hidden">
                <div className="relative h-screen flex   justify-center">
                    {/* Parallax Background Layers */}
                    <div className="absolute inset-0 overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            style={{
                                transform: `translateY(${scrollY * 0.3}px)`
                            }}
                        >
                            <source src=" https://res.cloudinary.com/doeiccxm7/video/upload/v1755781527/malenia-2.1920x1080_u3rq9w.mp4" type="video/mp4" />
                           
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="absolute inset-0  bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />



                    {/* Text container */}
                    <div
                        className="relative mt-80   z-10 text-center max-w-6xl mx-auto px-4 animate-fade-in"
                        style={{ transform: `translateY(${scrollY * -0.8}px)` }}
                    >

                        {/* <h1 className="text-6xl md:text-8xl font-bold text-amber-400 mb-6 tracking-wider font-cinzel animate-scale-in">
            ELDEN RING
          </h1> */}
                        <h2 className="text-2xl md:text-5xl text-amber-200 mb-8 font-light font-crimson animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            The Lore of the Lands Between
                        </h2>
                        <p className="text-lg h-[56px] text-slate-300 mb-2 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            {quote}
                        </p>
                        <img src={EldenRingLogo} alt="" />
                        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>

                        </div>
                    </div>
                </div>
            </div>
            {/* further included section in home page */}
            <RelmStats />
            <ExploreNavigationCards />

        </>
    );
};

export default Home;