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
import HeaderTitle from '../Common/HeaderTitle';
const AllDemigods = () => {




  const [demiGodsData, setDemiGodsData] = useState();


  const demiGodStatus = useSelector((state) => state.app);

  useEffect(() => {
    setDemiGodsData(demiGodStatus?.knowledge[2]);
    console.log(demiGodsData?.demiGods)
  }, [demiGodStatus])



  const [loaderContainer, setloadercontainer] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,

  })

  useEffect(() => {
    {
      demiGodStatus?.loading &&
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, one: true, })); }, 100);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, two: true, })); }, 300);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, three: true, })); }, 500);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, four: true, })); }, 700);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, five: true, })); }, 900);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, six: true, })); }, 1100);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, seven: true, })); }, 1300);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, eight: true, })); }, 1500);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, nine: true, })); }, 1700);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, ten: true, })); }, 1900);

    }
  })



  return (
    <div className="all-demigods bg-fixed bg-center bg-cover " style={{
      backgroundImage: `url("https://res.cloudinary.com/doeiccxm7/image/upload/v1756638263/bg2_cdwfjx.webp")`
    }}>
      {/* <div className="      py-8 px-4">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4">
            Demigods
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Children of Queen Marika, bearers of Great Runes, and architects of the Shattering.
            Each demigod tells a tale of power, ambition, and tragedy.
          </p>
        </div>
      </div> */}
      
      <HeaderTitle
        heading="Demigods........"
        headingColor="#ffd230"
        description=" Children of Queen Marika, bearers of Great Runes, and architects of the Shattering.
            Each demigod tells a tale of power, ambition, and tragedy."
        videoLink="https://res.cloudinary.com/doeiccxm7/video/upload/v1762430437/maleniaVsRadhan_jaxpvw.mp4"
      />

      <div className="py-12 px-4  ">
        <div className="max-w-6xl mx-auto min-h-[100vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demiGodStatus?.loading ? <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((character, index) => (

                <div key={index} className="border bg-[#173632] border-gray-700/50 rounded-md overflow-hidden hover:border-gray-600   transition-all duration-300">
                  <div className="relative h-60  flex items-center justify-center  overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/doeiccxm7/image/upload/v1759750608/eldenRing_logo_loader_jf17wg.png"
                      alt="default-image"
                      className="h-[70%] w-[70%] object-contain   animate-breath-opacity"
                    />
                    {/* <div className="absolute inset-0     " style={{ background: 'linear-gradient(to bottom, #1e293b,#0f172a00,#0f172a00,  #182130 )' }} /> */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`h-[40px] w-[40px] rounded-full bg-[#1d1d1d] animate-breath-opacity `}></div>
                    </div>
                  </div>

                  <div className=' p-4'>
                    <div className={`bg-[#1d1d1d] w-8/12 h-[20px]  mb-3 ${loaderContainer?.one && "skltnLoader"}`}>

                    </div>
                    <div className={`bg-[#1d1d1d] w-4/12 h-[18px]  mb-3  rounded-lg ${loaderContainer?.two && "skltnLoader"}`}>

                    </div>
                    <div className={`bg-[#1d1d1d] w-12/12 h-[18px]  mb-3  rounded-lg ${loaderContainer?.three && "skltnLoader"}`}>

                    </div>
                  </div>

                  <div className=" p-4 space-y-4">
                    <div>
                      <div className="  mb-2 flex items-center gap-2">
                        <div className={`h-[30px] w-[30px] rounded-full bg-[#1d1d1d] ${loaderContainer?.four && "skltnLoader"} `}></div>
                        <div className={`bg-[#1d1d1d] w-2/12 h-[15px]  ${loaderContainer?.four && "skltnLoader"} `} ></div>
                      </div>
                      <div className="text-slate-300 text-sm leading-relaxed">
                        <div className={`bg-[#1d1d1d] w-30/30 h-[15px] mb-2 rounded-lg ${loaderContainer?.five && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-58/60 h-[15px] mb-2  rounded-lg ${loaderContainer?.six && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-59/60 h-[15px] mb-2   rounded-lg ${loaderContainer?.seven && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-4/12 h-[15px] mb-7  rounded-lg ${loaderContainer?.eight && "skltnLoader"}`}></div>
                      </div>
                    </div>

                    <div>
                      <div className="  mb-2 flex items-center gap-2">
                        <div className={`h-[30px] w-[30px] rounded-full bg-[#1d1d1d]   ${loaderContainer?.nine && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-4/12 h-[20px]   ${loaderContainer?.nine && "skltnLoader"}`} ></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3].map((ability, idx) => (
                          <div className={`bg-[#1d1d1d] w-2/12 h-[20px]  rounded-lg  ${loaderContainer?.ten && "skltnLoader"}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </> :
              <>
                {demiGodsData?.demiGods?.map((character, index) => (
                  <Link key={character.name} to={`/Alldemigods/${character.name.toLowerCase()}`}>
                    <div key={index} className="border bg-[#182130] border-amber-700/50 rounded-md overflow-hidden hover:border-amber-600   transition-all duration-300">
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
              </>}

          </div>
        </div>
      </div>
      <div className='relative min-h-[250px]'>
        <div className="bg-[linear-gradient(to_bottom,#00000000,#00000000,#00000000,#00000088,rgb(2,3,12))] absolute       inset-0  "></div>
      </div>
    </div>

  );
};

export default AllDemigods;