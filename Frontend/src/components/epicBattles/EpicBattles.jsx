import React, { useState, useEffect } from 'react';
import { ArrowLeft, Swords, MapPin, Clock, Skull } from "lucide-react";
import { useSelector } from 'react-redux';
import HeaderTitle from '../Common/HeaderTitle';

const EpicBattles = () => {


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
    eleven: false,
    twelve: false
  })


  const [battleKnowledge, setBattleKnowledge] = useState()
  const appState = useSelector((state) => state.app);

  useEffect(() => {

    setBattleKnowledge(appState?.knowledge[1]);
    console.log(battleKnowledge)
  }, [appState]);


  useEffect(() => {
    {
      appState?.loading &&
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
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, eleven: true, })); }, 2100);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, twelve: true, })); }, 2300);
    }
  })



  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover " style={{ backgroundImage: "url(' https://res.cloudinary.com/doeiccxm7/image/upload/v1756592268/loreBg_tqrof5.webp')" }}>

      <HeaderTitle 
      heading="Legendary Battles"
      description="Witness the conflicts that shaped the Lands Between. From the devastating Battle of Aeonia to the conspiracy of the Black Knives, these are the wars that changed everything."
      videoLink=" https://res.cloudinary.com/doeiccxm7/video/upload/v1762063598/epciBattlesVid_m6qgb4.mp4"
      />
     
      {/* Battles */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12 min-h-[100vh]">
          {appState?.loading ?

            <>
              {[1, 2, 3].map((battle, index) => (
                <div key={index} className="bg-[#00000057] backdrop-blur-[20px] border border-gray-700/50 rounded-sm    overflow-hidden hover:border-gray-600 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto flex items-center justify-center ">
                      <img
                        src="https://res.cloudinary.com/doeiccxm7/image/upload/v1759750608/eldenRing_logo_loader_jf17wg.png"
                        alt="default-image"
                        className="h-[70%] w-[70%] object-contain   animate-breath-opacity"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-transparent" /> */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`h-[40px] w-[40px] rounded-full bg-[#1d1d1d] animate-breath-opacity `}></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className={`bg-[#1d1d1d] w-6/12 h-[22px]  mb-3 ${loaderContainer?.one && "skltnLoader"}`}>
                        </div>
                        <div className={`bg-[#1d1d1d] w-4/12 h-[20px]  mb-2 ${loaderContainer?.two && "skltnLoader"}`}>
                        </div>
                        <div className={`bg-[#1d1d1d] w-9/12 h-[15px]  mb-2  ${loaderContainer?.three && "skltnLoader"}`}>
                        </div>
                      </div>

                      {/* Battle Info */}
                      <div className="grid grid-cols-2 gap-4 py-6 border-t border-slate-700">
                        <div className="flex items-center gap-2">
                          <div className={`h-[30px] w-[30px] rounded-full bg-[#1d1d1d] ${loaderContainer?.four && "skltnLoader"} `}></div>
                          <div className={`bg-[#1d1d1d] w-4/12 h-[15px] ${loaderContainer?.four && "skltnLoader"}`}> </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`h-[30px] w-[30px] rounded-full bg-[#1d1d1d] ${loaderContainer?.four && "skltnLoader"}  `}></div>
                          <div className={`bg-[#1d1d1d] w-8/12 h-[15px] ${loaderContainer?.four && "skltnLoader"}`}> </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <div className={`bg-[#1d1d1d] w-30/30 h-[15px] mb-2 ${loaderContainer?.five && "skltnLoader"} `}></div>
                        <div className={`bg-[#1d1d1d] w-28/30 h-[15px] mb-2  ${loaderContainer?.six && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-29/30 h-[15px] mb-2  ${loaderContainer?.seven && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-8/12 h-[15px] mb-7  ${loaderContainer?.eight && "skltnLoader"}`}></div>
                      </div>

                      {/* Key Moments */}
                      <div>
                        <div className={`bg-[#1d1d1d] w-4/12 h-[20px] mb-4  ${loaderContainer?.nine && "skltnLoader"}`}> </div>
                        <div className="space-y-1">
                          {[1, 2, 3].map((moment, idx) => (
                            <div key={idx} className="flex items-center gap-2   ">
                              <div className={` h-[8px] w-[8px] rounded-full bg-[#1d1d1d] ${loaderContainer?.ten && "skltnLoader"} `} />
                              <div className={`bg-[#1d1d1d] w-6/12 h-[15px] mb-2 ${loaderContainer?.ten && "skltnLoader"}`}> </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Aftermath */}
                      <div className="bg-slate-700/30 p-3 rounded border-l-4 border-[#1d1d1d] ">
                        <div className={`bg-[#1d1d1d] w-8/12 h-[15px] mb-2 ${loaderContainer?.eleven && "skltnLoader"}`}></div>
                        <div className={`bg-[#1d1d1d] w-8/12 h-[15px] ${loaderContainer?.twelve && "skltnLoader"}`}> </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </> :
            <>
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
      <div className='relative min-h-[250px]'>
        <div className="bg-[linear-gradient(to_bottom,#00000000,#00000000,#00000000,#00000088,rgb(2,3,12))] absolute       inset-0  "></div>
      </div>

    </div>
  );
};

export default EpicBattles;