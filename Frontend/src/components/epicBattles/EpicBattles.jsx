import React, { useState, useEffect } from 'react';
import { ArrowLeft, Swords, MapPin, Clock, Skull } from "lucide-react";
import { useSelector } from 'react-redux';

const EpicBattles = () => {

  const battles = [
    {
      name: "The Battle of Aeonia",
      subtitle: "Malenia vs. Radahn",
      location: "Caelid",
      description: "The legendary duel that scarred the land forever",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756479210/battle_of_aeonia_iq3lgt.jpg",
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
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756588795/The_Siege_of_Leyndell_ml2dbp_c_crop_ar_3_4_jp8vea.webp",
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
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756588915/The_War_of_Ancient_Dragons_twztra.webp",
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
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756589054/The_Night_of_Black_Knives_fgivop.jpg",
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
    },
    {
      name: "The Conquest of Raya Lucaria",
      subtitle: "Radagon vs. The Academy",
      location: "Raya Lucaria Academy",
      description: "The siege that united sword and sorcery",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756589179/The_Conquest_of_Raya_Lucaria_rle164.webp",
      outcome: "Golden Order Victory",
      casualties: "Moderate",
      aftermath: "Marriage of Radagon and Rennala",
      details: "Radagon led the Golden Order's forces against the Academy of Raya Lucaria in a campaign that seemed destined for bloodshed. However, the conflict ended unexpectedly when Radagon and Queen Rennala fell in love, uniting their realms through marriage rather than conquest.",
      keyMoments: [
        "The siege of the Academy",
        "Radagon's meeting with Rennala",
        "The unexpected courtship",
        "The union of Order and Moon"
      ]
    },
    {
      name: "The Liurnian Wars",
      subtitle: "The Carian Royal Family's Rise",
      location: "Liurnia of the Lakes",
      description: "The conflicts that established Carian supremacy",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756589506/The_Carian_Royal_Family_s_Rise_ff4c7n.webp",
      outcome: "Carian Victory",
      casualties: "Heavy among rival houses",
      aftermath: "Carian Royal Family unified Liurnia",
      details: "Before Rennala's reign, Liurnia was torn by conflicts between various sorcerous houses. The Carian Royal Family's rise to power came through a series of magical wars that consolidated power under their rule, establishing the Academy system.",
      keyMoments: [
        "The fragmentation of Liurnian houses",
        "Carian tactical superiority",
        "The last rival house's defeat",
        "Establishment of the Academy"
      ]
    },
    {
      name: "The Flame Giant War",
      subtitle: "Marika's Northern Campaign",
      location: "Mountaintops of the Giants",
      description: "The genocide that cursed a race to eternal servitude",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756589713/The_Flame_Giant_War_vasl0j.webp",
      outcome: "Golden Order Victory",
      casualties: "Near extinction of Fire Giants",
      aftermath: "The last giant guards the Flame of Ruin",
      details: "Queen Marika's most ruthless campaign saw the systematic extermination of the Fire Giants to prevent the burning of the Erdtree. Only one giant was spared, cursed to guard the very flame that could destroy Marika's order for eternity.",
      keyMoments: [
        "The march to the mountaintops",
        "The giants' desperate resistance",
        "Mass execution of the giant race",
        "The last giant's curse"
      ]
    },
    {
      name: "The War Beneath Leyndell",
      subtitle: "The Omen Twins' Rebellion",
      location: "Leyndell Sewers",
      description: "The forgotten conflict in the depths",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590182/dung_eater_in_sewers_islext.jpg",
      outcome: "Suppressed but never ended",
      casualties: "Countless Omen",
      aftermath: "Mohg's escape and Morgott's exile",
      details: "The Omen Twins led an uprising from beneath Leyndell, fighting against their persecution by the Golden Order. While Morgott eventually reconciled with the Order, Mohg's rebellion would take a darker turn toward the Formless Mother.",
      keyMoments: [
        "The twins' awakening to their power",
        "The underground resistance",
        "Morgott's change of heart",
        "Mohg's descent into blood magic"
      ]
    },
    {
      name: "The Cleanrot War",
      subtitle: "Malenia's Southern Campaigns",
      location: "Various Southern Regions",
      description: "The Scarlet Rot's first spread across the lands",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590393/The_Cleanrot_War_xcgarb.webp",
      outcome: "Miquella's Territory Secured",
      casualties: "Heavy on all sides",
      aftermath: "Establishment of Cleanrot Knight order",
      details: "Before her fateful march to Caelid, Malenia led campaigns to secure territory for Miquella's Haligtree. These battles saw the first military use of Scarlet Rot, leading to the formation of the devoted Cleanrot Knights who served despite the disease.",
      keyMoments: [
        "Malenia's first rot bloom in battle",
        "Formation of the Cleanrot Knights",
        "Conquest of southern strongholds",
        "The price of unwavering loyalty"
      ]
    },
    {
      name: "The Academy Rebellion",
      subtitle: "The Conspiracy of the Primeval Current",
      location: "Raya Lucaria Academy",
      description: "The sorcerers' attempt to transcend the stars",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590674/Elden-Ring-Raya-Lucaria-Academy_e0wjvd.avif",
      outcome: "Rebellion Crushed",
      casualties: "Many master sorcerers",
      aftermath: "Academy's magical research restricted",
      details: "A faction of sorcerers attempted to overthrow the Academy's leadership to pursue forbidden research into the Primeval Current. The rebellion failed, but not before causing significant damage to the Academy's structure and reputation.",
      keyMoments: [
        "Discovery of the Primeval Current",
        "The schism among sorcerers",
        "The failed coup attempt",
        "Rennala's decisive response"
      ]
    },
    {
      name: "The Crucible Wars",
      subtitle: "The Ancient Order's Last Stand",
      location: "Various Ancient Sites",
      description: "The conflict between old and new divinity",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590767/elden-ring-crucible-knight-crucible-knight-ordovis-boss-fight_fmkvgw.avif",
      outcome: "Golden Order Victory",
      casualties: "Most Crucible Knights",
      aftermath: "Crucible aspects deemed blasphemous",
      details: "The rise of the Erdtree and Golden Order came at the cost of the ancient Crucible's followers. The Crucible Knights made their final stand against Marika's new order, but were ultimately defeated and branded as heretics.",
      keyMoments: [
        "The Erdtree's dominance over the Crucible",
        "The Crucible Knights' oath of defiance",
        "Battles across ancient sacred sites",
        "The last Crucible Knight's exile"
      ]
    },
    {
      name: "The Godskin Hunts",
      subtitle: "The God-Slaying Apostles",
      location: "Throughout the Lands Between",
      description: "The systematic hunting of demigods",
      image: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590538/Godskin_Duo_uzeerb.webp",
      outcome: "Several demigods slain",
      casualties: "Multiple demigods and their followers",
      aftermath: "Godskin cult driven underground",
      details: "The Godskin Apostles and Nobles, servants of the Gloam-Eyed Queen, waged a campaign of assassination against the demigods. Their black flame magic proved capable of killing gods themselves, until they were eventually defeated by Maliketh.",
      keyMoments: [
        "The first demigod assassination",
        "The spread of black flame",
        "Multiple noble houses fall",
        "Maliketh's intervention and victory"
      ]
    }
  ];
  const [battleKnowledge, setBattleKnowledge] = useState()
  const appState = useSelector((state) => state.app);

  useEffect(() => {

    setBattleKnowledge(appState?.knowledge[1]);
  }, [appState]);


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
          {appState?.loading ? <h1>Loading</h1> : <>
            {battleKnowledge?.epicBattles.map((battle, index) => (
              <div key={index} className="bg-slate-800/90 border border-red-700/50 rounded-sm    overflow-hidden hover:border-red-600 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto  ">
                    <img
                      src={battle.image}
                      alt={battle.name}
                      className=" h-[100%] w-[100%]   object-cover opacity-70  ease-in-out hover:scale-102   transition-all duration-500 "
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-transparent" /> */}
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
          </>}

        </div>
      </div>


    </div>
  );
};

export default EpicBattles;