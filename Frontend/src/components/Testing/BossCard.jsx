import React from 'react';
import { useTransform ,motion} from 'framer-motion';
const BossCard = ({ i, title, description, color, src , progress, range, targetScale}) => {
   
   const scale = useTransform(progress,range,[1,targetScale])
    return (
        <div className="boss-card h-screen  flex items-center justify-center mt-[50vh] sticky top-[0px]" >
            <motion.div
                className='h-[500px] w-[1000px] relative rounded-xl '
                style={{scale, background: color, top: `calc(-1% + ${i * 25}px)` }}
            >

            </motion.div>
        </div>
    );
};

export default BossCard;