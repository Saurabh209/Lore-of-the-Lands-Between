
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, Shield, Sword, Heart, Zap, AlertTriangle } from "lucide-react";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useSelector } from "react-redux";




import MaleniaPhoto from '/img/MaleniaPhoto.jpg'
import RadhanPhoto from '/img/RadhanPhoto.jpg'
import MoghPhoto from '/img/MoghPhoto.jpg'
import MalekithPhoto from '/img/MalekithPhoto.jpg'


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

  const [allBosses, setAllBosses] = useState();
  const bossesData = useSelector((state) => state.app);

  useEffect(() => {
    setAllBosses(bossesData?.knowledge[3])
    console.log(allBosses?.bosses)
  }, [bossesData])







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
  const getDangerMove = (danger) => {
    console.log("fxnCalled")
    switch (danger.toLowerCase()) {
      case 'extreme': return 'text-red-400  ';
      case 'high': return 'text-orange-400  ';
      case 'medium': return 'text-yellow-400  ';
      default: return 'text-green-400  ';
    }
  };
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  useEffect(() => {
    // subscribe to changes
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      console.log("scrollYProgress:", latest); // 0 → 1
    });

    return () => unsubscribe(); // cleanup
  }, [scrollYProgress]);



  const playbackDisplayTimer = useRef(null)

  const [firstPlayback, setFirstPlayback] = useState(false)
  const [secondPlayback, setSecondPlayback] = useState(false)
  const [thirdPlayback, setThirdPlayback] = useState(false)
  const [cutScene, setCutScene] = useState(true)

  const HandleCurrentMove = (index) => {

      if (index === 0) {
        console.log("clicked")
        setThirdPlayback(false)
        setSecondPlayback(false)
        setCutScene(false)
        setFirstPlayback(true)
      } else if (index === 1) {
        console.log("clicked")
        setThirdPlayback(false)
        setFirstPlayback(false)
        setCutScene(false)
        setSecondPlayback(true)
      } else if (index === 2) {
        console.log("clicked")
        setFirstPlayback(false)
        setSecondPlayback(false)
        setCutScene(false)
        setThirdPlayback(true)
      }
  
  }
  const HandleCurrentMoveLeave = () => {



      setFirstPlayback(false);
      setSecondPlayback(false);
      setThirdPlayback(false);
      setCutScene(true);

      console.log("removed")
 
  };

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
    thirteen: false,
    fourteen: false,
    fifteen: false,
    sixteen: false
  })

  useEffect(() => {
    {
      bossesData?.loading &&
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
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, thirteen: true, })); }, 2500);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, fourteen: true, })); }, 2700);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, fifteen: true, })); }, 2900);
      setTimeout(() => { setloadercontainer((prev) => ({ ...prev, sixteen: true, })); }, 3100);
    }
  })



  return (
    <div className="min-h-screen relative pb-80 bg-fixed bg-center bg-cover
    //bg-gradient-to-b from-slate-900 via-slate-800 to-purple-900
    
     "  style={{
        backgroundImage: `url("https://res.cloudinary.com/doeiccxm7/image/upload/v1756739634/jar_wymgrc.jpg")`
      }}>
      <div className="bg-[linear-gradient(to_bottom,#0000007a,#0000007a,#00000088,#00000088,#0000007a,#0000007a,#00000088,#0000007a,#0000007a,#00000088,rgb(2,3,12))] absolute    bborder border-white    inset-0  "></div>
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
      <div

        className="py-12 px-4 " >
        <div
          ref={container}
          className="max-w-6xl mx-auto space-y-16 ">
          {bossesData?.loading ? <>
            {[1, 2, 3].map((boss, index) => (
              <div

                className=" border   backdrop-blur-[10px] bg-[#0000006e]  border-gray-700/50 overflow-hidden hover:border-gray-600 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                  {/* Boss Image and Basic Info */}
                  <div className="space-y-4  ">
                    <div className="relative flex items-center justify-center h-55 overflow-hidden rounded-lg group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <img
                        src="https://res.cloudinary.com/doeiccxm7/image/upload/v1759750608/eldenRing_logo_loader_jf17wg.png"
                        alt="default-image"
                        className="h-[70%] w-[70%] object-contain   animate-breath-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a1e] to-transparent transition-all duration-500  pointer-events-none" />
                    </div>



                    <div>
                      <div className={`w-9/12 bg-[#1d1d1d] h-[20px] mb-[8px] ${loaderContainer?.five && "skltnLoader"}`}> </div>
                      <div className={`w-4/12 bg-[#1d1d1d] h-[10px] mb-[8px] ${loaderContainer?.six && "skltnLoader"}`}> </div>
                      <div className={`w-8/12 bg-[#1d1d1d] h-[15px] mb-[8px] ${loaderContainer?.seven && "skltnLoader"}`}> </div>
                      <div className={`w-4/12 bg-[#1d1d1d] h-[12px] mb-[8px] ${loaderContainer?.eight && "skltnLoader"}`}> </div>
                      <div className={`w-4/12 bg-[#1d1d1d] h-[12px] mb-[8px] ${loaderContainer?.nine && "skltnLoader"}`}> </div>
                    </div>

                    {/* Weaknesses and Resistances */}
                    <div className="space-y-2">
                      <div>
                        <div className="  mb-[4px] flex items-center gap-1 ">
                          <div className={`h-[20px] w-[20px] rounded-full bg-[#1d1d1d] ${loaderContainer?.ten && "skltnLoader"} `}></div>
                          <div className={`w-4/12 bg-[#1d1d1d] h-[12px] ${loaderContainer?.eleven && "skltnLoader"} `}> </div>
                        </div>
                        <div className="flex flex-wrap gap-3">

                          <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.twelve && "skltnLoader"} `}> </div>
                          <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.twelve && "skltnLoader"}  `}> </div>
                          <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.twelve && "skltnLoader"} `}> </div>

                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="  mb-[4px] flex items-center gap-1 ">
                            <div className={`h-[20px] w-[20px] rounded-full bg-[#1d1d1d] ${loaderContainer?.thirteen && "skltnLoader"} `}></div>
                            <div className={`w-4/12 bg-[#1d1d1d] h-[12px] ${loaderContainer?.thirteen && "skltnLoader"} `}> </div>
                          </div>
                          <div className="flex flex-wrap gap-3">

                            <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.fourteen && "skltnLoader"} `}> </div>
                            <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.fourteen && "skltnLoader"}  `}> </div>
                            <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.fourteen && "skltnLoader"} `}> </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Moves */}
                  <div className="hidden lg:block ">
                    <div className="  mb-[4px] flex items-center gap-1 pb-3">
                      <div className={`h-[25px] w-[25px] rounded-full bg-[#1d1d1d] ${loaderContainer?.one && "skltnLoader"} `}></div>
                      <div className={`w-4/12 bg-[#1d1d1d] h-[15px] ${loaderContainer?.one && "skltnLoader"} `}> </div>
                    </div>
                    <div className="space-y-3 ">

                      <div className={`p-3 bg-slate-700/30 cursor-pointer rounded    `}>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-6/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.two && "skltnLoader"} `}> </div>
                          <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.two && "skltnLoader"} `}> </div>
                        </div>
                        <div className={`w-12/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2 ${loaderContainer?.three && "skltnLoader"} `}> </div>
                        <div className={`w-7/12 bg-[#1d1d1d] rounded-sm h-[15px]  ${loaderContainer?.four && "skltnLoader"}`}> </div>
                      </div>

                      <div className={`p-3 bg-slate-700/30  cursor-pointer rounded   `}>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-6/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.five && "skltnLoader"} `}> </div>
                          <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.five && "skltnLoader"} `}> </div>
                        </div>
                        <div className={`w-12/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2 ${loaderContainer?.six && "skltnLoader"} `}> </div>
                        <div className={`w-7/12 bg-[#1d1d1d] rounded-sm h-[15px] ${loaderContainer?.seven && "skltnLoader"} `}> </div>
                      </div>
                      <div className={`p-3 bg-slate-700/30  cursor-pointer rounded  `}>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-6/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.nine && "skltnLoader"} `}> </div>
                          <div className={`w-2/12 bg-[#1d1d1d] rounded-sm h-[20px] ${loaderContainer?.nine && "skltnLoader"} `}> </div>
                        </div>
                        <div className={`w-12/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2  ${loaderContainer?.ten && "skltnLoader"}`}> </div>
                        <div className={`w-7/12 bg-[#1d1d1d] rounded-sm h-[15px]  ${loaderContainer?.eleven && "skltnLoader"}`}> </div>
                      </div>
                    </div>
                  </div>

                  {/* Strategy and Rewards */}
                  <div className="hidden lg:flex space-y-4  flex-col-reverse justify-between lg-flex-col ">

                    <div className="flex flex-col justify-between">

                      <div className="   mb-4 ">
                        <div className="   flex items-center gap-1 pb-3">
                          <div className={`h-[25px] w-[25px] rounded-full bg-[#1d1d1d] ${loaderContainer?.seven && "skltnLoader"} `}></div>
                          <div className={`w-4/12 bg-[#1d1d1d] h-[15px] ${loaderContainer?.seven && "skltnLoader"} `}> </div>
                        </div>
                        <div className="text-slate-300   text-sm leading-relaxed bg-slate-700/30 p-3 rounded">
                          <div className={`w-12/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2 ${loaderContainer?.eight && "skltnLoader"} `}> </div>

                          <div className={`w-12/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2 ${loaderContainer?.nine && "skltnLoader"} `}> </div>

                          <div className={`w-12/12 bg-[#1d1d1d] rounded-sm h-[15px]  ${loaderContainer?.ten && "skltnLoader"} `}> </div>

                        </div>
                      </div>

                      <div className=" ">
                        <div className="    flex items-center gap-1 pb-3  ">
                          <div className={`h-[25px] w-[25px] rounded-full bg-[#1d1d1d] ${loaderContainer?.eleven && "skltnLoader"} `}></div>
                          <div className={`w-4/12 bg-[#1d1d1d] h-[15px]  ${loaderContainer?.eleven && "skltnLoader"}`}> </div>
                        </div>
                        <div className="space-y-1">

                          <div className={`w-8/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2  ${loaderContainer?.twelve && "skltnLoader"}`}> </div>
                          <div className={`w-6/12 bg-[#1d1d1d] rounded-sm h-[15px] mb-2 ${loaderContainer?.thirteen && "skltnLoader"} `}> </div>
                          <div className={`w-9/12 bg-[#1d1d1d] rounded-sm h-[15px]  ${loaderContainer?.fourteen && "skltnLoader"} `}> </div>


                        </div>
                      </div>
                    </div>


                    <div className="  mb-4">
                      <div className="    flex items-center gap-1 pb-3  ">
                        <div className={`h-[25px] w-[25px] rounded-full bg-[#1d1d1d] ${loaderContainer?.one && "skltnLoader"} `}></div>
                        <div className={`w-4/12 bg-[#1d1d1d] h-[15px]  ${loaderContainer?.one && "skltnLoader"}`}> </div>
                      </div>
                      <div className={` backdrop-blur-[1px] bg-[#4848487e]  min-h-[170px]   rounded-xl  relative transition-all duration-300 ease-in-out ${loaderContainer?.two && "skltnLoader"} `}>

                        {/* <div className=" absolute inset-0  bg-[linear-gradient(to_bottom,#1e293b,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                        <div className=" absolute inset-0  bg-[linear-gradient(to_right,#1e293b,#00000000,#00000000,#00000000,#1e293b)]   pointer-events-none" /> */}
                      </div>
                    </div>





                  </div>
                </div>
              </div>
            ))}
          </> :
            <>
              {allBosses?.bosses?.map((boss, index) => (
                <div key={index}

                  className=" border   backdrop-blur-[5px]  bg-slate-800/97 border-purple-700/50 overflow-hidden hover:border-purple-600 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                    {/* Boss Image and Basic Info */}
                    <div className="space-y-4  ">
                      <div className="relative h-55 overflow-hidden rounded-lg group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    <div className=" ">
                      <h4 className=" text-purple-400 font-semibold mb-3 flex items-center gap-2">
                        <Sword className="h-4 w-4" />
                        Signature Moves
                      </h4>
                      <div className="space-y-3 ">
                        {boss.moves.map((move, idx) => (
                          <div key={idx} onMouseEnter={() => { HandleCurrentMove(idx) }} onMouseLeave={HandleCurrentMoveLeave} className={`p-3 cursor-pointer rounded border hover:scale-107 transition-transform duration-300  ${getDangerColor(move.danger)}`}>
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
                    <div className="space-y-4 flex flex-col-reverse justify-between lg-flex-col ">

                      <div className="flex flex-col justify-between">

                        <div className="  ">
                          <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Strategy
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed bg-slate-700/30 p-3 rounded">
                            {boss.strategy}
                          </p>
                        </div>

                        <div className=" ">
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

                      {firstPlayback && <>
                        <div>
                          <h4 className={`text-purple-400  font-semibold mb-3 flex items-center gap-2 bg-none  ${getDangerMove(boss?.moves[0]?.danger)} `} >
                            <Sword className="h-4 w-4" />
                            <>{boss.moves[0]?.name}</>
                          </h4>
                          <div className=" relative transition-all duration-300 ease-in-out ">
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"

                            >
                              <source src={boss?.moves[0]?.playback} type="video/mp4" />

                              Your browser does not support the video tag.
                            </video>
                            <div className=" absolute inset-0  bg-[linear-gradient(to_bottom,#1e293b,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                            <div className=" absolute inset-0  bg-[linear-gradient(to_right,#1e293b,#00000000,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                          </div>
                        </div>

                      </>}
                      {secondPlayback && <>
                        <div>
                          <h4 className={`text-purple-400  font-semibold mb-3 flex items-center gap-2 bg-none  ${getDangerMove(boss?.moves[1]?.danger)} `} >
                            <Sword className="h-4 w-4" />
                            <>{boss.moves[1]?.name}</>
                          </h4>
                          <div className=" relative  transition-all duration-300 ease-in-out">
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover "

                            >
                              <source src={boss?.moves[1]?.playback} type="video/mp4" />

                              Your browser does not support the video tag.
                            </video>
                            <div className=" absolute inset-0  bg-[linear-gradient(to_bottom,#1e293b,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                            <div className=" absolute inset-0  bg-[linear-gradient(to_right,#1e293b,#00000000,#00000000,#00000000,#1e293b)]   pointer-events-none" />

                          </div>

                        </div>

                      </>}
                      {thirdPlayback && <>
                        <div>
                          <h4 className={`text-purple-400  font-semibold mb-3 flex items-center gap-2 bg-none  ${getDangerMove(boss?.moves[2]?.danger)} `} >
                            <Sword className="h-4 w-4" />
                            <>{boss.moves[2]?.name}</>
                          </h4>
                          <div className=" relative  transition-all duration-300 ease-in-out">
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"

                            >
                              <source src={boss?.moves[2]?.playback} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className=" absolute inset-0  bg-[linear-gradient(to_bottom,#1e293b,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                            <div className=" absolute inset-0  bg-[linear-gradient(to_right,#1e293b,#00000000,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                          </div>
                        </div>

                      </>}
                      {cutScene && <>
                        <div>
                          <h4 className=" text-purple-400 font-semibold mb-3 flex items-center gap-2">


                          </h4>
                          <div className="  relative  transition-all duration-300 ease-in-out">
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"

                            >
                              <source src={boss?.cutScene} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className=" absolute inset-0  bg-[linear-gradient(to_bottom,#1e293b,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                            <div className=" absolute inset-0  bg-[linear-gradient(to_right,#1e293b,#00000000,#00000000,#00000000,#1e293b)]   pointer-events-none" />
                          </div>
                        </div>

                      </>}


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

export default Bosses;
