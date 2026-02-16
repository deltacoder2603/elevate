import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Building2, Users, Briefcase, GraduationCap, Award, Lightbulb, Star, Sparkles } from 'lucide-react';

const AestheticSplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [currentPhase, setCurrentPhase] = useState(0);

    useEffect(() => {
        const phaseTimer = setInterval(() => {
            setCurrentPhase((prev) => (prev + 1) % 4);
        }, 1200);

        const mainTimer = setTimeout(() => {
            onComplete();
        }, 6000);

        return () => {
            clearInterval(phaseTimer);
            clearTimeout(mainTimer);
        };
    }, [onComplete]);

    const letters = [
        { char: "E", color: "from-red-500 to-red-600" },
        { char: "L", color: "from-blue-500 to-blue-600" },
        { char: "E", color: "from-red-500 to-red-600" },
        { char: "V", color: "from-blue-500 to-blue-600" },
        { char: "A", color: "hidden" },
        { char: "T", color: "from-orange-500 to-orange-600" },
        { char: "E", color: "from-yellow-500 to-yellow-600" },
    ];

    const startupElements = [
        { icon: Rocket, color: "text-blue-500" },
        { icon: Building2, color: "text-purple-500" },
        { icon: Users, color: "text-green-500" },
        { icon: Briefcase, color: "text-orange-500" },
        { icon: GraduationCap, color: "text-indigo-500" },
        { icon: Award, color: "text-yellow-500" },
        { icon: Lightbulb, color: "text-cyan-500" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
        >
            {/* 3D Background */}
            <div className="absolute inset-0">
                {/* Floating Buildings */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`building-${i}`}
                        className="absolute"
                        style={{ left: `${15 + i * 15}%`, bottom: "20%" }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                    >
                        <Building2 className="w-20 h-20 text-blue-500/20" />
                    </motion.div>
                ))}

                {/* Orbiting Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {startupElements.map((element, index) => {
                        const angle = (index * 51) * Math.PI / 180;
                        // Responsive radius calculation
                        const [radius, setRadius] = useState(window.innerWidth < 640 ? 120 : 200);

                        useEffect(() => {
                            const handleResize = () => {
                                setRadius(window.innerWidth < 640 ? 120 : 200);
                            };
                            window.addEventListener('resize', handleResize);
                            return () => window.removeEventListener('resize', handleResize);
                        }, []);

                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={`element-${index}`}
                                className="absolute"
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    transform: "translate(-50%, -50%)"
                                }}
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    rotate: { duration: 15 + index, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 2, repeat: Infinity }
                                }}
                            >
                                <element.icon className={`w-6 h-6 sm:w-10 sm:h-10 ${element.color} drop-shadow-lg`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    >
                        {i % 2 === 0 ? (
                            <Star className="w-4 h-4 text-yellow-400/30" />
                        ) : (
                            <Sparkles className="w-4 h-4 text-blue-400/30" />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: 360 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, type: "spring" }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl sm:text-8xl lg:text-9xl font-black flex items-center justify-center">
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 100, rotateX: 90 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        rotateX: 0
                                    }}
                                    transition={{
                                        delay: index * 0.2,
                                        duration: 0.8
                                    }}
                                    className="inline-block"
                                >
                                    <motion.span
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity
                                        }}
                                    >
                                        {letter.char !== 'A' ? (
                                            <span className={`bg-gradient-to-br ${letter.color} bg-clip-text text-transparent`}>
                                                {letter.char}
                                            </span>
                                        ) : (
                                            <motion.div
                                                animate={{
                                                    y: [0, -20, 0],
                                                    rotate: [0, -10, 10, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                                className="inline-block mx-2"
                                            >
                                                <Rocket className="w-16 h-16 text-blue-500" />
                                            </motion.div>
                                        )}
                                    </motion.span>
                                </motion.span>
                            ))}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="text-white ml-4"
                            >
                                '26
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
                            STARTUP CONCLAVE
                        </h2>
                        <motion.p
                            className="text-xl text-white/70 max-w-lg mx-auto"
                            animate={{
                                color: currentPhase === 0 ? "rgba(255,255,255,0.7)" :
                                    currentPhase === 1 ? "rgba(239,68,68,0.8)" :
                                        currentPhase === 2 ? "rgba(59,130,246,0.8)" :
                                            "rgba(245,158,11,0.8)"
                            }}
                        >
                            {currentPhase === 0 && "Innovation • Investment • Impact"}
                            {currentPhase === 1 && "Founders • CEOs • Visionaries"}
                            {currentPhase === 2 && "Startups • Scale • Success"}
                            {currentPhase === 3 && "College • Community • Creation"}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AestheticSplashScreen;