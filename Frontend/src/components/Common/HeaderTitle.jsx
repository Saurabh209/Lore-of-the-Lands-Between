import React from "react";
import TextPressure from '../../../ReactBitsComponents/TextPressure/TextPressure'
import ShinyText from '../../../ReactBitsComponents/ShinyText'
import ScrambledText from '../../../ReactBitsComponents/ScrambledText/ScrambledText'

// this includes a common component for all headers like epic battles , lore, demigods etc
const HeaderTitle = ({ heading, description, videoLink }) => {


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
                <div className=" absolute top-[0px] py-8 z-[5] px-34  ">
                    <div className="relative max-w-6xl mx-auto">
                        <TextPressure
                            text={heading}
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={false}
                            italic={true}
                            textColor="#eb0f0f"
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
                        backgroundImage: "linear-gradient(to top, rgb(2,3,12), transparent, transparent)",
                        willChange: "transform"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        border: "1px solid black",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        willChange: "transform"
                    }}
                />
            </div >
            <div className='relative min-h-[180px] '>
                <div className="bg-[linear-gradient(to_top,#00000000,#00000000,#00000000,#00000088,rgb(0,0,0))] absolute       inset-0  "></div>
            </div>
        </>
    );
};



export default HeaderTitle;