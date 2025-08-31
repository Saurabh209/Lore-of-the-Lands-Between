import React from 'react';
import { useState, useEffect, useRef } from 'react';

const cardsArray = Array.from({ length: 15 }, (_, i) => i + 1)
const reverseCardsArray = Array.from({ length: 15 }, (_, i) => i + 1)




const ScrollCard = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);








    return (
        <div className=" relative    overflow-hidden h-[450px]  ">
            {/* this container stack to the most back of the web page */}
            <div className=' py-3   fixed bottom-0  z-[-50]  left-0 w-screen h-screen'
                style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756638263/bg2_cdwfjx.webp')" }}
            >

                <div className="-rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" >
                        <div

                            className="flex  "

                        >
                            {cardsArray.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg  mr-4  w-auto min-w-[400px] flex justify-center items-center  '
                                        style={{ transform: `translateX(${scrollY * -0.5}px)` }}


                                    >
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-auto object-cover"
                                        >
                                            <source
                                                src="https://res.cloudinary.com/doeiccxm7/video/upload/v1756655410/WhatsApp_Video_2025-08-31_at_21.19.42_ec05825e_ruocul.mp4"
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="-rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex item center justify-center overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div

                            className="flex  "

                        >
                            {cardsArray.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg  mr-4  w-auto min-w-[400px] flex justify-center items-center  '
                                        style={{ transform: `translateX(${scrollY * 0.5}px)` }}

                                    >
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-auto object-cover"
                                        >
                                            <source
                                                src="https://res.cloudinary.com/doeiccxm7/video/upload/v1756655410/WhatsApp_Video_2025-08-31_at_21.19.42_ec05825e_ruocul.mp4"
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="-rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div

                            className="flex  "

                        >
                            {cardsArray.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg  mr-4  w-auto min-w-[400px] flex justify-center items-center  '
                                        style={{ transform: `translateX(${scrollY * -0.8}px)` }}

                                    >
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-auto object-cover"
                                        >
                                            <source
                                                src="https://res.cloudinary.com/doeiccxm7/video/upload/v1756655410/WhatsApp_Video_2025-08-31_at_21.19.42_ec05825e_ruocul.mp4"
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


            </div>
            <div className="absolute   inset-0 bg-gradient-to-t from-[rgb(2,3,12)] via-transparent to-[#0f172a]" />

        </div>
    );
};

export default ScrollCard;