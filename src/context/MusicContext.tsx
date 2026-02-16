import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

interface MusicContextType {
    isPlaying: boolean;
    toggleMusic: () => void;
    playMusic: () => void;
    pauseMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
    const context = useContext(MusicContext);
    if (!context) {
        throw new Error('useMusic must be used within a MusicProvider');
    }
    return context;
};

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasAttemptedAutoplay = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        // Function to attempt autoplay
        const attemptAutoplay = () => {
            if (!hasAttemptedAutoplay.current) {
                hasAttemptedAutoplay.current = true;
                console.log('Attempting to autoplay music...');

                // Set audio to be ready for autoplay
                audio.volume = 0;

                // Try multiple approaches for autoplay
                const playPromise = audio.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('Music autoplay started successfully');
                            // Start fade in effect
                            fadeIntervalRef.current = setInterval(() => {
                                if (audio.volume < 1) {
                                    audio.volume = Math.min(audio.volume + 0.05, 1);
                                } else {
                                    if (fadeIntervalRef.current) {
                                        clearInterval(fadeIntervalRef.current);
                                    }
                                }
                            }, 100);
                        })
                        .catch((error) => {
                            console.log('Autoplay prevented, waiting for user interaction:', error);
                            // Reset for manual playback
                            audio.volume = 1;
                        });
                }

                document.removeEventListener('click', attemptAutoplay);
                document.removeEventListener('keydown', attemptAutoplay);
                document.removeEventListener('touchstart', attemptAutoplay);
            }
        };

        // Immediate autoplay attempt
        attemptAutoplay();

        // Fallback: listen for first user interaction if immediate autoplay fails
        setTimeout(() => {
            if (!hasAttemptedAutoplay.current) {
                document.addEventListener('click', attemptAutoplay, { once: true });
                document.addEventListener('keydown', attemptAutoplay, { once: true });
                document.addEventListener('touchstart', attemptAutoplay, { once: true });
            }
        }, 1000);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            document.removeEventListener('click', attemptAutoplay);
            document.removeEventListener('keydown', attemptAutoplay);
            document.removeEventListener('touchstart', attemptAutoplay);
            if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
            }
        };
    }, []);

    const fadeIn = (audio: HTMLAudioElement) => {
        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
        }

        audio.volume = 0;

        // Try to play the audio
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Music started successfully');
                    fadeIntervalRef.current = setInterval(() => {
                        if (audio.volume < 1) {
                            audio.volume = Math.min(audio.volume + 0.05, 1);
                        } else {
                            if (fadeIntervalRef.current) {
                                clearInterval(fadeIntervalRef.current);
                            }
                        }
                    }, 100);
                })
                .catch((error) => {
                    console.log('Autoplay was prevented by browser:', error);
                    // Reset for manual playback
                    audio.volume = 1;
                });
        } else {
            // Fallback for older browsers
            audio.play();
            fadeIntervalRef.current = setInterval(() => {
                if (audio.volume < 1) {
                    audio.volume = Math.min(audio.volume + 0.05, 1);
                } else {
                    if (fadeIntervalRef.current) {
                        clearInterval(fadeIntervalRef.current);
                    }
                }
            }, 100);
        }
    };

    const fadeOut = (audio: HTMLAudioElement, callback?: () => void) => {
        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
        }

        fadeIntervalRef.current = setInterval(() => {
            if (audio.volume > 0.1) {
                audio.volume = Math.max(audio.volume - 0.05, 0.1);
            } else {
                if (fadeIntervalRef.current) {
                    clearInterval(fadeIntervalRef.current);
                }
                audio.pause();
                audio.volume = 1;
                if (callback) callback();
            }
        }, 100);
    };

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            fadeOut(audio);
        } else {
            fadeIn(audio);
        }
    };

    const playMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;
        fadeIn(audio);
    };

    const pauseMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;
        fadeOut(audio);
    };

    return (
        <MusicContext.Provider value={{ isPlaying, toggleMusic, playMusic, pauseMusic }}>
            {children}
            <audio
                ref={audioRef}
                loop
                src="/elevate2026/music/music.mp3"
                preload="auto"
            />
        </MusicContext.Provider>
    );
};
