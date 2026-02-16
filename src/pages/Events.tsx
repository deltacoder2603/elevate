import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, MapPin, Calendar, X, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { allEvents } from '@/data/events';



const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const search = searchParams.get('search');
    const id = searchParams.get('id');

    if (search) {
      setSearchQuery(search);
    }

    if (id) {
      const event = allEvents.find(e => e.id === Number(id));
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [searchParams]);

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-12 bg-surface-overlay/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Explore <span className="text-gradient">Events</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our exciting events where ideas, journeys, and pitches come alive
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
              </div>


            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing {filteredEvents.length} events
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>


                    <div className="flex items-center justify-between gap-4 mt-auto">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedEvent(event)}
                        className="flex-1"
                      >
                        Details
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSc3URig7_0jHiEX2BZb0CxAvw4yBlzYcb64ouUp9sftBpBusg/viewform?usp=send_form"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchQuery('')}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Event Details Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white hover:bg-white/20"
                    onClick={() => setSelectedEvent(null)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {selectedEvent.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div >
  );
};

export default EventsPage;
