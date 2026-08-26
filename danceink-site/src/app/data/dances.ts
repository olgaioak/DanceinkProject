import { DanceDiscipline } from './models';

// Restructured to match the real danceink.gr site's 4 dance departments
// (Ballet, Modern-Musical, Contemporary, Music & Movement — plus Pilates
// Mat/Reformer in pilates.ts). shortDescriptionKey text is translated from
// the real site for all four; aboutClass/whatToBring/schedule/capacity have
// no equivalent on the real site and remain placeholder copy.
// Ballet Workout was added afterwards (not on the real site) — it already
// existed as a class in the real timetable (data/timetable.ts) with no
// discipline of its own, so its schedule below matches that real data;
// everything else about it (capacity, aboutClass, whatToBring) is placeholder.
export const DANCES: DanceDiscipline[] = [
  {
    id: 'ballet',
    labelKey: 'DANCE_ITEMS.BALLET',
    order: 1,
    ageRange: { min: 4 },
    ageGroups: ['4-7', '8-11', '12+', 'adults'],
    durationMinutes: 60,
    maxCapacity: 12,
    studio: 'A',
    shortDescriptionKey: 'DANCE_CONTENT.BALLET',
    aboutClass:
      'We start at the barre for twenty minutes, move to centre work, then finish with a combination across the floor. Younger groups spend more time on musicality and less on repetition. Twice a year the classes work towards the show, and rehearsals replace the last part of each session in the two weeks before.',
    whatToBring:
      'Fitted clothes you can see your line in, soft ballet shoes, hair tied back, and water. We keep spare shoes in most sizes for a first trial class.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/ballet.jpg', alt: 'Ballet class at the barre', aspectRatio: '3:2' },
    schedule: [
      { day: 'mon', startTime: '18:00', endTime: '19:00', ageNote: '4+' },
      { day: 'thu', startTime: '18:00', endTime: '19:00', ageNote: 'adults' },
      { day: 'sat', startTime: '11:00', endTime: '12:00', ageNote: '4-7' }
    ]
  },
  {
    id: 'modern-musical',
    labelKey: 'DANCE_ITEMS.MODERN_MUSICAL',
    order: 2,
    ageRange: { min: 6 },
    ageGroups: ['4-7', '8-11', '12+'],
    durationMinutes: 60,
    maxCapacity: 16,
    studio: 'A',
    shortDescriptionKey: 'DANCE_CONTENT.MODERN_MUSICAL',
    aboutClass:
      'Classes combine routine-based modern choreography with the song and character work of musical theatre, building towards one number per term, performed at the annual show in June.',
    whatToBring: 'Comfortable clothes you can move freely in, trainers or dance sneakers, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/modern-musical.jpg', alt: 'Modern and musical theatre dance class', aspectRatio: '3:2' },
    schedule: [
      { day: 'mon', startTime: '19:15', endTime: '20:15' },
      { day: 'wed', startTime: '18:30', endTime: '19:30' },
      { day: 'fri', startTime: '19:00', endTime: '20:00' },
      { day: 'sat', startTime: '12:00', endTime: '13:15' }
    ]
  },
  {
    id: 'contemporary',
    labelKey: 'DANCE_ITEMS.CONTEMPORARY',
    order: 3,
    ageRange: { min: 6 },
    ageGroups: ['4-7', '8-11', '12+', 'adults'],
    durationMinutes: 75,
    maxCapacity: 12,
    studio: 'A',
    shortDescriptionKey: 'DANCE_CONTENT.CONTEMPORARY',
    aboutClass:
      'Class moves from a floor-based warm-up into weight-sharing and improvisation tasks, then a set phrase that develops over several weeks.',
    whatToBring: 'Fitted, stretchy clothing, bare feet or socks, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/contemporary.jpg', alt: 'Contemporary dance class', aspectRatio: '3:2' },
    schedule: [
      { day: 'tue', startTime: '19:00', endTime: '20:15' },
      { day: 'thu', startTime: '20:00', endTime: '21:15' }
    ]
  },
  {
    id: 'music-movement',
    labelKey: 'DANCE_ITEMS.MUSIC_MOVEMENT',
    order: 4,
    ageRange: { min: 2, max: 4 },
    ageGroups: ['2-4'],
    durationMinutes: 40,
    maxCapacity: 8,
    studio: 'A',
    shortDescriptionKey: 'DANCE_CONTENT.MUSIC_MOVEMENT',
    aboutClass:
      'Forty minutes of music, games, and moving together as a group, with simple routines that build coordination and confidence.',
    whatToBring: 'Comfortable clothes, bare feet or socks, and a favourite small toy is welcome.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/music-movement.jpg', alt: 'Music and movement class for young children', aspectRatio: '3:2' },
    schedule: [
      { day: 'tue', startTime: '17:00', endTime: '17:40', studio: 'A' },
      { day: 'fri', startTime: '17:30', endTime: '18:10', studio: 'B' },
      { day: 'sat', startTime: '11:00', endTime: '11:40', studio: 'A' }
    ]
  },
  {
    id: 'ballet-workout',
    labelKey: 'DANCE_ITEMS.BALLET_WORKOUT',
    order: 5,
    ageRange: { min: 18 },
    ageGroups: ['adults'],
    durationMinutes: 50,
    maxCapacity: 14,
    studio: 'B',
    shortDescriptionKey: 'DANCE_CONTENT.BALLET_WORKOUT',
    aboutClass:
      'A fitness-focused class using ballet vocabulary — barre work for strength and posture, then floor-based conditioning. No dance experience needed.',
    whatToBring: 'Comfortable workout clothes, grip socks or bare feet, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/ballet-workout.jpg', alt: 'Ballet-inspired fitness class', aspectRatio: '3:2' },
    schedule: [
      { day: 'tue', startTime: '20:30', endTime: '21:20', studio: 'B' },
      { day: 'thu', startTime: '20:30', endTime: '21:20', studio: 'A' }
    ]
  }
];
