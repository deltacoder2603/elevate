import { motion } from 'framer-motion';
import { Presentation, Users, Lightbulb, Mic, Building2, TrendingUp, Rocket } from 'lucide-react';

const rounds = [
  {
    day: 1,
    rounds: [
      {
        number: 1,
        title: 'Startup Showcase & Innovation Pavilion',
        icon: Presentation,
        points: [
          'Live product demonstrations and curated startup exhibits',
          'Direct interaction with investors, mentors, incubators, and ecosystem partners',
          'Focus on idea validation, innovation visibility, and early investor interest'
        ]
      },
      {
        number: 2,
        title: 'Industry–Startup Exchange Round',
        icon: Users,
        points: [
          'Structured interaction between startups, investors, and industry leaders',
          'Discussion on market expectations, scalability, sector opportunities, and challenges'
        ]
      },
      {
        number: 3,
        title: 'Knowledge & Growth Insight Round',
        icon: Lightbulb,
        points: [
          'Expert-led sessions on investment readiness, sustainability, and funding landscapes',
          'Focus on investor expectations, growth pathways, and evaluation frameworks'
        ]
      }
    ]
  },
  {
    day: 2,
    rounds: [
      {
        number: 4,
        title: 'Elevator Pitch Round – Problem Statements',
        icon: Mic,
        points: [
          '30-second elevator pitches highlighting problem, solution, and target market',
          'Initial screening round for investment and MoU interest'
        ]
      },
      {
        number: 5,
        title: 'Investor-Led Evaluation Round (Startup Expo Visit)',
        icon: Building2,
        points: [
          'VCs and dignitaries evaluate startups at stalls',
          'Assessment of product, traction, business model, and scalability'
        ]
      },
      {
        number: 6,
        title: 'Elevator Pitch Round – Business & Growth Focus',
        icon: TrendingUp,
        points: [
          'Shortlisted startups present business models, growth strategies, and funding needs',
          'Focus on investment readiness, partnerships, and MoU finalisation'
        ]
      },
      {
        number: 7,
        title: 'Business Growth & Investment Readiness Workshop',
        icon: Rocket,
        points: [
          'Capacity-building round focused on scalability planning, revenue models, and investor documentation',
          'Prepares startups for post-summit funding discussions'
        ]
      }
    ]
  }
];

const RoundsSection = () => {
  return (
    <section className="py-20 bg-surface-overlay/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Event <span className="text-gradient">Rounds</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive 2-day journey through 7 power-packed rounds designed to accelerate your startup
          </p>
        </motion.div>

        <div className="space-y-16">
          {rounds.map((dayData) => (
            <div key={dayData.day}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold">
                  Day {dayData.day}
                </span>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dayData.rounds.map((round, index) => (
                  <motion.div
                    key={round.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <round.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-primary/80">Round {round.number}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {round.title}
                      </h3>

                      <ul className="space-y-2">
                        {round.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;
