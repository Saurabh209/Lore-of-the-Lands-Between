

import { ArrowLeft, Shield, Sword, Heart, Zap, AlertTriangle } from "lucide-react";
import MaleniaPhoto from '/img/MaleniaPhoto.jpg'
import RadhanPhoto from '/img/RadhanPhoto.jpg'
import MoghPhoto from '/img/MoghPhoto.jpg'
import MalekithPhoto from '/img/MalekithPhoto.jpg'


import { useRef } from "react";

const Bosses = () => {
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      console.log("🔥 Event Triggered after 2s hover!");
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
  };






  const bosses = [
    {
      name: "Malenia, Blade of Miquella",
      type: "Demigod",
      difficulty: "Extreme",
      health: "33,251 HP",
      image: MaleniaPhoto,
      weaknesses: ["Frost", "Fire", "Bleed Resistance"],
      resistances: ["Scarlet Rot (Immune)", "Holy"],
      moves: [
        {
          name: "Waterfowl Dance",
          description: "Devastating multi-hit aerial combo. Run away during windup, then dodge through the final flurry.",
          danger: "Extreme"
        },
        {
          name: "Scarlet Aeonia",
          description: "Large AoE rot explosion. Creates rot pools. Stay far away.",
          danger: "High"
        },
        {
          name: "Phantom Spirits",
          description: "Summons spectral copies. Focus on the real Malenia (glowing eyes).",
          danger: "Medium"
        }
      ],
      strategy: "Stay aggressive but patient. Use bleed weapons. Learn to dodge Waterfowl Dance. Bring rot resistance.",
      phases: 2,
      rewards: ["Malenia's Great Rune", "Hand of Malenia", "Remembrance of the Rot Goddess"]
    },
    {
      name: "Starscourge Radahn",
      type: "Demigod",
      difficulty: "High",
      health: "9,572 HP",
      image: RadhanPhoto,
      weaknesses: ["Scarlet Rot", "Bleed"],
      resistances: ["Holy", "Magic"],
      moves: [
        {
          name: "Meteor Attack",
          description: "Radahn launches into the sky and crashes down. Look for the purple indicator and dodge.",
          danger: "Extreme"
        },
        {
          name: "Gravity Pull",
          description: "Pulls you towards him before a sword slam. Use Torrent to escape.",
          danger: "High"
        },
        {
          name: "Arrow Barrage",
          description: "Fires magic arrows. Use the battlefield debris as cover.",
          danger: "Medium"
        }
      ],
      strategy: "Use the festival NPCs as distraction. Fight on horseback. Watch for meteor attack indicator.",
      phases: 2,
      rewards: ["Radahn's Great Rune", "Remembrance of the Starscourge", "Starscourge Greatsword"]
    },
    {
      name: "Mohg, Lord of Blood",
      type: "Demigod",
      difficulty: "High",
      health: "18,389 HP",
      image: MoghPhoto,
      weaknesses: ["Physical", "Bleed Resistance"],
      resistances: ["Fire", "Blood Loss (Immune)"],
      moves: [
        {
          name: "Nihil",
          description: "Unavoidable curse that drains health three times. Use Purifying Crystal Tear.",
          danger: "Extreme"
        },
        {
          name: "Bloodflame Attacks",
          description: "Trident swipes that inflict bleed buildup. Stay mobile.",
          danger: "High"
        },
        {
          name: "Blood Ritual",
          description: "Creates blood pools that explode. Avoid standing in blood.",
          danger: "Medium"
        }
      ],
      strategy: "Bring Purifying Crystal Tear for Nihil. Use hit-and-run tactics. Avoid blood pools.",
      phases: 2,
      rewards: ["Mohg's Great Rune", "Remembrance of the Blood Lord", "Mohgwyn's Sacred Spear"]
    },
    {
      name: "Maliketh, the Black Blade",
      type: "Beast/Demigod",
      difficulty: "Very High",
      health: "10,620 HP",
      image: MalekithPhoto,
      weaknesses: ["Bleed", "Frost"],
      resistances: ["Holy", "Death"],
      moves: [
        {
          name: "Destined Death",
          description: "Black flame attacks that reduce max HP. Keep distance and heal frequently.",
          danger: "Extreme"
        },
        {
          name: "Blade Flurry",
          description: "Rapid sword combinations. Roll towards him to avoid most hits.",
          danger: "High"
        },
        {
          name: "Pillar Slam",
          description: "Destroys arena pillars. Use them for cover but be ready to move.",
          danger: "Medium"
        }
      ],
      strategy: "Use the Blasphemous Claw to parry his Destined Death attacks. Stay close to avoid ranged attacks.",
      phases: 2,
      rewards: ["Remembrance of the Black Blade", "Black Blade", "Maliketh's Black Blade"]
    },
    {
      name: "Crucible Knight Ordovis",
      type: "Crucible Knight",
      difficulty: "Medium",
      health: "4,227 HP",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Strike damage", "Lightning"],
      resistances: ["Holy", "Fire"],
      moves: [
        {
          name: "Crucible Tail",
          description: "Grows a tail for sweeping attacks. Jump or roll to avoid.",
          danger: "Medium"
        },
        {
          name: "Wing Slam",
          description: "Sprouts wings and slams down. Creates shockwave.",
          danger: "High"
        },
        {
          name: "Shield Bash Combo",
          description: "Multiple shield attacks followed by sword thrust.",
          danger: "Medium"
        }
      ],
      strategy: "Use heavy weapons and guard counters. Attack after his combo strings end.",
      phases: 1,
      rewards: ["Crucible Feather Talisman", "Ordovis's Greatsword"],
      location: "Auriza Hero's Grave",
      region: "Altus Plateau"
    },
    {
      name: "Margit, the Fell Omen",
      type: "Omen",
      difficulty: "Medium",
      health: "4,174 HP",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Bleed", "Margit's Shackle"],
      resistances: ["Holy", "Physical"],
      moves: [
        {
          name: "Spectral Weapons",
          description: "Conjures golden weapons from thin air. Watch for telltale shimmer.",
          danger: "High"
        },
        {
          name: "Hammer Slam",
          description: "Overhead hammer attack with delayed timing. Roll at the last second.",
          danger: "Medium"
        },
        {
          name: "Dagger Flurry",
          description: "Quick dagger combo followed by hammer. Stay at medium range.",
          danger: "Medium"
        }
      ],
      strategy: "Use Margit's Shackle for free hits. Summon Sorcerer Rogier. Watch for delayed attacks.",
      phases: 1,
      rewards: ["Talisman Pouch"],
      location: "Stormveil Castle",
      region: "Limgrave"
    },
    {
      name: "Godrick the Grafted",
      type: "Demigod",
      difficulty: "Medium",
      health: "6,080 HP",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Fire", "Bleed"],
      resistances: ["Holy", "Lightning"],
      moves: [
        {
          name: "Dragon Hand",
          description: "Grafts dragon head in phase 2. Breathes fire and swipes. Stay behind him.",
          danger: "High"
        },
        {
          name: "Storm Stomp",
          description: "AoE wind attack that knocks down. Jump to avoid or stay far away.",
          danger: "Medium"
        },
        {
          name: "Axe Combo",
          description: "Multi-hit axe swings. Roll through or use shield.",
          danger: "Medium"
        }
      ],
      strategy: "Summon Nepheli Loux. Target the dragon head in phase 2. Use the arena's cover.",
      phases: 2,
      rewards: ["Godrick's Great Rune", "Remembrance of the Grafted", "Axe of Godrick"],
      location: "Stormveil Castle",
      region: "Limgrave"
    },
    {
      name: "Rennala, Queen of the Full Moon",
      type: "Demigod",
      difficulty: "Medium",
      health: "3,309 HP",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Physical", "Strike damage"],
      resistances: ["Magic (Immune)", "Lightning"],
      moves: [
        {
          name: "Comet Azur",
          description: "Massive magic beam. Run to the side to avoid.",
          danger: "Extreme"
        },
        {
          name: "Spirit Summons",
          description: "Summons various creatures. Focus on Rennala, not the summons.",
          danger: "Medium"
        },
        {
          name: "Full Moon",
          description: "Large magic projectile. Roll to the side or block.",
          danger: "High"
        }
      ],
      strategy: "Target glowing students in phase 1. Stay mobile in phase 2. Ignore most summons.",
      phases: 2,
      rewards: ["Rennala's Great Rune", "Remembrance of the Full Moon Queen", "Great Glintstone Shard"],
      location: "Raya Lucaria Academy",
      region: "Liurnia"
    },
    {
      name: "Morgott, the Omen King",
      type: "Omen",
      difficulty: "High",
      health: "10,396 HP",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Bleed", "Frost"],
      resistances: ["Holy", "Physical"],
      moves: [
        {
          name: "Holy Sword Rain",
          description: "Conjures multiple holy swords that rain down. Keep moving.",
          danger: "High"
        },
        {
          name: "Cursed Blood Projectiles",
          description: "Throws blood projectiles in arcs. Roll or strafe to avoid.",
          danger: "Medium"
        },
        {
          name: "Phase Transition",
          description: "Becomes more aggressive in phase 2. Longer combos and new attacks.",
          danger: "High"
        }
      ],
      strategy: "Similar to Margit but faster. Use Margit's Shackle early. Stay aggressive in phase 2.",
      phases: 2,
      rewards: ["Morgott's Great Rune", "Remembrance of the Omen King", "Morgott's Cursed Sword"],
      location: "Leyndell, Royal Capital",
      region: "Altus Plateau"
    },

    {
      name: "Fire Giant",
      type: "Giant",
      difficulty: "High",
      health: "17,013 HP",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Lightning", "Frostbite"],
      resistances: ["Fire (Immune)", "Physical"],
      moves: [
        {
          name: "Fire Breath",
          description: "Sweeping fire breath attack. Stay behind his ankles.",
          danger: "High"
        },
        {
          name: "Rolling Attack",
          description: "Rolls across the battlefield. Use Torrent to escape quickly.",
          danger: "Extreme"
        },
        {
          name: "Fell God Eye",
          description: "Opens third eye in phase 2. Massive AoE fire attacks.",
          danger: "Extreme"
        }
      ],
      strategy: "Target his ankles in phase 1. Use Torrent for mobility. In phase 2, attack his hands/wrists.",
      phases: 2,
      rewards: ["Remembrance of the Fire Giant", "Giant's Red Braid"],
      location: "Mountaintops of the Giants",
      region: "Mountaintops of the Giants"
    },

    {
      name: "Rykard, Lord of Blasphemy",
      type: "Demigod/Serpent",
      difficulty: "High",
      health: "89,500 HP",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Serpent-Hunter (Weapon)", "Physical"],
      resistances: ["Fire", "Magic"],
      moves: [
        {
          name: "Serpent Lunge",
          description: "Lunges forward with massive reach. Use Serpent-Hunter's range.",
          danger: "High"
        },
        {
          name: "Lava Pools",
          description: "Creates lava everywhere. Stand on safe platforms.",
          danger: "Medium"
        },
        {
          name: "Rykard's Rancor",
          description: "Skulls that track the player. Destroy with Serpent-Hunter.",
          danger: "High"
        }
      ],
      strategy: "Use the provided Serpent-Hunter weapon. Stay on solid ground. Target the head.",
      phases: 2,
      rewards: ["Rykard's Great Rune", "Remembrance of the Blasphemous", "Blasphemous Blade"],
      location: "Volcano Manor",
      region: "Mt. Gelmir"
    },

    {
      name: "Godskin Duo",
      type: "Godskin",
      difficulty: "Very High",
      health: "27,564 HP",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Sleep", "Bleed"],
      resistances: ["Fire", "Black Flame"],
      moves: [
        {
          name: "Black Flame",
          description: "Various black flame attacks from both bosses. High damage over time.",
          danger: "High"
        },
        {
          name: "Rolling Attack",
          description: "Noble rolls into a ball. Jump over or run perpendicular.",
          danger: "High"
        },
        {
          name: "Stretchy Attacks",
          description: "Apostle extends limbs for long-range attacks. Unpredictable timing.",
          danger: "Medium"
        }
      ],
      strategy: "Use sleep pots on one while fighting the other. Focus on one at a time. They share a health bar.",
      phases: 1,
      rewards: ["Ash of War: Black Flame Tornado", "Godskin Swaddling Cloth"],
      location: "Crumbling Farum Azula",
      region: "Crumbling Farum Azula"
    },

    {
      name: "Radagon of the Golden Order",
      type: "God",
      difficulty: "Very High",
      health: "13,805 HP",
      image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Physical", "Strike damage"],
      resistances: ["Holy", "Lightning"],
      moves: [
        {
          name: "Hammer Combos",
          description: "Various hammer attack patterns. Roll through the gaps.",
          danger: "High"
        },
        {
          name: "Teleport Slam",
          description: "Teleports above and slams down. Roll away when he disappears.",
          danger: "High"
        },
        {
          name: "Holy Projectiles",
          description: "Fires golden projectiles. Use pillars for cover.",
          danger: "Medium"
        }
      ],
      strategy: "Target his ankles. Watch for teleports. Use the arena's cover effectively.",
      phases: 1,
      rewards: ["Elden Remembrance (shared with Elden Beast)"],
      location: "Elden Throne",
      region: "Leyndell, Ashen Capital"
    },

    {
      name: "Elden Beast",
      type: "Outer God",
      difficulty: "Very High",
      health: "22,127 HP",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Physical", "Strike damage"],
      resistances: ["Holy (Immune)", "All Status Effects"],
      moves: [
        {
          name: "Elden Stars",
          description: "Tracking golden projectile that follows you. Keep moving constantly.",
          danger: "Extreme"
        },
        {
          name: "Golden Breath",
          description: "Sweeping breath attack. Run to the sides.",
          danger: "High"
        },
        {
          name: "Ring Attacks",
          description: "Creates golden rings that explode. Jump through or roll away.",
          danger: "High"
        }
      ],
      strategy: "Chase it down when it swims away. Stay close to avoid ranged attacks. High mobility required.",
      phases: 1,
      rewards: ["Elden Remembrance (shared with Radagon)", "Sacred Relic Sword"],
      location: "Elden Throne",
      region: "Leyndell, Ashen Capital"
    },

    {
      name: "Dragonlord Placidusax",
      type: "Ancient Dragon",
      difficulty: "Extreme",
      health: "26,651 HP",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Physical", "Bleed"],
      resistances: ["Lightning", "Holy"],
      moves: [
        {
          name: "Laser Breath",
          description: "Sweeping laser beams. Run perpendicular to avoid.",
          danger: "Extreme"
        },
        {
          name: "Lightning Nuke",
          description: "Massive AoE lightning attack. Run far away when he flies up.",
          danger: "Extreme"
        },
        {
          name: "Teleportation",
          description: "Vanishes and reappears. Look for golden particles to predict location.",
          danger: "High"
        }
      ],
      strategy: "Target his head when possible. Stay mobile. Learn his teleport patterns.",
      phases: 2,
      rewards: ["Remembrance of the Dragonlord", "Dragon King's Cragblade"],
      location: "Crumbling Farum Azula",
      region: "Crumbling Farum Azula"
    },

    {
      name: "Tree Sentinel",
      type: "Knight",
      difficulty: "Medium",
      health: "3,123 HP",
      image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Poison", "Rot"],
      resistances: ["Holy", "Physical"],
      moves: [
        {
          name: "Halberd Sweep",
          description: "Wide sweeping attacks while mounted. Stay behind or far away.",
          danger: "Medium"
        },
        {
          name: "Shield Slam",
          description: "Charges forward with shield. Dodge to the side.",
          danger: "High"
        },
        {
          name: "Golden Vow",
          description: "Buffs himself with golden magic. Interrupt if possible.",
          danger: "Low"
        }
      ],
      strategy: "Fight on foot or horseback. Target the horse first. Use hit-and-run tactics.",
      phases: 1,
      rewards: ["Golden Halberd", "Ash of War: Golden Vow"],
      location: "Limgrave - Multiple locations",
      region: "Various"
    },

    {
      name: "Flying Dragon Agheel",
      type: "Dragon",
      difficulty: "Medium",
      health: "3,188 HP",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Lightning", "Magic"],
      resistances: ["Fire", "Physical"],
      moves: [
        {
          name: "Fire Breath",
          description: "Sweeping fire breath. Stay behind or to the sides.",
          danger: "High"
        },
        {
          name: "Claw Swipes",
          description: "Front claw attacks. Roll between his legs.",
          danger: "Medium"
        },
        {
          name: "Flying Flame",
          description: "Breathes fire while flying overhead. Keep moving.",
          danger: "High"
        }
      ],
      strategy: "Target his head for massive damage. Use Torrent for mobility. Attack ankles if head is too high.",
      phases: 1,
      rewards: ["Dragon Heart", "Agheel's Flame"],
      location: "Dragon-Burnt Ruins",
      region: "Limgrave"
    },

    {
      name: "Crucible Knight",
      type: "Crucible Knight",
      difficulty: "High",
      health: "2,914 HP",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Strike damage", "Guard counters"],
      resistances: ["Slash", "Pierce"],
      moves: [
        {
          name: "Tail Sweep",
          description: "Grows tail and sweeps behind him. Jump to avoid.",
          danger: "Medium"
        },
        {
          name: "Wing Flight",
          description: "Sprouts wings and flies forward. Dodge to the side.",
          danger: "High"
        },
        {
          name: "Stomp",
          description: "Powerful stomp attack. Creates shockwave.",
          danger: "Medium"
        }
      ],
      strategy: "Use guard counters and heavy attacks. Be patient. Learn his combo patterns.",
      phases: 1,
      rewards: ["Aspects of the Crucible: Tail"],
      location: "Stormhill Evergaol",
      region: "Limgrave"
    },

    {
      name: "Bloodhound Knight Darriwil",
      type: "Bloodhound Knight",
      difficulty: "Medium",
      health: "1,940 HP",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Magic", "Holy"],
      resistances: ["Physical", "Bleed"],
      moves: [
        {
          name: "Bloodhound Step",
          description: "Teleports around rapidly. Wait for him to commit to an attack.",
          danger: "High"
        },
        {
          name: "Claw Combos",
          description: "Multi-hit claw combinations. Roll through or block.",
          danger: "Medium"
        },
        {
          name: "Leaping Slam",
          description: "Jumps high and slams down. Roll away.",
          danger: "Medium"
        }
      ],
      strategy: "Be patient with his mobility. Punish after his combos. Use ranged attacks when possible.",
      phases: 1,
      rewards: ["Bloodhound's Fang"],
      location: "Forlorn Hound Evergaol",
      region: "Limgrave"
    },

    {
      name: "Night's Cavalry",
      type: "Spectral Knight",
      difficulty: "Medium",
      health: "2,436 HP",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Holy", "Fire"],
      resistances: ["Physical", "Magic"],
      moves: [
        {
          name: "Flail Combo",
          description: "Spinning flail attacks while mounted. Keep distance or get behind.",
          danger: "High"
        },
        {
          name: "Charge Attack",
          description: "Charges forward with weapon extended. Dodge to the side.",
          danger: "Medium"
        },
        {
          name: "Spectral Appearance",
          description: "Only appears at night. Vanishes at dawn.",
          danger: "N/A"
        }
      ],
      strategy: "Fight on horseback. Attack from behind. Only spawns at night.",
      phases: 1,
      rewards: ["Various Ashes of War", "Night Cavalry Set pieces"],
      location: "Multiple locations at night",
      region: "Various"
    },

    {
      name: "Bell Bearing Hunter",
      type: "Assassin",
      difficulty: "High",
      health: "4,494 HP",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      weaknesses: ["Magic", "Lightning"],
      resistances: ["Physical", "Holy"],
      moves: [
        {
          name: "Grab Attack",
          description: "Lunges forward for an instant-kill grab. Stay at range.",
          danger: "Extreme"
        },
        {
          name: "Sword Combos",
          description: "Fast sword combinations. Roll through or use shield.",
          danger: "High"
        },
        {
          name: "Stealth",
          description: "Can become invisible briefly. Watch for movement.",
          danger: "Medium"
        }
      ],
      strategy: "Keep distance from grab attacks. Use magic or ranged combat. Only appears at merchant locations at night.",
      phases: 1,
      rewards: ["Bell Bearings from merchants"],
      location: "Various merchant locations at night",
      region: "Various"
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'extreme': return 'text-red-500';
      case 'very high': return 'text-orange-500';
      case 'high': return 'text-yellow-500';
      case 'medium': return 'text-blue-500';
      default: return 'text-green-500';
    }
  };

  const getDangerColor = (danger) => {
    switch (danger.toLowerCase()) {
      case 'extreme': return 'text-red-400 bg-red-900/30 border-red-700';
      case 'high': return 'text-orange-400 bg-orange-900/30 border-orange-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/30 border-yellow-700';
      default: return 'text-green-400 bg-green-900/30 border-green-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-purple-900">
      {/* Header */}
      <div className="bg-slate-900/80 py-8 px-4">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-4">
            Boss Guides
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Master the patterns, learn the strategies, and conquer the mightiest foes in the Lands Between.
            Detailed guides for every major boss encounter.
          </p>
        </div>
      </div>

      {/* Boss Cards */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {bosses.map((boss, index) => (
            <div key={index} className="bg-slate-800/90 border-purple-700/50 overflow-hidden hover:border-purple-600 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Boss Image and Basic Info */}
                <div className="space-y-4">
                  <div className="relative h-55 overflow-hidden rounded-lg group"    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img
                      src={boss.image}
                      alt={boss.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent transition-all duration-500 group-hover:opacity-0 pointer-events-none" />
                  </div>



                  <div>
                    <h3 className="text-xl font-bold text-purple-300 mb-1">{boss.name}</h3>
                    <p className="text-purple-500 text-sm mb-2">{boss.type}</p>
                    <p className={`font-semibold ${getDifficultyColor(boss.difficulty)}`}>
                      Difficulty: {boss.difficulty}
                    </p>
                    <p className="text-slate-400 text-sm">{boss.health}</p>
                    <p className="text-slate-400 text-sm">Phases: {boss.phases}</p>
                  </div>

                  {/* Weaknesses and Resistances */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-green-400 font-semibold text-sm mb-1 flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Weaknesses
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {boss.weaknesses.map((weakness, idx) => (
                          <span key={idx} className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs border border-green-600/30">
                            {weakness}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold text-sm mb-1 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Resistances
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {boss.resistances.map((resistance, idx) => (
                          <span key={idx} className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-xs border border-red-600/30">
                            {resistance}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Moves */}
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                    <Sword className="h-4 w-4" />
                    Signature Moves
                  </h4>
                  <div className="space-y-3 ">
                    {boss.moves.map((move, idx) => (
                      <div key={idx} className={`p-3 rounded border hover:scale-102 transition-transform duration-300  ${getDangerColor(move.danger)}`}>
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-semibold text-sm">{move.name}</h5>
                          <span className="text-xs px-2 py-1 rounded bg-slate-700/50">
                            {move.danger}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {move.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategy and Rewards */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Strategy
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed bg-slate-700/30 p-3 rounded">
                      {boss.strategy}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Rewards
                    </h4>
                    <div className="space-y-1">
                      {boss.rewards.map((reward, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full" />
                          <span className="text-slate-300 text-sm">{reward}</span>
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
    </div>
  );
};

export default Bosses;
