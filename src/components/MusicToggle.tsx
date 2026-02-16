import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useMusic } from '@/context/MusicContext';
import { Button } from '@/components/ui/button';

const MusicToggle = () => {
    const { isPlaying, toggleMusic } = useMusic();

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <Button
                    onClick={toggleMusic}
                    variant="outline"
                    size="icon"
                    className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/50 shadow-lg group relative overflow-hidden"
                    title={isPlaying ? "Mute Music" : "Play Music"}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <AnimatePresence mode="wait" initial={false}>
                        {isPlaying ? (
                            <motion.div
                                key="playing"
                                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Volume2 className="w-5 h-5 text-primary" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="muted"
                                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <VolumeX className="w-5 h-5 text-muted-foreground" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Ripple effect when playing */}
                    {isPlaying && (
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary/50 -z-10" />
                    )}
                </Button>
            </motion.div>
        </div>
    );
};

export default MusicToggle;
