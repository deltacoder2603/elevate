
import EventTimeline from '@/components/EventTimeline';
import { GridBackground } from '@/components/ui/grid-background';

const Schedule = () => {
    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <GridBackground className="fixed inset-0 z-0 pointer-events-none" />
            <div className="relative z-10 pt-20">
                <main>
                    <EventTimeline />
                </main>
            </div>
        </div>
    );
};

export default Schedule;
