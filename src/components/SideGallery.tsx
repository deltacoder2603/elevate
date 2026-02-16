import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const IMAGES = [
    "/elevate2026/images/popups/1.jpg",
    "/elevate2026/images/popups/2.jpg",
    "/elevate2026/images/popups/3.jpg",
    "/elevate2026/images/popups/4.jpg",
];

export const SideGallery = () => {
    // Track which item is hovered. null means none.
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
    // Track if the sidebar is open or closed
    const [isOpen, setIsOpen] = useState(false);
    // Track selected image for lightbox
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            {/* Backdrop Blur Overlay when sidebar is open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)} // Close on click outside
                    />
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                initial={false}
                animate={{
                    right: isOpen ? 180 : 0, // Reduced from 350 to 180
                    y: "-50%",
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    borderTopRightRadius: isOpen ? "0%" : "0%",
                    borderBottomRightRadius: isOpen ? "0%" : "0%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-1/2 z-50 p-2 bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 transition-colors flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: "32px",  // Reduced from 48px
                    height: "60px", // Reduced from 80px for better proportion
                    borderRadius: "16px 0 0 16px"
                }}
            >
                {isOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </motion.button>

            {/* Sidebar */}
            <motion.div
                className="fixed right-0 top-1/2 z-50 flex flex-col bg-white/10 backdrop-blur-md border-l border-white/20 shadow-2xl overflow-hidden"
                style={{
                    borderRadius: "20px 0 0 20px",
                }}
                initial={{ x: "100%", y: "-50%" }}
                animate={{
                    x: isOpen ? "0%" : "100%",
                    y: "-50%",
                    width: 180, // Reduced from 350 to 180
                    height: isSidebarHovered ? "50vh" : "40vh",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onHoverStart={() => setIsSidebarHovered(true)}
                onHoverEnd={() => setIsSidebarHovered(false)}
            >
                {IMAGES.map((src, index) => {
                    const isHovered = hoveredIndex === index;
                    // Accordion effect (default expanded flex 1, hovered flex 7)
                    // If no hover, all are flex 1.
                    const flexValue = hoveredIndex !== null
                        ? (isHovered ? 7 : 1)
                        : 1;

                    return (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden cursor-pointer border-b border-white/10 last:border-b-0"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setSelectedImage(src)}
                            animate={{
                                flex: flexValue,
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={src}
                                    alt={`Gallery ${index}`}
                                    // Use object-cover to ensuring filling
                                    className={`w-full h-full transition-all duration-500 object-cover`}
                                    style={{}}
                                />
                                {/* Overlay to darken unhovered items */}
                                {hoveredIndex !== null && !isHovered && (
                                    <div className="absolute inset-0 bg-black/60 transition-colors duration-300" />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center pointer-events-none"
                        >
                            {/* Close Button */}
                            <button
                                className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors pointer-events-auto"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <img
                                src={selectedImage}
                                alt="Selected Gallery Item"
                                className="w-full h-full object-contain pointer-events-auto rounded-md shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
