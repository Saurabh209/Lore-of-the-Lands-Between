import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Sparkles, Scale, Beaker, Diamond, Package, Music, Snowflake, Bug, Cookie, Lock, Shirt, CloudRain, EyeOff, Orbit, Copy, Heart, Brain, Frown, MoonStar, Ghost, Home, Gem, Hand, Scroll, Fingerprint, Lightbulb, TreeDeciduous, Biohazard, Castle, TreePine, Angry, Bird, Stars, Waves, Mountain, Sun, Sword, Flower, Flower2, Crown, Droplets, Shield, Axe, Circle, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon, Flower2Icon } from "lucide-react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeaderTitle from '../Common/HeaderTitle';
import ScrollReveal from '../../../ReactBitsComponents/ScrollReveal/ScrollReveal';
import ShinyText from '../../../ReactBitsComponents/ShinyText';
import SpotlightCard from '../../../ReactBitsComponents/SpotlightCard/SpotlightCard'


const Lore = () => {


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const iconMap = {
        "Sparkels": Sparkles,
        "Scale": Scale,
        "Beaker": Beaker,
        "Diamond": Diamond,
        "Package": Package,
        "Music": Music,
        "Snowflake": Snowflake,
        "Bug": Bug,
        "Cookie": Cookie,
        "Lock": Lock,
        "Shirt": Shirt,
        "CloudRain": CloudRain,
        "EyeOff": EyeOff,
        "Orbit": Orbit,
        "Copy": Copy,
        "Heart": Heart,
        "Brain": Brain,
        "Frown": Frown,
        "MoonStar": MoonStar,
        "Ghost": Ghost,
        "Home": Home,
        "Gem": Gem,
        "Hand": Hand,
        "Scroll": Scroll,
        "Fingerprint": Fingerprint,
        "Lightbulb": Lightbulb,
        "TreeDeciduous": TreeDeciduous,
        "Biohazard": Biohazard,
        "Castle": Castle,
        "TreePine": TreePine,
        "Angry": Angry,
        "Bird": Bird,
        "Stars": Stars,
        "Waves": Waves,
        "Mountain": Mountain,
        "Sun": Sun,
        "Sword": Sword,
        "Flower": Flower,
        "Flower2": Flower2,
        "Crown": Crown,
        "Droplets": Droplets,
        "Shield": Shield,
        "Axe": Axe,
        "Circle": Circle,
        "BookOpen": BookOpen,
        "MapPin": MapPin,
        "Users": Users,
        "Skull": Skull,
        "Star": Star,
        "Hammer": Hammer,
        "Wand2": Wand2,
        "Zap": Zap,
        "Eye": Eye,
        "Flame": Flame,
        "Moon": Moon,
    }


    const timelines = [
        {
            era: "Age of the Erdtree",
            events: [
                "The Greater Will establishes dominion",
                "Queen Marika becomes vessel of the Elden Ring",
                "The Golden Order rises to power",
                "Godfrey becomes first Elden Lord",
                "The War against the Giants",
                "The Dragon War and peace treaty"
            ]
        },
        {
            era: "The Time of Plenty",
            events: [
                "Godwyn the Golden is born",
                "The demigods multiply and prosper",
                "Expansion of the Golden Order",
                "Construction of Leyndell",
                "The academy of Raya Lucaria flourishes",
                "Caria and the Golden Order alliance"
            ]
        },
        {
            era: "The Shattering",
            events: [
                "The Night of Black Knives",
                "Godwyn's assassination",
                "Queen Marika shatters the Elden Ring",
                "The demigods claim Great Runes",
                "War breaks out across the lands",
                "The Tarnished are exiled"
            ]
        },
        {
            era: "The Age of Fracture",
            events: [
                "Constant warfare between demigods",
                "The Battle of Aeonia",
                "Radahn's madness",
                "The rise of recusants and heretics",
                "The Tarnished begin to return",
                "The call of grace returns"
            ]
        }
    ];
    const allLore = useSelector((state) => state.app);
    const [loreData, setLoreData] = useState();
    useEffect(() => {
        setLoreData(allLore?.knowledge[4])
        console.log(loreData)
    }, [allLore])


    const [logoTitle, setLogoTitle] = useState(false)
    const [descrip, setDescrip] = useState(false);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    const [nine, setNine] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        {
            allLore?.loading &&
                setTimeout(() => { setLogoTitle(true) }, 100);
            setTimeout(() => { setDescrip(true) }, 300);
            setTimeout(() => { setOne(true) }, 500);
            setTimeout(() => { setTwo(true) }, 700);
            setTimeout(() => { setThree(true) }, 900);
            setTimeout(() => { setFour(true) }, 1100);
            setTimeout(() => { setFive(true) }, 1300);
            setTimeout(() => { setSix(true) }, 1500);
            setTimeout(() => { setSeven(true) }, 1700);
            setTimeout(() => { setEight(true) }, 1900);
            setTimeout(() => { setNine(true) }, 2100);

        }
    })



    return (
        <div
            className="min-h-screen bg-fixed bg-center bg-cover "
            style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756592268/loreBg_tqrof5.webp')" }}
        >

            {/* Header */}

            <HeaderTitle
                heading=" Lore Archivess..."
                headingColor="#8ec5ff"
                description=" Delve into the deepest mysteries of the Lands Between. Uncover the truth behind the Golden Order, the Shattering, and the cosmic forces that shape reality itself."
                videoLink="https://res.cloudinary.com/doeiccxm7/video/upload/v1762107434/LoreVid_tppcps.mp4"

            />

            {/* Core Lore Topics */}

            <div className="py-12 px-4 min-h-[90vh]">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* <h2 className="text-3xl font-bold text-blue-400 mb-8">Core Concepts</h2> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {allLore?.loading ? <>

                            {[1, 2, 3, 4, 5, 6].map((topic, index) => {


                                return (
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="#1d1d1d">
                                        <div data-aos="zoom-in" key={index} className="  border p-5 cursor-default rounded-lg border-gray-700/50 hover:border-gray-600 backdrop-blur-[2px]     transition-all duration-300">
                                            <div className='mb-8'>
                                                <div className="   flex items-center gap-3 mb-4">
                                                    <div className={`h-[40px] w-[40px] rounded-full bg-[#1d1d1d] ${logoTitle && "skltnLoader"}`}></div>
                                                    <div className={`w-6/12 bg-[#1d1d1d] h-[24px] ${logoTitle && "skltnLoader"}`}> </div>
                                                </div>
                                                <div className=" flex flex-col gap-2   text-slate-400">
                                                    <p className={` bg-[#1d1d1d] w-12/12 h-[18px] ${descrip && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d] w-5/12 h-[18px] ${descrip && "skltnLoader"}`}></p>

                                                </div>
                                            </div>
                                            <div className='   '>
                                                <p className="text-slate-300 text-sm leading-[28px] flex flex-col gap-4 ">
                                                    <p className={`bg-[#1d1d1d] w-12/12 h-[15px] ${one && "skltnLoader"}`}></p>
                                                    <p className={`bg-[#1d1d1d]   w-11/12  h-[15px] ${two && "skltnLoader"} `}></p>
                                                    <p className={`bg-[#1d1d1d]    w-12/12 h-[15px] ${three && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d]   w-10/12 h-[15px] ${four && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d]   w-11/12 h-[15px] ${five && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d]   w-12/12 h-[15px] ${six && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d]    w-11/12 h-[15px] ${seven && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d]    w-11/12 h-[15px] ${eight && "skltnLoader"}`}></p>
                                                    <p className={` bg-[#1d1d1d]   w-7/12 h-[15px] ${nine && "skltnLoader"}`}></p>
                                                </p>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                )
                            })}
                        </> : <>
                            {loreData?.lore?.map((topic, index) => {
                                const Icon = iconMap[topic?.icon]
                                return (
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="#0e1e4eb5">
                                        <div data-aos="zoom-in" key={index} className="border p-5 h-[100%] cursor-default rounded-lg border-blue-700/50 hover:border-blue-600 backdrop-blur-[3px] hover:backdrop-blur-[8px]    transition-all duration-400">
                                            <div className='mb-8'>
                                                <div className="   flex items-center gap-3 mb-4">
                                                    {Icon ? <Icon className="h-6 w-6 text-blue-400" /> : null}
                                                    <h2 className="text-blue-300 text-2xl">{topic.title}</h2>
                                                </div>
                                                <div className=" min-h-[48px]   text-slate-400">

                                                    {topic.description}
                                                </div>
                                            </div>
                                            <div className='   '>
                                                <p className="text-slate-300 text-sm leading-[28px]">
                                                    <ShinyText
                                                        text={topic.content}
                                                        disabled={false}
                                                        speed={3}
                                                        className='custom-class'
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                )
                            })}
                        </>}
                    </div>
                </div>
            </div>

            <div className='relative min-h-[250px]'>
                <div className="bg-[linear-gradient(to_bottom,#00000000,#00000000,#00000000,#00000088,rgb(2,3,12))] absolute       inset-0  "></div>
            </div>

            {/* Timeline */}
            {/* <div className="py-32 px-4 bg-slate-800/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-400 mb-8">Timeline of Ages</h2>

                    <div className="space-y-8 ">
                        {timelines.map((timeline, index) => (
                            <div key={index} className="bg-slate-800/90 border rounded-lg p-8 border-blue-700/50">
                                <div>
                                    <div className="text-blue-300 text-xl">{timeline.era}</div>
                                </div>
                                <div>
                                    <div className="space-y-2">
                                        {timeline.events.map((event, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                                                <span className="text-slate-300 text-sm">{event}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Mysteries */}
            {/* <div className=" relative py-32 px-4 bg-fixed  bg-center bg-cover bg-slate-900/100"
                style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756589179/The_Conquest_of_Raya_Lucaria_rle164.webp')" }}
            >
                <div className="overlayBackground absolute    bg-black  inset-0  "></div>
                <div className="max-w-6xl mx-auto  ">
                    <h2 className="text-6xl font-bold text-blue-500 mb-8">Unsolved Mysteries</h2>


                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                        sx={{
                            bgcolor: "#00000000", // semi-transparent
                            backdropFilter: "blur(12px)", // frosted glass effect
                            border: "1px solid #60a5fa", // Tailwind blue-600 hex
                            backdropFilter: "blur(2px)",  // blur amount in px
                            borderRadius: 2,
                            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                            mb: 2, // margin bottom
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#60a5fa" }} />}
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography className='text-[#60a5fa]' sx={{ flexShrink: 0 }}>
                                Who orchestrated the Night of Black Knives?
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography>
                                While Ranni was the mastermind, evidence suggests Queen Marika herself
                                may have been complicit, having her own reasons to see Godwyn dead
                                and the Golden Order challenged.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                        sx={{
                            bgcolor: "#00000000", // semi-transparent
                            backdropFilter: "blur(12px)", // frosted glass effect
                            border: "1px solid #60a5fa", // Tailwind blue-600 hex
                            backdropFilter: "blur(2px)",  // blur amount in px
                            borderRadius: 2,
                            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                            mb: 2, // margin bottom
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#60a5fa" }} />}
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography className='text-[#60a5fa]' sx={{ flexShrink: 0 }}>
                                What is the true nature of the Outer Gods?
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography>
                                The Outer Gods appear to be cosmic entities that exist beyond the physical realm, each representing different fundamental forces or concepts. They compete for influence over the world through mortal vessels.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                        sx={{
                            bgcolor: "#00000000", // semi-transparent
                            backdropFilter: "blur(12px)", // frosted glass effect
                            border: "1px solid #60a5fa", // Tailwind blue-600 hex
                            backdropFilter: "blur(2px)",  // blur amount in px
                            borderRadius: 2,
                            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                            mb: 2, // margin bottom
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#60a5fa" }} />}
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography className='text-[#60a5fa]' sx={{ flexShrink: 0 }}>
                                Why did Queen Marika shatter the Elden Ring?
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography>
                                Grief over Godwyn's death, rage at the Greater Will's callousness, and perhaps a desire to free herself and her world from the constraints of absolute order.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                        sx={{
                            bgcolor: "#00000000", // semi-transparent
                            backdropFilter: "blur(12px)", // frosted glass effect
                            border: "1px solid #60a5fa", // Tailwind blue-600 hex
                            backdropFilter: "blur(2px)",  // blur amount in px
                            borderRadius: 2,
                            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                            mb: 2, // margin bottom
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#60a5fa" }} />}
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography className='text-[#60a5fa]' sx={{ flexShrink: 0 }}>
                                What happened to the other Lands Beyond the Fog?
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{
                                bgcolor: "transparent", // make sure summary is transparent
                                color: "#fff",
                            }}
                        >
                            <Typography>
                                The Lands Between may be just one region in a larger world. The fog that surrounds it suggests other lands exist, but their fate remains unknown.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>








                </div>



            </div> */}

            {/* Quote */}
            {/* <div className="py-12 px-4 relative ">
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-2xl italic text-blue-300 mb-4">
                        "The Golden Order was created by confining Destined Death. Thus, this new Order will be one not of gold, but of stars and moon and chill night."
                    </blockquote>
                    <cite className="text-slate-400">— Ranni the Witch</cite>
                </div>
                <div
                    style={{
                        background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.1),rgba(15, 23, 42, 0.1), #00000000, #00000000, #00000000, #00000000, #00000000, #00000000, #00000000, #00000000, #00000000, #00000000, #00000000, rgb(2,3,12))"
                    }}
                    className="  absolute   inset-0"
                />

            </div> */}


        </div>
    );
};

export default Lore;