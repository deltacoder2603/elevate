import HeroSection from '@/components/HeroSection';
import { GuestsSection } from '@/components/GuestsSection';


import PrizesSection from '@/components/PrizesSection';
import EventGallery from '@/components/EventGallery';
import { GridBackground } from '@/components/ui/grid-background';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <GridBackground className="fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        <main>
          <HeroSection />
          <GuestsSection />

          <PrizesSection />
          <EventGallery />
        </main>
      </div>
    </div>
  );
};

export default Index;
