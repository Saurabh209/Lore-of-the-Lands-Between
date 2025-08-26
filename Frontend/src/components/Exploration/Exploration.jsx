import React from 'react';
import { ArrowLeft, MapPin, Mountain, Castle, TreePine, Skull, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Exploration = () => {

    const regions = [
        {
            name: "Limgrave",
            subtitle: "The Starting Lands",
            description: "Rolling green hills where your journey begins",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: TreePine,
            difficulty: "Beginner",
            boss: "Godrick the Grafted",
            keyLocations: ["Stormveil Castle", "Mistwood", "Weeping Peninsula", "Caelid (South)"],
            secrets: [
                "The sleeping dragon at Caelid Dragonbarrow",
                "Blaidd the Half-Wolf's questline begins here",
                "The Forlorn Hound Evergaol contains Bloodhound Knight Darriwil",
                "Fort Haight holds the first half of the Dectus Medallion"
            ],
            lore: "Once a peaceful realm under Godrick's rule, Limgrave serves as the gateway to the Lands Between. Its proximity to Caelid means the southern regions bear scars from the Scarlet Rot, while the north remains relatively untouched by the greater conflicts of the Shattering."
        },
        {
            name: "Weeping Peninsula",
            subtitle: "The Sorrowful South",
            description: "A melancholic land shrouded in perpetual twilight",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Skull,
            difficulty: "Beginner",
            boss: "Leonine Misbegotten",
            keyLocations: ["Castle Morne", "Ailing Village", "Tombsward Ruins", "Bridge of Sacrifice"],
            secrets: [
                "Irina's questline connects to Edgar and the Grafted Blade Greatsword",
                "The Revenger's Shack holds a powerful spirit summon",
                "Hidden path leads to the Isolated Merchant's Shack",
                "Fourth Church of Marika contains sacred tears"
            ],
            lore: "A land touched by sorrow, where the Misbegotten rebelled against their human oppressors. The peninsula weeps for the injustices committed in the name of order, its very atmosphere heavy with grief and regret."
        },
        {
            name: "Caelid",
            subtitle: "The Scarlet Rot Wasteland",
            description: "A hellscape consumed by rot and madness",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Skull,
            difficulty: "Extreme",
            boss: "Starscourge Radahn",
            keyLocations: ["Redmane Castle", "Sellia Crystal Tunnel", "Dragonbarrow", "Aeonia Swamp"],
            secrets: [
                "The Radahn Festival requires specific NPCs to trigger",
                "Millicent's questline spans multiple regions starting here",
                "The Commander O'Neil fight in Aeonia Swamp",
                "Hidden path behind Sellia leads to the Dragonbarrow"
            ],
            lore: "Once fertile lands ruled by General Radahn, Caelid was transformed into a rotting wasteland when Malenia bloomed the Scarlet Aeonia during their legendary battle. The rot consumed everything, creating one of the most dangerous regions in the Lands Between."
        },
        {
            name: "Dragonbarrow",
            subtitle: "The Eastern Wastes",
            description: "Ancient dragon burial grounds in northern Caelid",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Skull,
            difficulty: "Very High",
            boss: "Elder Dragon Greyoll",
            keyLocations: ["Greyoll's Dragonbarrow", "Divine Tower of Caelid", "Lenne's Rise", "Fort Faroth"],
            secrets: [
                "Greyoll can be killed by attacking her offspring for massive runes",
                "The Caelid Divine Tower is accessible only after Radahn's defeat",
                "Fort Faroth contains the other half of the Dectus Medallion",
                "Ancient dragon incantations can be learned here"
            ],
            lore: "The ancient burial ground of dragons, where the great mother dragon Greyoll lies surrounded by her children. This sacred site has been corrupted by the Scarlet Rot, but the dragons' power remains undiminished."
        },
        {
            name: "Liurnia of the Lakes",
            subtitle: "Realm of Sorcery",
            description: "Misty lakes surrounding the Academy of Raya Lucaria",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Mountain,
            difficulty: "Intermediate",
            boss: "Rennala, Queen of the Full Moon",
            keyLocations: ["Academy of Raya Lucaria", "Caria Manor", "Three Sisters", "Nokron Entrance"],
            secrets: [
                "Ranni's questline begins at Caria Manor",
                "The Academy requires a Glintstone Key to enter",
                "Hidden Carian Study Hall connects to Divine Tower",
                "Siofra River entrance lies beneath Mistwood"
            ],
            lore: "The domain of moon sorcery and the Carian Royal Family. The Academy of Raya Lucaria stands as a center of magical learning, though it has become insular since Queen Rennala's defeat by Radagon. The region holds many secrets of the cosmos and the power of the stars."
        },
        {
            name: "Academy of Raya Lucaria",
            subtitle: "The Center of Learning",
            description: "Towering academy of glintstone sorcery",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Skull,
            difficulty: "Intermediate",
            boss: "Red Wolf of Radagon",
            keyLocations: ["Grand Library", "Academy Classroom", "Church of the Cuckoo", "Debate Parlor"],
            secrets: [
                "The Academy Gate requires a Glintstone Key from the Academy Gate Town",
                "Thops' questline involves academy access and sorceries",
                "Hidden Glintstone Key in the Dragon-Burnt Ruins",
                "Rennala's Great Rune allows character respeccing"
            ],
            lore: "The premier institution of magical learning in the Lands Between. Once a place of vibrant intellectual exchange between faith and sorcery, it sealed itself off after Queen Rennala's heartbreak, becoming isolated from the world's changes."
        },
        {
            name: "Caria Manor",
            subtitle: "The Moonlit Estate",
            description: "Haunted manor of the Carian Royal Family",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Skull,
            difficulty: "Intermediate-High",
            boss: "Royal Knight Loretta",
            keyLocations: ["Three Sisters", "Ranni's Rise", "Renna's Rise", "Seluvis's Rise"],
            secrets: [
                "Ranni the Witch's questline begins here after defeating Loretta",
                "Seluvis's puppet scheme runs parallel to Ranni's quest",
                "Blaidd can be found howling from Forlorn Hound Evergaol",
                "The Carian Inverted Statue reveals the path to Nokron"
            ],
            lore: "The ancestral home of the Carian Royal Family, now haunted by spectral hands and defended by Royal Knight Loretta. The Three Sisters towers house the remnants of Ranni's conspiracy against the Golden Order."
        },
        {
            name: "Leyndell, Royal Capital",
            subtitle: "The Golden City",
            description: "Majestic capital beneath the Erdtree",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Crown,
            difficulty: "High",
            boss: "Morgott, the Omen King",
            keyLocations: ["Erdtree Sanctuary", "Royal Capital", "Subterranean Shunning-Grounds", "Divine Tower of East Altus"],
            secrets: [
                "The Dung Eater's quest leads to the sewers below",
                "Mohg the Omen hides in the Subterranean Shunning-Grounds",
                "Multiple paths exist to reach different areas",
                "The Erdtree's base holds crucial story revelations"
            ],
            lore: "The grand capital of the Golden Order, built around the base of the Erdtree. Once the shining jewel of Marika's empire, it now stands as a fortress protecting the Erdtree from those who would claim the throne of Elden Lord."
        },
        {
            name: "Altus Plateau",
            subtitle: "The Royal Approach",
            description: "Golden fields leading to the capital",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Intermediate-High",
            boss: "Godfrey, First Elden Lord",
            keyLocations: ["Volcano Manor", "Mt. Gelmir", "Windmill Village", "Sainted Hero's Grave"],
            secrets: [
                "Volcano Manor houses the Recusant faction",
                "Rykard can be reached through Tanith's questline",
                "The Dectus Medallion provides lift access",
                "Windmill Village holds a dark festival secret"
            ],
            lore: "The elevated approach to Leyndell, where golden wheat once grew in abundance. Mt. Gelmir looms to the west, home to the blasphemous Volcano Manor where Rykard rules as the God-Devouring Serpent."
        },
        {
            name: "Mt. Gelmir",
            subtitle: "The Blasphemous Mountain",
            description: "Volcanic peaks where heretics gather",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Crown,
            difficulty: "High",
            boss: "Rykard, Lord of Blasphemy",
            keyLocations: ["Volcano Manor", "Temple of Eiglay", "Gelmir Hero's Grave", "Wyndham Catacombs"],
            secrets: [
                "Tanith's assassination contracts unlock manor progression",
                "Patches' questline continues here from Murkwater Cave",
                "The Serpent-Hunter weapon is crucial for the Rykard fight",
                "Rya's questline reveals the truth about the manor's inhabitants"
            ],
            lore: "A volcanic mountain that houses the blasphemous Volcano Manor. Here, Praetor Rykard fed himself to the God-Devouring Serpent, creating a sanctuary for those who oppose the Golden Order through violence and heresy."
        },
        {
            name: "Mountaintops of the Giants",
            subtitle: "The Forbidden Lands",
            description: "Frozen peaks where the Fire Giant dwells",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Mountain,
            difficulty: "Very High",
            boss: "Fire Giant",
            keyLocations: ["Flame Peak", "Forge of the Giants", "Miquella's Haligtree", "Consecrated Snowfield"],
            secrets: [
                "The Fire Giant guards the Forge of the Giants",
                "A secret medallion leads to Consecrated Snowfield",
                "Miquella's Haligtree can only be accessed through specific steps",
                "The path to the Kiln lies beyond the Fire Giant"
            ],
            lore: "The cursed lands where Queen Marika's war against the Giants reached its climax. The last Fire Giant tends the flame that could burn the Erdtree, waiting for one worthy to claim its power and challenge the Golden Order itself."
        },
        {
            name: "Consecrated Snowfield",
            subtitle: "The Hidden Frozen Wastes",
            description: "Secret snowy realm leading to the Haligtree",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Extreme",
            boss: "Commander Niall",
            keyLocations: ["Ordina, Liturgical Town", "Yelough Anix Tunnel", "Cave of the Forlorn", "Apostate Derelict"],
            secrets: [
                "The Haligtree Secret Medallion (both halves) is required for access",
                "Ordina's puzzle requires lighting four candles while avoiding Black Knife Assassins",
                "The Apostate Derelict contains Latenna's questline conclusion",
                "Hidden Albinauric village lies in the southern reaches"
            ],
            lore: "A secret realm accessible only to those who possess both halves of the Haligtree Secret Medallion. This frozen wasteland serves as the final approach to Miquella's Haligtree, sanctuary for the oppressed and cursed."
        },
        {
            name: "Miquella's Haligtree",
            subtitle: "The Sanctuary Tree",
            description: "Divine tree built for the outcast and afflicted",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Extreme",
            boss: "Malenia, Blade of Miquella",
            keyLocations: ["Haligtree Town", "Prayer Room", "Elphael, Brace of the Haligtree", "Drainage Channel"],
            secrets: [
                "Millicent's questline concludes here with multiple endings",
                "The Unalloyed Gold Needle can cure Malenia's rot (temporarily)",
                "Hidden Cleanrot Knights serve as both enemies and allies",
                "Miquella's cocoon reveals the truth about his disappearance"
            ],
            lore: "Miquella's attempt to create an alternative to the Erdtree, watered with his own blood to provide sanctuary for Albinaurics, Omens, and others rejected by the Golden Order. Though Miquella was taken, his tree still shelters the outcasts of the world."
        },
        {
            name: "Crumbling Farum Azula",
            subtitle: "The Floating Ruins",
            description: "Ancient dragon city suspended in time",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Extreme",
            boss: "Maliketh, the Black Blade",
            keyLocations: ["Dragon Temple", "Beside the Great Bridge", "Tempest-Facing Balcony", "Temple Rooftop"],
            secrets: [
                "The area exists outside normal time and space",
                "Gurranq the Beast Clergyman is revealed to be Maliketh",
                "Ancient dragon incantations can be learned from the Dragon Communion",
                "The Dragonlord Placidusax fight is completely optional but significant"
            ],
            lore: "The ancient seat of dragonlord power, floating in a storm beyond time. Here dwells Dragonlord Placidusax, the first Elden Lord who still awaits his god's return. Maliketh, guardian of Destined Death, makes his final stand in these crumbling halls."
        },

        // UNDERGROUND REGIONS
        {
            name: "Siofra River",
            subtitle: "The Underground River",
            description: "Mystical underground realm beneath Mistwood",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Intermediate-High",
            boss: "Ancestor Spirit",
            keyLocations: ["Siofra River Well", "Ancestral Woods", "Worshippers' Woods", "Hallowhorn Grounds"],
            secrets: [
                "The Ancestor Spirit requires lighting flames across the map",
                "Ancestral Followers guard powerful spirit ashes",
                "The artificial night sky shows stars from another age",
                "Hidden lifts connect to other underground areas"
            ],
            lore: "An underground realm that exists beneath the Lands Between, where Ancestral Spirits roam eternal hunting grounds. The artificial sky above shows stars from an age before the current cosmic order, suggesting this realm exists outside normal time."
        },
        {
            name: "Nokron, Eternal City",
            subtitle: "The Fallen City of Silver",
            description: "Underground city cast down by the Greater Will",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "High",
            boss: "Mimic Tear",
            keyLocations: ["Night's Sacred Ground", "Ancestral Woods", "Nokron Aqueduct", "Regal Ancestor Spirit"],
            secrets: [
                "Accessible only after Radahn's defeat opens the path",
                "The Fingerslayer Blade is crucial for Ranni's questline",
                "Silver Tears can mimic any form of life perfectly",
                "The Regal Ancestor Spirit requires lighting more flames than its regular counterpart"
            ],
            lore: "One of the Eternal Cities cast underground by the Greater Will as punishment for their blasphemy. The Nox who dwell here created artificial life from silver tears, challenging the gods' monopoly on creating consciousness and souls."
        },
        {
            name: "Nokstella, Eternal City",
            subtitle: "The City of Silver Stars",
            description: "Second eternal city deep underground",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "High",
            boss: "Naturalborn of the Void, Astel",
            keyLocations: ["Nokstella Waterfall Basin", "Grand Cloister", "Lake of Rot", "Astel's Arena"],
            secrets: [
                "The Lake of Rot requires the Flame of Frenzy to traverse safely",
                "Astel guards access to the Moonlight Altar",
                "Miniature Ranni doll speaks when examined at specific locations",
                "The Grand Cloister contains powerful night sorceries"
            ],
            lore: "The deeper of the two Eternal Cities, where the Nox continued their work with silver tears and artificial life. The presence of Astel, a creature of the void, suggests this city delved into cosmic forces beyond even the other Outer Gods' understanding."
        },
        {
            name: "Lake of Rot",
            subtitle: "The Scarlet Underground Sea",
            description: "Vast underground lake of pure Scarlet Rot",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Extreme",
            boss: "Dragonkin Soldier of Nokstella",
            keyLocations: ["Grand Cloister", "Rot Lake Shore", "Temple of Eiglay Entrance", "Astel's Domain"],
            secrets: [
                "Mushrooms throughout the lake provide temporary footing",
                "The Scorpion's Stinger weapon can only be found here",
                "Running across requires careful timing and Rot resistance",
                "Connects the underground cities to the surface world"
            ],
            lore: "A massive underground lake of pure Scarlet Rot that demonstrates the true extent of the Rot God's influence. This sea of decay connects various underground realms and serves as a testament to the power of one of the most dangerous Outer Gods."
        },
        {
            name: "Ainsel River",
            subtitle: "The Underground Current",
            description: "Subterranean river system filled with ancient secrets",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Intermediate-High",
            boss: "Dragonkin Soldier",
            keyLocations: ["Ainsel River Well", "Uhl Palace Ruins", "Nokstella Waterfall Basin", "Lake of Rot Shoreline"],
            secrets: [
                "Ranni's questline requires exploring this area thoroughly",
                "The Miniature Ranni doll provides guidance when examined",
                "Ant enemies guard valuable smithing materials",
                "Multiple connections to other underground areas exist"
            ],
            lore: "Another branch of the underground river system that flows beneath the Lands Between. Like Siofra River, it exists in a realm where time flows differently, and ancient creatures that predate the current age still roam."
        },
        {
            name: "Deeproot Depths",
            subtitle: "The Root of All",
            description: "The deepest underground realm where the Erdtree's roots grow",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Very High",
            boss: "Fia's Champions",
            keyLocations: ["The Great Waterfall Crest", "Root-Facing Cliffs", "Prince of Death's Throne", "Across the Roots"],
            secrets: [
                "Fia's questline culminates here with the Mending Rune of the Death-Prince",
                "Godwyn's corrupted remains are found at the roots of the Erdtree",
                "The Crucible Knights guard ancient secrets",
                "Fortissax, the Lightning Dragon, can be fought in Fia's dream"
            ],
            lore: "The deepest point beneath the Lands Between, where the Erdtree's roots spread throughout the underground. Here lies the corrupted body of Godwyn the Golden, whose death-tainted form spreads Deathroot throughout the tree's root system."
        },
        {
            name: "Subterranean Shunning-Grounds",
            subtitle: "The Capital's Hidden Shame",
            description: "Sewers beneath Leyndell where Omens are imprisoned",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "High",
            boss: "Mohg, the Omen",
            keyLocations: ["Cathedral of the Forsaken", "Forsaken Depths", "Frenzied Flame Proscription", "Leyndell Catacombs"],
            secrets: [
                "The Dung Eater's questline leads deep into these tunnels",
                "The Three Fingers await in the deepest chamber",
                "Mohg the Omen guards access to deeper areas",
                "The Frenzied Flame ending can be obtained here"
            ],
            lore: "The shameful underside of the Golden Order's capital, where Omens are imprisoned and tortured. Deep beneath lies the domain of the Three Fingers, where the Frenzied Flame waits to embrace those driven to despair by the Order's cruelty."
        },

        // ADDITIONAL NOTABLE AREAS
        {
            name: "Mohgwyn Palace",
            subtitle: "Dynasty of Blood",
            description: "Mohg's bloodsoaked realm in the shadow of the Erdtree",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Extreme",
            boss: "Mohg, Lord of Blood",
            keyLocations: ["Palace Approach Ledge-Road", "Dynasty Mausoleum", "Cocoon of the Empyrean", "Blood Lake"],
            secrets: [
                "Accessible through Varre's questline or a hidden teleporter",
                "The albinaurics here can be farmed for massive rune gains",
                "Miquella's cocoon reveals his kidnapping by Mohg",
                "The Purifying Crystal Tear counters Mohg's blood ritual"
            ],
            lore: "Mohg's twisted realm built in mockery of the Golden Order, where blood sacrifice and pain are worshipped as sacred. Here the Lord of Blood tends to his kidnapped prize, Miquella, hoping to elevate him to godhood as his consort."
        },
        {
            name: "Stormveil Castle",
            subtitle: "The Grafted Stronghold",
            description: "Ancient castle ruled by the weakest demigod",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "Beginner-Intermediate",
            boss: "Godrick the Grafted",
            keyLocations: ["Gatefront Ruins", "Stormgate", "Rampart Tower", "Secluded Cell"],
            secrets: [
                "Nepheli Loux can be summoned for the Godrick fight",
                "Multiple paths through the castle exist, including a secret passage",
                "The Rusty Key opens crucial doors within the castle",
                "Gostoc's treachery can affect item drops and quest outcomes"
            ],
            lore: "The ancient castle that guards the approach to northern Limgrave, now ruled by Godrick the Grafted. Once a proud fortress, it has become a charnel house where the desperate demigod grafts the limbs of the fallen onto his own weak form."
        },
        {
            name: "Redmane Castle",
            subtitle: "The Festival Grounds",
            description: "Radahn's stronghold where the festival of combat is held",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Castle,
            difficulty: "High",
            boss: "Crucible Knight and Misbegotten Warrior",
            keyLocations: ["Plaza of Challengers", "Festival Grounds", "Chamber Outside Plaza", "Imps' Catacombs"],
            secrets: [
                "The castle transforms completely when the festival begins",
                "Multiple NPCs gather here for the Radahn fight",
                "Jerren oversees the festival and has connections to Sellen's quest",
                "The castle's layout changes based on story progression"
            ],
            lore: "General Radahn's mighty fortress in southern Caelid, now the site of a festival where warriors gather to give the mad demigod an honorable death in combat. The castle itself bears scars from the battle between Malenia and Radahn."
        }
    ];

    const getDifficultyColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'beginner': return 'text-green-400 bg-green-900/30 border-green-700';
            case 'intermediate': return 'text-blue-400 bg-blue-900/30 border-blue-700';
            case 'intermediate-high': return 'text-yellow-400 bg-yellow-900/30 border-yellow-700';
            case 'high': return 'text-orange-400 bg-orange-900/30 border-orange-700';
            case 'very high': return 'text-red-400 bg-red-900/30 border-red-700';
            case 'extreme': return 'text-purple-400 bg-purple-900/30 border-purple-700';
            default: return 'text-gray-400 bg-gray-900/30 border-gray-700';
        }
    };




    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-green-900">
            {/* Header */}
            <div className="bg-slate-900/80 py-8 px-4">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">
                        Exploration Guide
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Navigate the vast and dangerous world of the Lands Between. From the gentle hills of Limgrave
                        to the frozen peaks of the Mountaintops, discover every secret these lands hold.
                    </p>
                </div>
            </div>

            {/* Regions */}
            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto space-y-12">
                    {regions.map((region, index) => (
                        <div key={index} className="bg-slate-800/90 border border-green-700/50 overflow-hidden hover:border-green-600 transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                                {/* Image */}
                                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                                    <img
                                        src={region.image}
                                        alt={region.name}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <region.icon className="h-8 w-8 text-green-400" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className={`px-3 py-1 rounded text-sm font-semibold border ${getDifficultyColor(region.difficulty)}`}>
                                            {region.difficulty}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-3 p-6 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-green-300 mb-1">{region.name}</h3>
                                        <p className="text-green-500 font-medium mb-2">{region.subtitle}</p>
                                        <p className="text-slate-400 mb-3">{region.description}</p>
                                        <p className="text-slate-300 text-sm leading-relaxed">{region.lore}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Key Locations */}
                                        <div>
                                            <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                Key Locations
                                            </h4>
                                            <div className="space-y-1">
                                                {region.keyLocations.map((location, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-green-400 rounded-full" />
                                                        <span className="text-slate-300 text-sm">{location}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Boss */}
                                        <div>
                                            <h4 className="text-green-400 font-semibold mb-2">Main Boss</h4>
                                            <p className="text-slate-300 text-sm bg-slate-700/30 p-2 rounded">
                                                {region.boss}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Secrets */}
                                    <div>
                                        <h4 className="text-green-400 font-semibold mb-2">Hidden Secrets</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {region.secrets.map((secret, idx) => (
                                                <div key={idx} className="bg-slate-700/30 p-2 rounded border-l-4 border-green-400/50">
                                                    <p className="text-slate-300 text-xs">{secret}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tips Section */}
            <div className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Exploration Tips</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/90 border-green-700/50">
                            <div>
                                <div className="text-green-300">Always Explore Thoroughly</div>
                            </div>
                            <div>
                                <p className="text-slate-300 text-sm">
                                    The Lands Between rewards curiosity. Check behind every building,
                                    climb every cliff, and investigate every suspicious area.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-800/90 border-green-700/50">
                            <div>
                                <div className="text-green-300">Follow the Sites of Grace</div>
                            </div>
                            <div>
                                <p className="text-slate-300 text-sm">
                                    The golden rays from Sites of Grace point toward your next objective,
                                    but don't be afraid to ignore them and forge your own path.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-800/90 border-green-700/50">
                            <div>
                                <div className="text-green-300">Talk to Every NPC</div>
                            </div>
                            <div>
                                <p className="text-slate-300 text-sm">
                                    NPCs provide crucial information, questlines, and services.
                                    Exhaust all dialogue options and check back frequently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exploration;