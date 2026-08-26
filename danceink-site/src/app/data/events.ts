import { ArchivePhoto, StudioEvent } from './models';

// Content transcribed from the Events & Gallery page mockup.
export const EVENTS: StudioEvent[] = [
  {
    id: 'annual-show-2026',
    category: 'show',
    year: 2026,
    featured: true,
    date: '2026-06-14',
    title: 'Annual show',
    venue: 'Pallas Theatre',
    description:
      'Every group performs, from music and movement to the adult contemporary piece. Doors 19:00, curtain 19:30. Tickets through the studio from May.',
    ctaLabel: 'Details',
    ctaLink: '#',
    image: { src: 'assets/images/events/annual-show.jpg', alt: 'Annual show at Pallas Theatre', aspectRatio: '16:10' }
  },
  {
    id: 'reformer-intensive',
    category: 'workshop',
    tag: 'Workshop',
    year: 2026,
    featured: false,
    date: '2026-05-17',
    title: 'Reformer intensive, two Sundays',
    description: 'Six places. Springs, breath, and the long spine — for people already in the group classes.',
    image: { src: 'assets/images/events/reformer-intensive.jpg', alt: 'Reformer intensive workshop', aspectRatio: '4:3' }
  },
  {
    id: 'contemporary-workshop',
    category: 'workshop',
    tag: 'Guest teacher',
    year: 2026,
    featured: false,
    date: '2026-05-03',
    title: 'Contemporary workshop',
    description: 'Two hours, open level, floorwork and improvisation. Visitors from other schools welcome.',
    image: { src: 'assets/images/events/contemporary-workshop.jpg', alt: 'Contemporary workshop', aspectRatio: '4:3' }
  },
  {
    id: 'open-day-2026',
    category: 'open-day',
    tag: 'Open day',
    year: 2026,
    featured: false,
    date: '2026-09-12',
    title: 'Try any class, free',
    description: 'Doors open 10:00–18:00. Short taster sessions on the hour, dance and Pilates both.',
    image: { src: 'assets/images/events/open-day.jpg', alt: 'Open day taster sessions', aspectRatio: '4:3' }
  }
];

// The archive grid shows 5 photo tiles plus a "+212" tile linking to the rest —
// that last tile is a UI affordance, not a photo, so it's tracked as a count.
export const ARCHIVE_PHOTOS: ArchivePhoto[] = [
  { id: 'archive-1', year: 2026, image: { src: 'assets/images/events/archive-1.jpg', alt: 'Archive photo', aspectRatio: '1:1' } },
  { id: 'archive-2', year: 2025, image: { src: 'assets/images/events/archive-2.jpg', alt: 'Archive photo', aspectRatio: '1:1' } },
  { id: 'archive-3', year: 2025, image: { src: 'assets/images/events/archive-3.jpg', alt: 'Archive photo', aspectRatio: '1:1' } },
  { id: 'archive-4', year: 2024, image: { src: 'assets/images/events/archive-4.jpg', alt: 'Archive photo', aspectRatio: '1:1' } },
  { id: 'archive-5', year: 2023, image: { src: 'assets/images/events/archive-5.jpg', alt: 'Archive photo', aspectRatio: '1:1' } }
];

export const ARCHIVE_MORE_COUNT = 212;
