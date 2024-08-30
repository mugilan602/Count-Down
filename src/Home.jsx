import React, { useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';
import videoplayback from "./assets/Backvideo.mp4";
import collegelogo from "./assets/clglogo.png";
import nsslogo from "./assets/nsslogo.png";
function Home() {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('August 31, 2024 20:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            } else {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    return (
        <>
            {/* Hero Section */}
            <div id="hero" className="relative w-full h-[100vh] lg:h-[100vh] overflow-hidden flex items-center justify-center">
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover md:object-top"
                        style={{ transform: 'scale(1.1)', transformOrigin: 'center top' }}
                    >
                        <source src={videoplayback} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Centering Container */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
                    <h1 className={`text-2xl md:text-6xl lg:text-5xl font-bold mb-4 animate-pulse ${styles.unkemptregular}`}>
                        SRI SAIRAM ENGINEERING COLLEGE
                    </h1>
                    <h2 className={`text-2xl md:text-4xl lg:text-4xl mb-4 animate-pulse ${styles.unkemptregular}`}>
                        NATIONAL SERVICE SCHEME
                    </h2>
                    <h2 className={`text-xl md:text-4xl lg:text-3xl mb-4 animate-pulse ${styles.unkemptregular}`}>
                        PRESENTS
                    </h2>

                    {/* Glitch Text Container */}
                    <div className={`font-bold text-lg mb-4 lg:text-4xl ${styles.container}`}>
                        <h1 className={`${styles.gritx} ${styles.iceBerg}`}>GRITX 7.0</h1>
                        <h1 className={`${styles.gritx} ${styles.iceBerg}`}>GRITX 7.0</h1>
                        <h1 className={`${styles.gritx} ${styles.iceBerg}`}>GRITX 7.0</h1>
                    </div>
                    <div className={`text-2xl md:text-xl lg:text-3xl mb-4 animate-pulse ${styles.unkemptregular}`}>
                        Registration starts from
                    </div>

                    {/* Countdown Timer */}
                    <div className={`flex justify-center space-x-4 text-lg md:text-xl lg:text-2xl ${styles.timer}`}>
                        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                            <div key={unit} className="flex flex-col items-center">
                                <span
                                    id={unit}
                                    className="bg-gray-800 bg-opacity-80 rounded-lg px-4 py-2 animate-pulse font-bold text-4xl md:text-5xl lg:text-6xl"
                                >
                                    {formatTime(timeRemaining[unit])}
                                </span>
                                <span className="animate-pulse text-base md:text-lg lg:text-xl">{unit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logos Container */}
                <div className="absolute left-0 right-0 top-0 flex justify-between items-center px-4 md:bottom-4 md:top-auto lg:top-0 lg:bottom-auto">
                    {/* Logo on the left end */}
                    <img src={collegelogo} alt="Logo 1" className="w-32 h-32 mt-2 lg:mx-0 lg:mt-0" />

                    {/* Logo on the right end */}
                    <img src={nsslogo} alt="Logo 2" className="w-16 h-16 mr-9 mt-2 lg:mx-7 lg:mt-0" />
                </div>


            </div>
        </>
    );
}

export default Home;
