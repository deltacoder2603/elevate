import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Gift, Award, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const prizes = [
  {
    icon: <Award className="w-10 h-10" />,
    title: 'DST–NIDHI Grant Support',
    amount: '₹5,00,000',
    description: 'Startups can receive up to ₹5,00,000 under the DST–NIDHI scheme to scale ideas and accelerate growth.',
    color: 'from-gray-300 to-gray-400',
  },
  {
    icon: <Trophy className="w-12 h-12" />,
    title: 'Awards & Recognition',
    amount: 'Prestigious Awards',
    description: 'Top participants receive trophies, certificates, and accolades, with past editions awarding grants to 12 startups and funding to 5.',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    icon: <Medal className="w-10 h-10" />,
    title: 'Networking & Ecosystem Engagement',
    amount: 'Mentorship',
    description: 'Connect with VCs, investors, industry experts, and academic leaders for mentorship, guidance, and valuable ecosystem opportunities.',
    color: 'from-amber-600 to-amber-700',
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Grants, <span className="text-gradient">Awards</span> & Networking
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eligible participants may receive up to ₹5,00,000 from DST–NIDHI grant support, trophies, and certificates, and valuable networking opportunities with investors and industry experts in home page
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-xl border border-border p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(45_100%_51%/0.1)]"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {prize.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{prize.amount}</p>
              <p className="text-sm text-muted-foreground">{prize.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/prizes">
              View All Prizes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;