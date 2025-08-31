import React from 'react';
import { useEffect,useRef } from 'react';

const cardsArray = Array.from({ length: 50 }, (_, i) => i + 1)




const ScrollCard = () => {

    const containerRef = useRef(null);



   
    return (
        <div className=" relative  border border-red-500 overflow-hidden h-[500px]  ">
            <div className='fixed py-5  top-0 z-[-3] bg-amber-900 left-0 w-screen h-screen'>
                <div  className="  h-1/3  py-2 border border-amber-500  flex overflow-scroll   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {cardsArray.map((card, index) => {
                        return (
                            <div className='h-full min-w-[400px] flex justify-center items-center border border-white '>
                                <p className='text-5xl '>{card}</p>
                            </div>

                        )
                    })}
                </div>
                <div    className="  h-1/3  py-2 border border-amber-500  flex overflow-scroll   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {cardsArray.map((card, index) => {
                        return (
                            <div className='h-full min-w-[300px] flex justify-center items-center border border-white '>
                                <p className='text-5xl '>{card}</p>
                            </div>

                        )
                    })}
                </div>
                <div    className="  h-1/3  py-2 border border-amber-500  flex overflow-scroll   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {cardsArray.map((card, index) => {
                        return (
                            <div className='h-full min-w-[300px] flex justify-center items-center border border-white '>
                                <p className='text-5xl '>{card}</p>
                            </div>

                        )
                    })}
                </div>
 
            </div>
            <div className="absolute   inset-0 bg-gradient-to-t from-[rgb(2,3,12)] via-transparent to-[#0f172a]" />

        </div>
    );
};

export default ScrollCard;