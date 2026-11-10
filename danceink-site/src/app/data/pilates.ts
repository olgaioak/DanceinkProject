import { PilatesProgram } from './models';

// classSize/schedule remain placeholder mockup content (no real source data);
// descriptionKey text for mat/reformer is translated from the real danceink.gr site.
export const PILATES_PROGRAMS: PilatesProgram[] = [
  {
    id: 'mat',
    labelKey: 'PILATES_ITEMS.MAT',
    classSize: 6,
    durationMinutes: 50,
    descriptionKey: 'PILATES_CONTENT.MAT',
    photo: { src: 'assets/images/studio/studio-a.jpg', altKey: 'STUDIO_PAGE.PHOTO_STUDIO_A' },
    schedule: [
      { day: 'tue', startTime: '08:00', endTime: '08:50', studio: 'B' },
      { day: 'wed', startTime: '08:00', endTime: '08:50', studio: 'B' },
      { day: 'fri', startTime: '08:00', endTime: '08:50', studio: 'B' }
    ]
  },
  {
    id: 'reformer',
    labelKey: 'PILATES_ITEMS.REFORMER',
    classSize: 3,
    durationMinutes: 50,
    descriptionKey: 'PILATES_CONTENT.REFORMER',
    photo: { src: 'assets/images/studio/studio-b.jpg', altKey: 'STUDIO_PAGE.PHOTO_STUDIO_B', position: '50% 75%' },
    schedule: [
      { day: 'mon', startTime: '19:30', endTime: '20:20', studio: 'B' },
      { day: 'thu', startTime: '09:00', endTime: '09:50', studio: 'B' },
      { day: 'sat', startTime: '10:00', endTime: '10:50', studio: 'B' }
    ]
  },
  {
    id: 'reformer-1-1',
    labelKey: 'PILATES_ITEMS.REFORMER_1_1',
    classSize: 'private',
    durationMinutes: 50,
    schedule: [{ day: 'wed', startTime: '20:00', endTime: '20:50', studio: 'B', note: 'By request' }]
  }
];
