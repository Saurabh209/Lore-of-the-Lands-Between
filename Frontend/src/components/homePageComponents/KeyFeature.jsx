import React, { useState, useEffect } from 'react';

const KeyFeature = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        console.log(scrollY)
    }, [scrollY])
    return (
        <div className="flex  flex-col gap-12 key-feature   w-[80%] m-auto mb-30">
            <h2 className='flex text-2xl md:text-5xl text-amber-200  font-bold font-crimson animate-fade-in' style={{ animationDelay: '0.3s' }}>Key Features</h2>

            <div className='flex flex-col gap-20'>


                <div className=' flex justify-between gap-4 flex-col   sm:flex-row '>
                    <div className='  sm:w-[48%] '>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-[100%] w-[100%]    "
                            style={{

                            }}
                        >
                            <source src="https://res.cloudinary.com/doeiccxm7/video/upload/v1758622948/eldenring-kf-01-animated-new_lyo5rx.webm" type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className=' sm:w-[48%] flex flex-col gap-4'>
                        <h3 className='text-black   w-fit bg-amber-200 ps-26 pe-8 py-2    sm:text-xl' style={{
                            transform: `translateY(${(scrollY - 2600) * -0.3}px) translateX(-100px)`,
                            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
                        }}>A New Fantasy World</h3>
                        <p style={{
                            transform: `translateY(${(scrollY - 2800) * -0.2}px)`
                        }} className='text-white text-xs leading-tight sm:leading-relaxed  sm:text-sm  '>Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. </p>
                        <p style={{
                            transform: `translateY(${(scrollY - 2800) * -0.2}px)`
                        }} className='text-white text-xs leading-tight sm:leading-relaxed sm:text-sm    '>Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures. </p>
                    </div>
                </div>






                <div className=' flex justify-between gap-4 flex-col  sm:flex-row '>

                    <div className=' sm:w-[48%] flex flex-col gap-4'>
                        <h3 className='text-black   w-fit bg-amber-200 px-8 py-1    sm:text-xl' style={{
                            transform: `translateY(${(scrollY - 3000) * -0.3}px)`,
                            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
                        }}>WORLD EXPLORATION IN THE LANDS BETWEEN</h3>


                        <p style={{
                            transform: `translateY(${(scrollY - 3200) * -0.2}px)`
                        }} className='text-white text-xs leading-tight sm:leading-relaxed  sm:text-sm  '>ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.</p>
                        <p style={{
                            transform: `translateY(${(scrollY - 3200) * -0.2}px)`
                        }} className='text-white text-xs leading-tight sm:leading-relaxed sm:text-sm    '>Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.</p>
                    </div>
                    <div className='  sm:w-[48%] '>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-[100%] w-[100%]     "
                            style={{

                            }}
                        >
                            <source src="https://res.cloudinary.com/doeiccxm7/video/upload/v1758622946/eldenring-kf-02-animated-new_ntupiq.webm" type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>





                <div className=' flex justify-between gap-4 flex-col  sm:flex-row '>
                    <div className='   sm:w-[48%] '>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-[100%] w-[100%]     "
                            style={{

                            }}
                        >
                            <source src="https://res.cloudinary.com/doeiccxm7/video/upload/v1758622950/eldenring-kf-03-animated-new_prtfo0.webm" type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='  sm:w-[48%] flex flex-col gap-4'>
                        <h3 className='text-black   w-fit bg-amber-200 ps-16 pe-8 py-1    sm:text-xl' style={{
                            transform: `translateY(${(scrollY - 3400) * -0.3}px) translateX(-100px)`,
                            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
                        }}>Genre-Defining Gameplay</h3>
                        <p style={{
                            transform: `translateY(${(scrollY - 3600) * -0.2}px)`
                        }} className='text-white text-xs leading-tight sm:leading-relaxed  sm:text-sm  '>Create your character in FromSoftware's refined action-RPG and define your playstyle by experimenting with a wide variety of weapons, magical abilities, and skills found throughout the world.</p>
                        <p style={{
                            transform: `translateY(${(scrollY - 3600) * -0.2}px)`
                        }} className='text-white text-xs leading-tight sm:leading-relaxed sm:text-sm    '>Charge into battle, pick off enemies one-by-one using stealth, or even call upon allies for aid. Many options are at your disposal as you decide how to approach exploration and combat. </p>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default KeyFeature;