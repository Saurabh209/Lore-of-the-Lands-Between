 
 
import { ArrowLeft, Shield, Sword, Heart, Zap, AlertTriangle } from "lucide-react";
 

const Bosses = () => {
  const bosses = [
    {
      name: "Malenia, Blade of Miquella",
      type: "Demigod",
      difficulty: "Extreme",
      health: "33,251 HP",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      rewards: ["Crucible Feather Talisman", "Ordovis's Greatsword"]
    }
  ];

  const getDifficultyColor = (difficulty ) => {
    switch (difficulty.toLowerCase()) {
      case 'extreme': return 'text-red-500';
      case 'very high': return 'text-orange-500';
      case 'high': return 'text-yellow-500';
      case 'medium': return 'text-blue-500';
      default: return 'text-green-500';
    }
  };

  const getDangerColor = (danger ) => {
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
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6">
                {/* Boss Image and Basic Info */}
                <div className="space-y-4">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <img 
                      src={boss.image} 
                      alt={boss.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
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
                  <div className="space-y-3">
                    {boss.moves.map((move, idx) => (
                      <div key={idx} className={`p-3 rounded border ${getDangerColor(move.danger)}`}>
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
