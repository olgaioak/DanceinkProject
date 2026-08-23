import { PilatesProgram } from './models';

// Content transcribed from the Pilates page mockup.
export const PILATES_PROGRAMS: PilatesProgram[] = [
  {
    id: 'mat',
    labelKey: 'PILATES_ITEMS.MAT',
    classSize: 8,
    durationMinutes: 50,
    level: 'All, no experience needed',
    description:
      'Fifty minutes on the floor with small props. Best if you want mobility and a stronger centre without machines. Mornings and early evenings.',
    image: { src: 'assets/images/pilates/mat.jpg', alt: 'Pilates mat class', aspectRatio: '3:2' },
    schedule: [
      { day: 'tue', startTime: '08:00', endTime: '08:50', studio: 'B' },
      { day: 'wed', startTime: '08:00', endTime: '08:50', studio: 'B' },
      { day: 'fri', startTime: '08:00', endTime: '08:50', studio: 'B' }
    ]
  },
  {
    id: 'reformer',
    labelKey: 'PILATES_ITEMS.REFORMER',
    classSize: 4,
    durationMinutes: 50,
    level: 'Before you join: one private session',
    description:
      'Four reformers, four people. Spring resistance makes the work precise, which is why we ask for a private assessment before your first group class.',
    image: { src: 'assets/images/pilates/reformer.jpg', alt: 'Pilates reformer group class', aspectRatio: '3:2' },
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
    level: 'Private assessment',
    description: 'New to the reformer? Your first session is a private assessment so we can set the springs to you.',
    image: { src: 'assets/images/pilates/reformer-1-1.jpg', alt: 'Private reformer session', aspectRatio: '4:5' },
    schedule: [{ day: 'wed', startTime: '20:00', endTime: '20:50', studio: 'B', note: 'By request' }]
  }
];
