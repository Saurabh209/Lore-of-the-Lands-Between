import React from 'react';
 import { ArrowLeft, Swords, MapPin, Clock, Skull } from "lucide-react";

const EpicBattles = () => {
    
     const battles = [
    {
      name: "The Battle of Aeonia",
      subtitle: "Malenia vs. Radahn",
      location: "Caelid",
      description: "The legendary duel that scarred the land forever",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "Stalemate - Both defeated",
      casualties: "Massive",
      aftermath: "Caelid became a wasteland of Scarlet Rot",
      details: "The most devastating battle of the Shattering occurred when Malenia marched her army to Caelid to face Radahn. Neither warrior could claim victory, leading Malenia to bloom the Scarlet Aeonia, consuming both armies and poisoning the land. Radahn was driven mad by rot, while Malenia fell into a coma.",
      keyMoments: [
        "Malenia's march to Caelid",
        "The duel of titans",
        "The first bloom of Scarlet Aeonia",
        "Radahn's madness begins"
      ]
    },
    {
      name: "The Siege of Leyndell",
      subtitle: "The Capital's Last Stand",
      location: "Leyndell, Royal Capital",
      description: "The final battle for the throne of the Lands Between",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "Varied by Tarnished",
      casualties: "Heavy",
      aftermath: "The capital fell to ash",
      details: "As the Tarnished approached the Erdtree, Morgott made his final stand as protector of the Golden Order. The battle determined the fate of the capital and the path to becoming Elden Lord.",
      keyMoments: [
        "Morgott's transformation",
        "The breaking of the thorns",
        "The burning of the Erdtree",
        "Godfrey's return"
      ]
    },
    {
      name: "The War of Ancient Dragons",
      subtitle: "Godwyn vs. Fortissax",
      location: "Leyndell's Past",
      description: "The conflict that forged an unlikely friendship",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "Peace Treaty",
      casualties: "Unknown",
      aftermath: "Dragons joined the Golden Order",
      details: "Godwyn the Golden's battle with Fortissax ended not in death, but in mutual respect. This legendary duel led to the first alliance between dragons and the Golden Order, with Fortissax becoming Godwyn's friend and protector.",
      keyMoments: [
        "Godwyn's challenge to Fortissax",
        "The honorable duel",
        "Mutual recognition of strength",
        "The dragon-human alliance"
      ]
    },
    {
      name: "The Night of Black Knives",
      subtitle: "The Assassination of Godwyn",
      location: "Leyndell",
      description: "The conspiracy that shattered the Golden Order",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "Godwyn's Soul Death",
      casualties: "Godwyn the Golden",
      aftermath: "The Shattering begins",
      details: "Orchestrated by Ranni, the Black Knife Assassins murdered Godwyn the Golden using fragments of the Rune of Death. This act shattered Queen Marika's sanity and triggered the events that would lead to the Shattering.",
      keyMoments: [
        "Ranni's pact with the assassins",
        "The theft of Death's power",
        "Godwyn's murder",
        "Marika's rage and the Shattering"
      ]
    }
  ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-red-900">
      {/* Header */}
      <div className="bg-slate-900/80 py-8 px-4">
        <div className="max-w-6xl mx-auto">
 
          <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-4">
            Legendary Battles
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Witness the conflicts that shaped the Lands Between. From the devastating Battle of Aeonia 
            to the conspiracy of the Black Knives, these are the wars that changed everything.
          </p>
        </div>
      </div>

      {/* Battles */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {battles.map((battle, index) => (
            <div key={index} className="bg-slate-800/90 border-red-700/50 overflow-hidden hover:border-red-600 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={battle.image} 
                    alt={battle.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Swords className="h-8 w-8 text-red-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-red-300 mb-1">
                      {battle.name}
                    </h3>
                    <p className="text-red-500 font-medium mb-2">
                      {battle.subtitle}
                    </p>
                    <p className="text-slate-400">
                      {battle.description}
                    </p>
                  </div>

                  {/* Battle Info */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-400" />
                      <span className="text-slate-300 text-sm">{battle.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Skull className="h-4 w-4 text-red-400" />
                      <span className="text-slate-300 text-sm">{battle.outcome}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {battle.details}
                    </p>
                  </div>

                  {/* Key Moments */}
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Key Moments</h4>
                    <div className="space-y-1">
                      {battle.keyMoments.map((moment, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-400 rounded-full" />
                          <span className="text-slate-400 text-sm">{moment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Aftermath */}
                  <div className="bg-slate-700/30 p-3 rounded border-l-4 border-red-400">
                    <h4 className="text-red-300 font-semibold text-sm mb-1">Aftermath</h4>
                    <p className="text-slate-300 text-sm">{battle.aftermath}</p>
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

export default EpicBattles;