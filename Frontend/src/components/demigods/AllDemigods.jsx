import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon, Home } from "lucide-react";
import { useSelector } from 'react-redux';

import RaniPhoto from '/img/RaniPhoto.jpg'
import Malenia from '/img/Malenia1.jpg'
import Radhan from '/img/Radhan.jpg'
import Rykard from '/img/Demigod/Rykard.jpg'
import Godrick from '/img/Demigod/Godrick.jpg'
import Godwyn from '/img/Demigod/Godwyn.jpg'
import Miqulla from '/img/Demigod/Miquella.jpg'
import Mohg from '/img/Demigod/Mogh.jpg'
import Morgott from '/img/Demigod/Morgot.png'
const AllDemigods = () => {




  const [demiGodsData, setDemiGodsData] = useState();


  const demiGodStatus = useSelector((state) => state.app);

  useEffect(() => {
    setDemiGodsData(demiGodStatus?.knowledge[2]);
    console.log(demiGodsData?.demiGods)
  }, [demiGodStatus])





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
            {demiGodsData?.demiGods?.map((character, index) => (
              <Link key={character.name} to={`/Alldemigods/${character.name.toLowerCase()}`}>
                <div key={index} className="border bg-slate-800/90 border-amber-700/50 rounded-md overflow-hidden hover:border-amber-600   transition-all duration-300">
                  <div className="relative h-60    overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0     " style={{ background: 'linear-gradient(to bottom, #0f172a00,#0f172a00,#0f172a00,  #182130 )' }} />
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