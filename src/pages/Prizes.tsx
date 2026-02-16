import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Gift, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrizesPage = () => {
  const prizeCategories = [
    {
      icon: Trophy,
      title: "Win Big Prizes",
      prizes: [
        { position: "Grant support up to", amount: "₹5,00,000 under DST NIDHI scheme", description: "" },
        { position: "Recognition & exclusive benefits for", amount: "selected participants", description: "" },
        { position: "Rewards innovation, vision, scalability,", amount: "and impact", description: "" }
      ]
    },
    {
      icon: Medal,
      title: "Opportunities",
      prizes: [
        { position: "Direct pitching before", amount: "20+ venture capitalists", description: "" },
        { position: "Grants up to ₹5 lakh under DST-NIDHI scheme", amount: "", description: "" },
        { position: "Exposure to government leaders", amount: "and experts from IIT Kanpur", description: "" }
      ]
    },
    {
      icon: Award,
      title: "Certification & Recognition",
      prizes: [
        { position: "Certificates for", amount: "all participants", description: "" },
        { position: "Recognition for DST–NIDHI grant awardees and", amount: "investor-backed startups", description: "" },
        { position: "Institutional credibility via", amount: "government & IIT Kanpur experts", description: "" }
      ]
    },
    {
      icon: Gift,
      title: "Grand Prize",
      prizes: [
        { position: "Top team eligible for grant support", amount: "up to ₹5 lakh", description: "" },
        { position: "Under DST–NIDHI scheme,", amount: "subject to guidelines", description: "" },
        { position: "Designed to support founders advancing", amount: "venture to next growth stage", description: "" }
      ]
    }
  ];

  const totalPrizePool = "₹5,00,000";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
            >
              <Crown className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Rewards & Recognition</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Prizes &</span>
              <br />
              <span className="text-gradient">Rewards</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Participants will be eligible for grants of up to ₹5,00,000 from the DST under the NIDHI Grant scheme
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3URig7_0jHiEX2BZb0CxAvw4yBlzYcb64ouUp9sftBpBusg/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <Trophy className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </a>
              </Button>
            </motion.div>

            {/* Floating Prize Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              className="absolute top-20 left-10 text-primary/20"
            >
              <Trophy className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-40 right-20 text-secondary/20"
            >
              <Medal className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 text-primary/20"
            >
              <Award className="w-14 h-14" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prize Categories Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Prize <span className="text-primary">Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the different competition categories and the rewards associated with each.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {prizeCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.prizes.map((prize, prizeIndex) => (
                      <div key={prizeIndex} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-base leading-snug">
                            <span className="font-semibold">{prize.position} </span>
                            <span className="text-primary font-bold">{prize.amount}</span>
                          </div>
                          {prize.description && <p className="text-sm text-muted-foreground mt-1">{prize.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to <span className="text-primary">Compete?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join ELEVATE 2026 and compete for prestigious awards and recognition. Register now to showcase your innovation, talent, and entrepreneurial vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3URig7_0jHiEX2BZb0CxAvw4yBlzYcb64ouUp9sftBpBusg/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">
                  Register for Events
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrizesPage;