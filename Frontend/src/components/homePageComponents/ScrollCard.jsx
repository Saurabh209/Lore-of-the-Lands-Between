import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


// const cardsArray = Array.from({ length: 12 }, (_, i) => i + 1)

const cardsArray1 = [
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293741/Redmane_Castle_s4qmhn.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293378/Subterranean_Shunning-Grounds_vzvzyw.avif"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293117/Lake_of_Rot_ucsubd.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292890/Nokron-Eternal-City_z0ibxu.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292241/Mt._Gelmir_rsofkk.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758291841/leyndell_uwa6ky.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758290675/raya-lucaria_ffvdu4.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293741/Redmane_Castle_s4qmhn.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293117/Lake_of_Rot_ucsubd.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292890/Nokron-Eternal-City_z0ibxu.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292241/Mt._Gelmir_rsofkk.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758291841/leyndell_uwa6ky.webp"
    }
];


const cardsArray2 = [
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293741/Redmane_Castle_s4qmhn.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758290674/Caria_Manor_qmb496.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758264525/hidden_city_crxxkg.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758290023/limgrave_mxakx5.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590674/Elden-Ring-Raya-Lucaria-Academy_e0wjvd.avif"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756589713/The_Flame_Giant_War_vasl0j.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756588915/The_War_of_Ancient_Dragons_twztra.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758290023/limgrave_mxakx5.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758290674/Caria_Manor_qmb496.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590674/Elden-Ring-Raya-Lucaria-Academy_e0wjvd.avif"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756589713/The_Flame_Giant_War_vasl0j.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756588915/The_War_of_Ancient_Dragons_twztra.webp"
    }
];

const cardsArray3 = [
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293741/Redmane_Castle_s4qmhn.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293378/Subterranean_Shunning-Grounds_vzvzyw.avif"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590024/The_War_Beneath_Leyndell_wqhlq1.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293741/Redmane_Castle_s4qmhn.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756588795/The_Siege_of_Leyndell_ml2dbp_c_crop_ar_3_4_jp8vea.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292604/Miquella_s_Haligtree_jzdy5m.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292158/altus_plateau_cfbbpa.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758290675/Liurnia_of_the_Lakes_hriho4.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756590024/The_War_Beneath_Leyndell_wqhlq1.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758293741/Redmane_Castle_s4qmhn.jpg"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1756588795/The_Siege_of_Leyndell_ml2dbp_c_crop_ar_3_4_jp8vea.webp"
    },
    {
        url: "https://res.cloudinary.com/doeiccxm7/image/upload/v1758292604/Miquella_s_Haligtree_jzdy5m.jpg"
    }
];
















const ScrollCard = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);








    return (
        <div className=" relative    overflow-hidden h-[250px]  sm:h-[400px] md:h-[550px] ">
            {/* this container stack to the most back of the web page */}
            <div className=' py-3   fixed bottom-0  z-[-50]  left-0 w-screen h-screen'
                style={{ backgroundImage: "url('https://res.cloudinary.com/doeiccxm7/image/upload/v1756638263/bg2_cdwfjx.webp')" }}
            >

                <div className="rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" >
                        <div

                            className="flex  "

                        >
                            {cardsArray1.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg  mr-4 bg-center bg-cover w-auto min-w-[400px] flex justify-center items-center  '
                                        style={{ transform: `translateX(${scrollY * -0.5}px)`, backgroundImage: `url(${card.url})` }}


                                    >
                                        {/* <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-[100%] object-cover"
                                        >
                                            <source
                                                src="
                                                https://res.cloudinary.com/doeiccxm7/video/upload/v1756738157/scrollVid4compressed_kauhqo.mp4
                                                "
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex item center justify-center overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div

                            className="flex  "

                        >
                            {cardsArray2.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg  mr-4 bg-center bg-cover w-auto min-w-[400px] flex justify-center items-center  '
                                        style={{ transform: `translateX(${scrollY * 0.5}px)`, backgroundImage: `url(${card.url})` }}

                                    >
                                        {/* <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] w-[100%] object-cover"
                                        >
                                            <source
                                                src="
                                                https://res.cloudinary.com/doeiccxm7/video/upload/v1756738405/scrollVid1Compressed_nclhq0.mp4
                                                "
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="rotate-1  h-[calc(33.333%_-_10px)] mb-3  flex items-center justify-center">
                    {/* Your original container with infinite scroll applied */}
                    <div className=" h-[100%]  flex overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div

                            className="flex  "

                        >
                            {cardsArray3.map((card, index) => {
                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className=' overflow-hidden rounded-lg  mr-4   bg-center bg-cover w-auto min-w-[400px] flex justify-center items-center  '
                                        style={{ transform: `translateX(${scrollY * -0.8}px)`, backgroundImage: `url(${card.url})` }}

                                    >
                                        {/* <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="h-[100%] object-cover"
                                        >
                                            <source
                                                src="
                                                 https://res.cloudinary.com/doeiccxm7/video/upload/v1756738643/ScrollVid3Compressed_empbe9.mp4
                                                "
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


            </div>
            <div className="absolute  flex items-center justify-center inset-0 bg-gradient-to-t from-[rgb(0,0,0)] via-[rgba(0,0,0,0.57)] to-[rgb(0,0,0)]" >
                {/* <button className='text-white px-10 py-2 border border-white'>Explore</button> */}
                {/* <Stack spacing={2} direction="row">
                    <Button variant="outlined">Explore</Button>
                </Stack> */}
            </div>

        </div>
    );
};

export default ScrollCard;