import React,{useState, useEffect} from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const screens = [
        'https://res.cloudinary.com/doeiccxm7/image/upload/v1759316441/Academy_of_Raya_Lucaria_Debate_Hall_-_MENU_Load_00007_PS5_tq0jjp.webp',
        'https://res.cloudinary.com/doeiccxm7/image/upload/v1759316441/Stake_of_Marika_-_MENU_Load_00010_PS5-_compressed_qpzikr.webp',
        'https://res.cloudinary.com/doeiccxm7/image/upload/v1759316441/Third_Church_of_Marika_Site_of_Lost_Grace_-_MENU_Load_00001_PS5-_compressed_jfhabx.webp',
        'https://res.cloudinary.com/doeiccxm7/image/upload/v1759316440/Living_Jar_Site_of_Lost_Grace_-_MENU_Load_00018_PS5-_compressed_awdwrc.webp',
        'https://res.cloudinary.com/doeiccxm7/image/upload/v1759316441/Stormveil_Castle_-_MENU_Load_00017_PS5-_compressed_kopqak.webp',
    ];

    // Pick a random image **once** when the component renders
     const [randomImage] = useState(() => screens[Math.floor(Math.random() * screens.length)]);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Disable scroll
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setFadeOut(true);
            // Re-enable scroll after fade out duration
            setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 1000); // match your fade-out transition
        }, 2500); // loader visible duration

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, [randomImage]);

    return (
        <div className="loader-screen">
            <img src={randomImage} alt="Elden Ring Loading" />
        </div>
    );
};

export default LoadingScreen;
