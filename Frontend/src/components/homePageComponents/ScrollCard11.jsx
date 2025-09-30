import React from 'react';
import { useState, useEffect, useRef } from 'react';

const cardsArray = Array.from({ length: 25 }, (_, i) => i + 1)
const reverseCardsArray = Array.from({ length: 15 }, (_, i) => i + 1)




const ScrollCard11 = () => {
    const [translateX, setTranslateX] = useState(0);
    const animationRef = useRef();
    const containerRef = useRef();

    const [reverseTranslateX, setReverseTranslateX] = useState(0);
    const reverseAnimationRef = useRef();
    const reverseContainerRef = useRef();


    // Create duplicated cards for seamless loop
    const duplicatedCards = [...cardsArray, ...cardsArray];

    // Calculate total width for one set of cards
    const cardWidth = 400; // min-w-[400px]
    const totalWidth = cardsArray.length * cardWidth;

    useEffect(() => {
        const animate = () => {
            setTranslateX(prevX => {
                const newX = prevX - 0.3; // Adjust this value to control speed (slower than before)

                // Reset position when we've scrolled through one complete set
                if (Math.abs(newX) >= totalWidth) {
                    return 0;
                }
                return newX;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animationRef.current = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [totalWidth]);


    // reverse direction 
    const reverseDuplicatedCards = [...reverseCardsArray, ...reverseCardsArray];

    // Calculate total width for one set of cards
    const reverseCardWidth = 400; // min-w-[400px]
    const reverseTotalWidth = reverseCardsArray.length * reverseCardWidth;

    useEffect(() => {
        const reverseAnimate = () => {
            setReverseTranslateX(prevX => {
                const newX = prevX + 0.3; // POSITIVE value for left to right movement

                // Reset position when we've scrolled through one complete set
                if (newX >= reverseTotalWidth) {
                    return -reverseTotalWidth; // Start from left side
                }
                return newX;
            });

            reverseAnimationRef.current = requestAnimationFrame(reverseAnimate);
        };

        // Start animation
        reverseAnimationRef.current = requestAnimationFrame(reverseAnimate);

        // Cleanup function
        return () => {
            if (reverseAnimationRef.current) {
                cancelAnimationFrame(reverseAnimationRef.current);
            }
        };
    }, [reverseTotalWidth]);

    // Initialize starting position
    useEffect(() => {
        setReverseTranslateX(-reverseTotalWidth);
    }, [reverseTotalWidth]);




    return (
        <div className=" relative    overflow-hidden h-[450px]  ">
            {/* this container stack to the most back of the web page */}
            <div className=' py-3   fixed bottom-0  z-[-50]  left-0 w-screen h-screen'
                style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756638263/bg2_cdwfjx.webp')" }}
            >

                <div className="rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div
                            ref={containerRef}
                            className="flex  "
                            style={{
                                transform: `translateX(${translateX}px)`,
                                width: `${duplicatedCards.length * cardWidth}px`,
                            }}
                        >
                            {duplicatedCards.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg   bg-cover   mr-4  w-auto min-w-[400px] flex justify-center items-center  '
                                         style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756739634/jar_wymgrc.jpg')" }}
                                    >
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-auto object-cover"
                                        >
                                            <source
                                                src=" "
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
                <div className=" rotate-1 h-[calc(33.333%_-_10px)]  mb-3    flex items-center justify-center">
                    {/* Your original container with reverse infinite scroll */}
                    <div className=" h-[100%] flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div
                            ref={reverseContainerRef}
                            className="flex   "
                            style={{
                                transform: `translateX(${reverseTranslateX}px)`,
                                width: `${reverseDuplicatedCards.length * reverseCardWidth}px`,
                            }}
                        >
                            {reverseDuplicatedCards.map((card, index) => {
                                return (
                                    <div
                                        key={`reverse-${card.id}-${index}`}
                                        className='mr-4 overflow-hidden rounded-lg bg-black  w-auto bg-cover  min-w-[400px] flex justify-center items-center '
                                         style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756589179/The_Conquest_of_Raya_Lucaria_rle164.webp')" }}
                                    >
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-auto object-cover"
                                        >
                                            <source
                                                src=" "
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
                <div className=" rotate-1 h-[calc(33.333%_-_10px)] mb-3    flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div
                            ref={containerRef}
                            className="flex   "
                            style={{
                                transform: `translateX(${translateX}px)`,
                                width: `${duplicatedCards.length * cardWidth}px`,
                            }}
                        >
                            {duplicatedCards.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' mr-4 overflow-hidden rounded-lg bg-black bg-cover  w-auto min-w-[400px] flex justify-center items-center  '
                                     style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756589713/The_Flame_Giant_War_vasl0j.webp')" }}
                                   >
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-auto object-cover"
                                        >
                                            <source
                                                src=""
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
            <div className="absolute   inset-0 bg-gradient-to-t from-[rgb(2,3,12)] via-transparent to-[rgb(2,3,12)]" />

        </div>
    );
};

export default ScrollCard11;