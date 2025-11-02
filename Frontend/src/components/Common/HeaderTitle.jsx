import React from "react";


// this includes a common component for all headers like epic battles , lore, demigods etc
const HeaderTitle = () => {


    return (
        <>
            <div className=" relative max-h-[650px]   overflow-hidden ">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full  pbject-contain"

                >
                    <source src=" https://res.cloudinary.com/doeiccxm7/video/upload/v1762063598/epciBattlesVid_m6qgb4.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
                {/* Header */}
                <div className=" absolute top-[0px] py-8 z-[5] px-34 border border-white">
                    <div className="max-w-6xl mx-auto">

                        <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-4">
                            Legendary Battles
                        </h1>
                        <p className="text-lg text-slate-300 max-w-3xl">
                            Witness the conflicts that shaped the Lands Between. From the devastating Battle of Aeonia
                            to the conspiracy of the Black Knives, these are the wars that changed everything.
                        </p>
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
            </div>
            <div className='relative min-h-[100px] '>
                <div className="bg-[linear-gradient(to_top,#00000000,#00000000,#00000000,#00000088,rgb(2,3,12))] absolute       inset-0  "></div>
            </div>
        </>
    );
};



export default HeaderTitle;