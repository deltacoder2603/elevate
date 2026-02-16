
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

export function GuestsSection() {
    const testimonials = [
        {
            quote:
                "President of Vision StartUPs, serial entrepreneur, mentor, and angel investor. With decades of experience, he actively supports innovation and engages with founders across sectors.",
            name: "Sudhanshu Rastogi",
            designation: "President at Vision StartUPs",
            src: "/elevate2026/images/guests/4.jpg",
            linkedin: "https://www.linkedin.com/in/sudhanshu-rastogi/",
        },
        {
            quote:
                "Executive Director at Liberty Shoes Ltd. A seasoned leader and retail strategist known for modernizing the iconic brand and mentoring new-age entrepreneurs.",
            name: "Anupam Bansal",
            designation: "Executive Director at Liberty Shoes",
            src: "/elevate2026/images/guests/7.jpg",
            linkedin: "https://www.linkedin.com/in/anupam-bansal-7949281/",
        },
        {
            quote:
                "Founder of Skillre Education. A renowned educator and entrepreneur with 12+ years of experience mentoring students for competitive exams like GATE and ESE.",
            name: "Rajat Johari",
            designation: "Founder at Skillre Education",
            src: "/elevate2026/images/guests/1.jpg",
            linkedin: "https://www.linkedin.com/in/rajat-johari-72889161/",
        },
        {
            quote:
                "Founder of MeritX Ventures. An investor and innovation ecosystem leader helping early-stage startups scale internationally and become investor-ready.",
            name: "Neha Malhotra",
            designation: "Founder at MeritX Ventures",
            src: "/elevate2026/images/guests/6.jpg",
            linkedin: "https://www.linkedin.com/in/nehameritx/",
        },
        {
            quote:
                "Founder & CEO of Nyra Kitchenware. Built a leading D2C brand blending traditional craftsmanship with modern design, available on major platforms.",
            name: "Sushank Arora",
            designation: "Founder & CEO at Nyra Kitchenware",
            src: "/elevate2026/images/guests/5.jpg",
            linkedin: "https://www.linkedin.com/in/sushankarora/",
        },
        {
            quote:
                "Technology Innovation Consultant at iCreate. expert in guiding founders through product development, innovation strategy, and startup growth frameworks.",
            name: "Ashish Kanaujia",
            designation: "Innovation Consultant at iCreate",
            src: "/elevate2026/images/guests/3.jpg", // Placeholder
            linkedin: "https://www.linkedin.com/in/ashish-kanaujia/",
        },
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Guests</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Meet the industry leaders and visionaries joining us for Elevate 2026
                    </p>
                </motion.div>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
}
