import React from 'react';


const Footer = () => {
    return (
        <footer className="h-[500px] flex justify-center content-center relative overflow-hidden">
            <div className="w-full relative">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px)`
                    }}
                >
                    <source src="https://res.cloudinary.com/doeiccxm7/video/upload/v1758810962/lore-of-the-lands-between_footer_video_gqqxoz.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Blur overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[5px]"></div>
                <div className="bg-[linear-gradient(to_bottom,rgb(2,3,12),#0000007a,#0000007a,#00000088,#00000088,rgb(2,3,12))] absolute    bborder border-white    inset-0  "></div>

                {/* Content goes here - example */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">Your Content Here</h2>
                        <p className="text-lg opacity-90">This content will be visible over the blurred video</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;