import React from 'react';

const KeyFeature = () => {
    return (
        <div className="key-feature border border-white w-[80%] m-auto">
            <h2 className='border '>Key Features</h2>
            <div className='   max-h-[300px]'>
                <div className=' border border-white'>
                     <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-[100%] border border-red-600 w-auto object-cover"
                            style={{
                                 
                            }}
                        >
                            <source src="https://res.cloudinary.com/doeiccxm7/video/upload/v1758622948/eldenring-kf-01-animated-new_lyo5rx.webm" type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                </div>
                <div className='w-[50%]'>
                    <h3>A New Fantasy World</h3>
                    <p>Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. </p>
                    <p>Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures. </p>
                </div>
            </div>
           
        </div>
    );
};

export default KeyFeature;