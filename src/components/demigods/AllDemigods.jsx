import React from 'react';
import { Routes, Route,Link } from 'react-router-dom'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon, Home } from "lucide-react";


import RaniPhoto from '/img/RaniPhoto.jpg'
import Malenia from '/img/Malenia1.jpg'
import Radhan from '/img/Radhan.jpg'
import Rykard from '/img/Demigod/Rykard.jpg'
import Godrick from '/img/Demigod/Godrick.jpg'
import Godwyn from '/img/Demigod/Godwyn.jpg'
import Miqulla from '/img/Demigod/Miqulla.png'
import Mohg from '/img/Demigod/Mogh.jpg'
import Morgott from '/img/Demigod/Morgot.png'
const AllDemigods = () => {

//   const demigods =
//   [
// {
//     "godwyn_the_golden": {
//       "name": "Godwyn the Golden",
//       "title": "Prince of Death",
//       "status": "Deceased (Soul Dead)",
//       "lore": "Eldest son of Queen Marika and Godfrey. First demigod to die during the Night of Black Knives. His soul was killed while his body lived on, becoming the source of Those Who Live in Death.",
//       "purpose": "Originally heir to the Golden Order, now serves as the progenitor of undeath",
//       "location": "Deeproot Depths (corpse), Stormveil Castle (face)",
//       "difficulty": "N/A (Not fightable)",
//       "related_items": ["Cursemark of Death", "Golden Epitaph"],
//       "family": {
//         "mother": "Queen Marika",
//         "father": "Godfrey",
//         "siblings": ["Morgott", "Mohg"]
//       },
//       "death_cause": "Assassinated by Black Knife Assassins wielding Destined Death"
//     },

//     "morgott_the_omen_king": {
//       "name": "Morgott, the Omen King",
//       "title": "The Grace-Given",
//       "status": "Boss (Alive until defeated)",
//       "lore": "Omen twin brother of Mohg, cursed with omen horns. Despite his curse, remained loyal to the Golden Order and defended Leyndell as its king.",
//       "purpose": "Protector of Leyndell and the Erdtree",
//       "location": "Leyndell, Royal Capital",
//       "difficulty": "High (Required boss)",
//       "phase_count": 2,
//       "health_points": 10396,
//       "weaknesses": ["Holy damage vulnerability when using Omen powers"],
//       "resistances": ["High physical resistance"],
//       "drops": ["Morgott's Great Rune", "Remembrance of the Omen King"],
//       "family": {
//         "mother": "Queen Marika",
//         "father": "Godfrey",
//         "twin_brother": "Mohg",
//         "half_brother": "Godwyn"
//       },
//       "curse": "Omen curse - born with horns and supernatural strength"
//     },

//     "mohg_lord_of_blood": {
//       "name": "Mohg, Lord of Blood",
//       "title": "The Omen",
//       "status": "Boss (Alive until defeated)",
//       "lore": "Omen twin of Morgott who embraced his curse. Founded the Mohgwyn Dynasty and serves the Outer God of Blood. Kidnapped Miquella to become his consort.",
//       "purpose": "Establish the Mohgwyn Dynasty and serve the Formless Mother",
//       "location": "Mohgwyn Palace",
//       "difficulty": "Very High (Optional superboss)",
//       "phase_count": 2,
//       "health_points": 18389,
//       "special_mechanics": ["Nihil blood curse", "Blood loss buildup", "Healing from bloodshed"],
//       "drops": ["Mohg's Great Rune", "Remembrance of the Blood Lord"],
//       "family": {
//         "mother": "Queen Marika",
//         "father": "Godfrey",
//         "twin_brother": "Morgott",
//         "half_brother": "Godwyn"
//       },
//       "outer_god": "Formless Mother (Outer God of Blood)"
//     },

//     "radahn_the_starscourge": {
//       "name": "Starscourge Radahn",
//       "title": "General Radahn",
//       "status": "Boss (Infected with Scarlet Rot)",
//       "lore": "Son of Radagon and Rennala. Mighty warrior who learned gravity magic to ride his beloved horse Leonard. Fought Malenia to a standstill but was infected with Scarlet Rot.",
//       "purpose": "Protector of Caelid, holds back the stars with gravity magic",
//       "location": "Redmane Castle, Caelid",
//       "difficulty": "High (Festival boss)",
//       "phase_count": 2,
//       "health_points": 9572,
//       "special_mechanics": ["Gravity magic", "Mounted combat", "Meteor attacks"],
//       "drops": ["Radahn's Great Rune", "Remembrance of the Starscourge"],
//       "family": {
//         "mother": "Rennala",
//         "father": "Radagon",
//         "siblings": ["Rykard", "Ranni"],
//         "half_siblings": ["Miquella", "Malenia"]
//       },
//       "affliction": "Scarlet Rot infection from battle with Malenia",
//       "beloved_horse": "Leonard"
//     },

//     "rykard_lord_of_blasphemy": {
//       "name": "Rykard, Lord of Blasphemy",
//       "title": "God-Devouring Serpent",
//       "status": "Boss (Fused with serpent)",
//       "lore": "Son of Radagon and Rennala who fed himself to a great serpent to gain immortality. Founded the Volcano Manor and leads the Recusants against the Golden Order.",
//       "purpose": "Devour the gods and overthrow the Golden Order",
//       "location": "Volcano Manor, Mt. Gelmir",
//       "difficulty": "High (Optional boss)",
//       "phase_count": 2,
//       "health_points": 14222,
//       "special_mechanics": ["Serpent form", "Lava attacks", "Immortality through serpent"],
//       "drops": ["Rykard's Great Rune", "Remembrance of the Blasphemous"],
//       "family": {
//         "mother": "Rennala",
//         "father": "Radagon",
//         "siblings": ["Radahn", "Ranni"],
//         "half_siblings": ["Miquella", "Malenia"]
//       },
//       "transformation": "Fed himself to the God-Devouring Serpent for immortality"
//     },

//     "ranni_the_witch": {
//       "name": "Ranni the Witch",
//       "title": "Lunar Princess Ranni",
//       "status": "NPC (Discarded physical form)",
//       "lore": "Daughter of Radagon and Rennala. Orchestrated the Night of Black Knives to escape the Greater Will's influence. Seeks to usher in an Age of Stars.",
//       "purpose": "Free the world from the Greater Will's control and establish the Age of Stars",
//       "location": "Ranni's Rise, Liurnia",
//       "difficulty": "N/A (Quest NPC)",
//       "quest_line": "Ranni's questline - longest in the game",
//       "ending": "Age of Stars (Ranni's ending)",
//       "family": {
//         "mother": "Rennala",
//         "father": "Radagon",
//         "siblings": ["Radahn", "Rykard"],
//         "half_siblings": ["Miquella", "Malenia"]
//       },
//       "mentors": ["Snow Witch (unnamed)"],
//       "followers": ["Blaidd", "Iji", "Seluvis"],
//       "goal": "Replace the Golden Order with the Age of Stars"
//     },

//     "miquella_the_unalloyed": {
//       "name": "Miquella the Unalloyed",
//       "title": "Miquella the Kind",
//       "status": "Missing (Kidnapped by Mohg)",
//       "lore": "Twin brother of Malenia, cursed with eternal youth. Created Unalloyed Gold to cure his sister's rot. Built the Haligtree as sanctuary for the unwanted.",
//       "purpose": "Cure the Scarlet Rot and create sanctuary for outcasts",
//       "location": "Mohgwyn Palace (cocoon form)",
//       "difficulty": "N/A (Not encountered directly)",
//       "curse": "Eternal youth - cannot age or grow",
//       "creations": ["Unalloyed Gold", "Haligtree"],
//       "family": {
//         "mother": "Queen Marika",
//         "father": "Radagon",
//         "twin_sister": "Malenia",
//         "half_siblings": ["Godwyn", "Morgott", "Mohg", "Radahn", "Rykard", "Ranni"]
//       },
//       "followers": ["Malenia", "Cleanrot Knights", "Albinaurics"],
//       "kidnapper": "Mohg, Lord of Blood"
//     },

//     "malenia_blade_of_miquella": {
//       "name": "Malenia, Blade of Miquella",
//       "title": "Goddess of Rot",
//       "status": "Boss (Optional superboss)",
//       "lore": "Twin sister of Miquella, cursed with Scarlet Rot. Undefeated warrior who bloomed into the Goddess of Rot during her battle with Radahn.",
//       "purpose": "Protect Miquella and await his return",
//       "location": "Elphael, Brace of the Haligtree",
//       "difficulty": "Extreme (Hardest boss)",
//       "phase_count": 2,
//       "health_points": 18473,
//       "special_mechanics": ["Waterfowl Dance", "Scarlet Rot attacks", "Healing on hit", "Goddess of Rot transformation"],
//       "drops": ["Malenia's Great Rune", "Remembrance of the Rot Goddess"],
//       "family": {
//         "mother": "Queen Marika",
//         "father": "Radagon",
//         "twin_brother": "Miquella",
//         "half_siblings": ["Godwyn", "Morgott", "Mohg", "Radahn", "Rykard", "Ranni"]
//       },
//       "curse": "Scarlet Rot - body slowly consumed by rot",
//       "prosthetics": ["Golden prosthetic arm", "Golden prosthetic leg"],
//       "title_earned": "Has never known defeat"
//     }}
//   ]



const demigods= [
      {
        "name": "Malenia, Blade of Miquella",
        "title": "The Severed",
        "description": "Undefeated swordswoman cursed with the Scarlet Rot, twin sister to Miquella.",
        "image": Malenia,
        "lore": "Born cursed with the Scarlet Rot, Malenia has never known defeat. Her battle with Radahn in Caelid resulted in the bloom of the Scarlet Rot that devastated the land. She awaits her twin brother Miquella's return in the Haligtree, serving as his blade and protector.",
        "abilities": ["Waterfowl Dance", "Scarlet Aeonia", "Phantom Spirits"],
        "status": "Boss (Optional superboss)",
        "location": "Elphael, Brace of the Haligtree",
        "difficulty": "Extreme (Hardest boss)",
        "phase_count": 2,
        "health_points": 18473,
        "drops": ["Malenia's Great Rune", "Remembrance of the Rot Goddess"],
        "family": {
          "mother": "Queen Marika",
          "father": "Radagon",
          "twin_brother": "Miquella",
          "half_siblings": ["Godwyn", "Morgott", "Mohg", "Radahn", "Rykard", "Ranni"]
        },
        "curse": "Scarlet Rot - body slowly consumed by rot",
        "prosthetics": ["Golden prosthetic arm", "Golden prosthetic leg"],
        "title_earned": "Has never known defeat"
      },
      
      {
        "name": "Starscourge Radahn",
        "title": "The Conqueror of the Stars",
        "description": "Mightiest demigod general, master of gravity magic and beloved by his soldiers.",
        "image": Radhan,
        "lore": "Once the mightiest warrior among the demigods, Radahn mastered gravity magic to continue riding his beloved horse Leonard. After the Shattering, he was consumed by Scarlet Rot in his battle with Malenia, losing his sanity but not his strength. He holds back the stars with his gravity magic.",
        "abilities": ["Gravity Magic", "Meteor Strike", "Colossal Greatswords"],
        "status": "Boss (Infected with Scarlet Rot)",
        "location": "Redmane Castle, Caelid",
        "difficulty": "High (Festival boss)",
        "phase_count": 2,
        "health_points": 9572,
        "drops": ["Radahn's Great Rune", "Remembrance of the Starscourge"],
        "family": {
          "mother": "Rennala",
          "father": "Radagon",
          "siblings": ["Rykard", "Ranni"],
          "half_siblings": ["Miquella", "Malenia"]
        },
        "affliction": "Scarlet Rot infection from battle with Malenia",
        "beloved_horse": "Leonard",
        "festival": "Radahn Festival held in his honor"
      },
      
      {
        "name": "Rykard, Lord of Blasphemy",
        "title": "The Serpent",
        "description": "Once lord of Volcano Manor, now merged with the God-Devouring Serpent.",
        "image": Rykard,
        "lore": "Seeking power to challenge the Golden Order, Rykard fed himself to the God-Devouring Serpent. Now a blasphemous fusion of man and serpent, he devours champions in his lava-filled domain at Mt. Gelmir, leading the Recusants against the Golden Order.",
        "abilities": ["Serpent's Bite", "Magma Waves", "Rykard's Rancor"],
        "status": "Boss (Fused with serpent)",
        "location": "Volcano Manor, Mt. Gelmir",
        "difficulty": "High (Optional boss)",
        "phase_count": 2,
        "health_points": 14222,
        "drops": ["Rykard's Great Rune", "Remembrance of the Blasphemous"],
        "family": {
          "mother": "Rennala",
          "father": "Radagon",
          "siblings": ["Radahn", "Ranni"],
          "half_siblings": ["Miquella", "Malenia"]
        },
        "transformation": "Fed himself to the God-Devouring Serpent for immortality",
        "organization": "Volcano Manor Recusants"
      },
      
      {
        "name": "Godrick the Grafted",
        "title": "Lord of Limgrave",
        "description": "The weakest of the demigods, who grafts limbs of champions to gain strength.",
        "image": Godrick,
        "lore": "The lowliest of Queen Marika's offspring, Godrick's cowardice led him to graft the limbs of defeated warriors onto his body. He rules from Stormveil Castle, clinging to power through his grotesque modifications and claiming lineage to Godfrey.",
        "abilities": ["Dragon Head", "Storm Stomp", "Grafted Arsenal"],
        "status": "Boss (Shardbearer)",
        "location": "Stormveil Castle, Limgrave",
        "difficulty": "Medium (First major boss)",
        "phase_count": 2,
        "health_points": 6080,
        "drops": ["Godrick's Great Rune", "Remembrance of the Grafted"],
        "family": {
          "ancestor": "Godfrey (distant descendant)",
          "relation": "Distant member of the Golden Lineage"
        },
        "curse": "Cowardice and weakness, compensated through grafting",
        "domain": "Stormveil Castle",
        "reputation": "Weakest of the demigods"
      },
      
      {
        "name": "Morgott, the Omen King",
        "title": "The Grace-Given",
        "description": "An Omen who became Lord of Leyndell, defender of the Erdtree.",
        "image": Morgott,
        "lore": "Born cursed as an Omen, Morgott was imprisoned beneath Leyndell. Despite his curse, he remained loyal to the Golden Order and became its final protector, wielding holy magic against all who would claim the throne. He is the true identity of Margit the Fell Omen.",
        "abilities": ["Holy Blade", "Light Spears", "Cursed Blood"],
        "status": "Boss (Alive until defeated)",
        "location": "Leyndell, Royal Capital",
        "difficulty": "High (Required boss)",
        "phase_count": 2,
        "health_points": 10396,
        "drops": ["Morgott's Great Rune", "Remembrance of the Omen King"],
        "family": {
          "mother": "Queen Marika",
          "father": "Godfrey",
          "twin_brother": "Mohg",
          "half_brothers": ["Godwyn"]
        },
        "curse": "Omen curse - born with horns and supernatural strength",
        "alias": "Margit, the Fell Omen",
        "loyalty": "Golden Order and Erdtree"
      },
      
      {
        "name": "Mohg, Lord of Blood",
        "title": "The Blood Lord",
        "description":"Omen twin to Morgott, founder of the Mohgwyn Dynasty.",
        "image": Mohg,
        "lore": "Unlike his twin Morgott, Mohg embraced his Omen curse and founded the Mohgwyn Dynasty. He kidnapped Miquella to become his consort and built his palace from the blood of his followers, serving the Formless Mother and seeking to usher in a new age of blood.",
        "abilities": ["Bloodflame", "Nihil Ritual", "Blood Spears"],
        "status": "Boss (Alive until defeated)",
        "location": "Mohgwyn Palace",
        "difficulty": "Very High (Optional superboss)",
        "phase_count": 2,
        "health_points": 18389,
        "drops": ["Mohg's Great Rune", "Remembrance of the Blood Lord"],
        "family": {
          "mother": "Queen Marika",
          "father": "Godfrey",
          "twin_brother": "Morgott",
          "half_brothers": ["Godwyn"]
        },
        "outer_god": "Formless Mother (Outer God of Blood)",
        "dynasty": "Mohgwyn Dynasty",
        "obsession": "Miquella (kidnapped for consort)",
        "domain": "Mohgwyn Palace"
      },
      
      {
        "name": "Ranni the Witch",
        "title": "Lunar Princess Ranni",
        "description": "Demigod sorceress who orchestrated the Night of Black Knives to escape fate.",
        "image":RaniPhoto,
        "lore": "Daughter of Radagon and Rennala who orchestrated the Night of Black Knives to escape the Greater Will's influence. She discarded her physical form and seeks to usher in an Age of Stars, replacing the Golden Order with a thousand-year journey into the cold dark of space.",
        "abilities": ["Dark Moon Magic", "Spirit Summoning", "Fate Manipulation"],
        "status": "NPC (Discarded physical form)",
        "location": "Ranni's Rise, Liurnia",
        "difficulty": "N/A (Quest NPC)",
        "quest_line": "Ranni's questline - longest in the game",
        "family": {
          "mother": "Rennala",
          "father": "Radagon",
          "siblings": ["Radahn", "Rykard"],
          "half_siblings": ["Miquella", "Malenia"]
        },
        "mentors": ["Snow Witch (unnamed)"],
        "followers": ["Blaidd", "Iji", "Seluvis"],
        "goal": "Replace the Golden Order with the Age of Stars",
        "ending": "Age of Stars",
        "conspiracy": "Orchestrated Night of Black Knives"
      },
      
      {
        "name": "Miquella the Unalloyed",
        "title": "Miquella the Kind",
        "description": "Twin brother of Malenia, cursed with eternal youth, creator of Unalloyed Gold.",
        "image": Miqulla,
        "lore": "Twin brother of Malenia, cursed with eternal youth. Created Unalloyed Gold to cure his sister's rot and built the Haligtree as sanctuary for the unwanted. He was kidnapped by Mohg while in his cocoon, attempting to cure his curse and ascend to godhood.",
        "abilities": ["Unalloyed Gold Creation", "Compelling Charm", "Divine Protection"],
        "status": "Missing (Kidnapped by Mohg)",
        "location": "Mohgwyn Palace (cocoon form)",
        "difficulty": "N/A (Not encountered directly)",
        "family": {
          "mother": "Queen Marika",
          "father": "Radagon",
          "twin_sister": "Malenia",
          "half_siblings": ["Godwyn", "Morgott", "Mohg", "Radahn", "Rykard", "Ranni"]
        },
        "curse": "Eternal youth - cannot age or grow",
        "creations": ["Unalloyed Gold", "Haligtree"],
        "followers": ["Malenia", "Cleanrot Knights", "Albinaurics"],
        "kidnapper": "Mohg, Lord of Blood",
        "sanctuary": "Haligtree - refuge for the spurned and abandoned"
      },
      
      {
        "name": "Godwyn the Golden",
        "title": "Prince of Death",
        "description": "First of the demigods to die, his soul was slain while his body lived on.",
        "image": Godwyn,
        "lore": "Eldest son of Queen Marika and Godfrey, first demigod to die during the Night of Black Knives. His soul was killed while his body lived on, becoming the source of Those Who Live in Death. His corruption spreads throughout the Lands Between as the Prince of Death.",
        "abilities": ["Death Blight", "Undeath Influence", "Golden Lightning (formerly)"],
        "status": "Deceased (Soul Dead, Body Undead)",
        "location": "Deeproot Depths (corpse), Stormveil Castle (face)",
        "difficulty": "N/A (Not fightable)",
        "family": {
          "mother": "Queen Marika",
          "father": "Godfrey",
          "half_brothers": ["Morgott", "Mohg"]
        },
        "death_cause": "Assassinated by Black Knife Assassins wielding Destined Death",
        "legacy": "Source of Those Who Live in Death",
        "friends": ["Fortissax (Ancient Dragon)"],
        "corruption": "Death blight spreads from his undead body"
      }
    ];





  return (
    <div className="all-demigods  bg-gradient-to-b from-slate-900 via-slate-800 to-amber-900">
      <div className="      py-8 px-4">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4">
            The Demigods
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Children of Queen Marika, bearers of Great Runes, and architects of the Shattering.
            Each demigod tells a tale of power, ambition, and tragedy.
          </p>
        </div>
      </div>

      <div className="py-12 px-4  ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demigods.map((character, index) => (
               <Link key={character.name} to={`/Alldemigods/${character.name.toLowerCase()}`}>
              <div key={index} className="border bg-slate-800/90 border-amber-700/50 rounded-md overflow-hidden hover:border-amber-600   transition-all duration-300">
                <div className="relative h-60    overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 border border-white   " style={{background:'linear-gradient(to bottom, #0f172a00,#0f172a00,#0f172a00,  #182130 )'}} />
                  <div className="absolute bottom-4 left-4">
                    <Crown className="h-6 w-6 text-amber-400" />
                  </div>
                </div>

                <div className=' p-4'>
                  <p className="text-amber-300 text-xl">
                    {character.name}
                  </p>
                  <p className="text-amber-500 font-medium">
                    {character.title}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {character.description}
                  </p>
                </div>

                <div className=" p-4 space-y-4">
                  <div>
                    <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2">
                      <Sword className="h-4 w-4" />
                      Lore
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {character.lore}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Signature Abilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {character.abilities.map((ability, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-600/20 text-amber-300 px-2 py-1 rounded text-xs border border-amber-600/30"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AllDemigods;