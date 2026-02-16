import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Mic, Lightbulb, Coffee, Sparkles, Flag, Music, Handshake, Presentation, TrendingUp, MessageSquare } from 'lucide-react';

const timelineData = [
  {
    day: 'Day 1',
    date: 'February 24, 2026',
    title: 'POLICY, PROTOCOL & PERSPECTIVE',
    venue: 'PSIT Kanpur',
    events: [
      { time: '10:15 - 10:40', title: 'Inaugural Keynote Address: "The Vision"', description: "The session will feature a keynote address by a distinguished dignitary on India's Roadmap to 2030, highlighting strategic development goals and the future of innovation-driven growth.", icon: Mic },
      { time: '10:40 - 11:10', title: 'Government Insight Session: "Unlocking Grants"', description: 'The session will feature insights from a government representative on navigating funding mechanisms and accessing grants under national initiatives such as DST and MSME.', icon: Lightbulb },
      { time: '11:30 - 12:15', title: 'Panel Discussion: "The Incubator Roadmap"', description: 'Heads of incubation centers and senior academic leaders will deliberate on "From Lab to Market," examining the role of academic incubators in translating research and innovation into commercially viable enterprises.', icon: Users },
      { time: '12:15 - 13:00', title: 'Masterclass: "Design Thinking"', description: 'An industry expert will conduct a structured masterclass on design thinking methodologies, focusing on problem validation, user-centric innovation, and scalable solution development.', icon: Sparkles },
      { time: '13:00 - 14:00', title: 'Networking Luncheon', description: 'A formal networking luncheon facilitating structured interaction among founders, investors, academic leaders, and ecosystem stakeholders.', icon: Coffee },
      { time: '14:00 - 14:45', title: 'Fireside Chat: "The Struggle Is Real"', description: 'A successful founder will share insights from their zero-to-one journey in an informal, interview-style conversation focused on resilience, decision-making, and growth.', icon: MessageSquare },
      { time: '14:45 - 15:30', title: 'Startup Expo Walkthrough', description: 'Distinguished guests and domain experts will formally tour the exhibition area, engaging with startups through live demonstrations and product showcases.', icon: MapPin },
      { time: '15:50 - 16:40', title: 'Skill Workshop: "The Art of the Pitch Deck"', description: 'A venture capital analyst will conduct a practical workshop on building compelling pitch decks, preparing participants for investor interactions on Day 2.', icon: Presentation },
    ],
  },
  {
    day: 'Day 2',
    date: 'February 25, 2026',
    title: 'THE ARENA (PITCH & FUNDING)',
    venue: 'PSIT Kanpur',
    events: [
      { time: '09:30 - 11:00', title: 'The Grand Pitch: Seed Stage (Part I)', description: 'Early-stage startups will present their ventures before a jury comprising venture capitalists and angel investors, followed by structured evaluation and feedback.', icon: TrendingUp },
      { time: '11:00 - 11:20', title: 'Networking Tea Session: "Investor Connect"', description: 'A curated networking break enabling focused interactions between founders and investors to facilitate meaningful dialogue and opportunity exploration.', icon: Coffee },
      { time: '11:20 - 12:00', title: 'Expert Talk: "Valuation & Equity"', description: 'A finance expert will deliver a focused session on startup valuation frameworks, term sheets, equity structuring, dilution dynamics, and capitalization tables.', icon: Presentation },
      { time: '12:00 - 13:00', title: 'The Grand Pitch: Growth Stage (Part II)', description: 'Selected growth-stage startups will present detailed pitches before a panel of venture capitalists, followed by structured question-and-answer interactions.', icon: TrendingUp },
      { time: '14:00 - 14:45', title: 'Reverse Pitch: "Wooing the Founder"', description: 'Investors and incubators will present their value propositions to founders, outlining why startups should choose their firm or accelerator for long-term partnership.', icon: Handshake },
      { time: '14:45 - 15:30', title: 'Elevator Pitch (Open Mic)', description: 'An open rapid-pitch round offering participants the opportunity to present concise 60-second pitches, with recognition awarded to the audience-selected "Crowd Favorite."', icon: Mic },
      { time: '15:50 - 16:30', title: 'Valedictory & Awards Ceremony', description: 'The concluding ceremony will feature an eminent industry leader, followed by the formal announcement of awards and distribution of grant support of up to ₹5 lakh under the Department of Science & Technology (DST)–NIDHI scheme, subject to applicable guidelines.', icon: Sparkles },
    ],
  },
];

const EventTimeline = () => {
  return (
    <section id="timeline" className="py-20 bg-surface-overlay/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Event <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A two-day program focused on innovation, investment perspectives, and startup ecosystem development. Please find the complete schedule for ELEVATE 2026 below.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-16">
          {timelineData.map((dayData, dayIndex) => (
            <motion.div
              key={dayData.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.2 }}
            >
              {/* Day Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-xl font-bold text-primary">{dayData.day}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-muted-foreground text-sm">{dayData.date}</span>
                  <div className="flex items-center gap-1 text-primary/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{dayData.venue}</span>
                  </div>
                </div>
              </div>

              {/* Events for this day */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

                <div className="space-y-4">
                  {dayData.events.map((event, eventIndex) => {
                    const IconComponent = event.icon;
                    return (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: eventIndex * 0.05 }}
                        className="relative pl-12 sm:pl-16"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-2 sm:left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                        </div>

                        {/* Event Card */}
                        <div className="card-elevated p-4 sm:p-5 rounded-xl hover:border-primary/40 transition-all duration-300 group">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                            {/* Icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base leading-tight">
                                  {event.title}
                                </h4>
                              </div>
                              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                {event.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2 text-primary/70">
                                <Clock className="w-3.5 h-3.5" />
                                <span className="text-xs font-medium">{event.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;