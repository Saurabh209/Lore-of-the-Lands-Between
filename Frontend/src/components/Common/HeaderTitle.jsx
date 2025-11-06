import React, { useEffect, useState } from "react";
import TextPressure from '../../../ReactBitsComponents/TextPressure/TextPressure'
import ShinyText from '../../../ReactBitsComponents/ShinyText'
import ScrambledText from '../../../ReactBitsComponents/ScrambledText/ScrambledText'

// this includes a common component for all headers like epic battles , lore, demigods etc
const HeaderTitle = ({ heading, headingColor, description, videoLink }) => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className=" relative max-h-[450px]   overflow-hidden ">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full  pbject-contain"
                >
                    <source src={videoLink} />

                    Your browser does not support the video tag.
                </video>
                {/* Header */}
                <div className=" absolute  top-[0px] w-[100%] h-[100%]  py-8 z-[5] pr-44 backdrop-blur-[0px]  " style={{backgroundColor:"#00000090"}}>
                    <div
                        className="relative w-[80%] max-w-4xl mx-auto"
                        style={{
                            transform: `translateY(${scrollY * 0.6}px)`
                        }}
                    >
                        <TextPressure
                            text={heading}
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={false}
                            italic={true}
                            textColor={headingColor}
                            strokeColor="#ff0000"
                            minFontSize={36}
                        />

                        {/* <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-4">
                            {heading}
                        </h1> */}

                        <div className=" max-w-4xl">
                            {/* <ShinyText
                                text={description}
                                disabled={false}
                                speed={4}
                                className='custom-class'
                            /> */}
                            <ScrambledText
                                className="scrambled-text-demo"
                                radius={60}
                                duration={1.2}
                                speed={0.5}

                            >
                                {description}

                            </ScrambledText>


                            {/* Witness the conflicts that shaped the Lands Between. From the devastating Battle of Aeonia
                            to the conspiracy of the Black Knives, these are the wars that changed everything. */}
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "linear-gradient(to top, rgb(0,0,0), transparent, transparent)",

                    }}
                />

                {/* <div
                    style={{
                        position: "absolute",
                        border: "1px solid black",
                        inset: 0,
                        backgroundColor:"#0000007d"
                        // backgroundImage: "linear-gradient(to top,#0009)",
                        // backgroundColor: "rgba(0, 0, 0, 0.5)",

                    }}
                /> */}
            </div >
            <div className='relative min-h-[120px] '>
                <div className="bg-[linear-gradient(to_top,#00000000,#00000000,#00000000,#00000088,rgb(0,0,0))] absolute       inset-0  "></div>
            </div>
        </>
    );
};



export default HeaderTitle;