import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import BossCard from './BossCard';
import { motion, useScroll } from 'framer-motion'





const Testing = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const knowledge = useSelector((state)=>{
        return state.app;
    })
    console.log("data", knowledge.knowledge[0])

    useEffect(() => {
        scrollYProgress.on('change', e => console.log(scrollYProgress.current))
    })

    const data = [
        {
            title: "Mohg, Lord of Blood",
            description: "The Lord of the Palace of Blood",
            color: "#8B0000",
            src: '/images/mohg.jpg'
        },
        {
            title: "Fire Giant",
            description: "Guardian of the Forge of the Giants",
            color: "#FF4500",
            src: '/images/firegiant.jpg'
        },
        {
            title: "Godfrey, First Elden Lord",
            description: "The first consort of Queen Marika",
            color: "#8B4513",
            src: '/images/godfrey.jpg'
        },
        {
            title: "Maliketh, the Black Blade",
            description: "Queen Marika's Shadow",
            color: "#2F4F4F",
            src: '/images/maliketh.jpg'
        },

        // ... continuing with similar pattern for remaining entries
        {
            title: "Astel, Naturalborn of the Void",
            description: "Cosmic entity from beyond the stars",
            color: "#4B0082",
            src: '/images/astel.jpg'
        },
        // {
        //     title: "Commander Niall",
        //     description: "Commander of Castle Sol",
        //     color: "#708090",
        //     src: '/images/niall.jpg'
        // },
        // {
        //     title: "Lichdragon Fortissax",
        //     description: "Ancient dragon corrupted by Death",
        //     color: "#4682B4",
        //     src: '/images/fortissax.jpg'
        // },
        // {
        //     title: "Rykard, Lord of Blasphemy",
        //     description: "The God-Devouring Serpent",
        //     color: "#8B0000",
        //     src: '/images/rykard.jpg'
        // },
        // {
        //     title: "Ancestor Spirit",
        //     description: "Guardian of the Ancestral Woods",
        //     color: "#2E8B57",
        //     src: '/images/ancestor.jpg'
        // },
        // // ... continuing with similar pattern
        // {
        //     title: "Margit, the Fell Omen",
        //     description: "The first major obstacle",
        //     color: "#556B2F",
        //     src: '/images/margit.jpg'
        // },
        // {
        //     title: "Valiant Gargoyles",
        //     description: "Twin guardians of Nokron",
        //     color: "#696969",
        //     src: '/images/gargoyles.jpg'
        // },

    ]

    return (
        <main ref={container} className='bg-white'>
            {data.map((project, i) => {
                const targetScale = 1-((data.length-i)*0.05)

                return <BossCard key={i} i={i} {...project} progress={scrollYProgress} targetScale={targetScale} range={[i * 0.25, 1]} />
            })}
        </main>
    );
};

export default Testing;