import { DanceDiscipline } from './models';

// Restructured to match the real danceink.gr site's 4 dance departments
// (Ballet, Modern-Musical, Contemporary, Music & Movement — plus Pilates
// Mat/Reformer in pilates.ts). shortDescriptionKey text is translated from
// the real site for all four; aboutClass/whatToBring/capacity have
// no equivalent on the real site and remain placeholder copy.
// Ballet Workout was added afterwards (not on the real site); its days and hours,
// like every dance's, come from the real timetable (data/timetable.ts) and
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
    aboutKey: 'DANCE_ABOUT.BALLET',
    aboutClass:
      'We start at the barre for twenty minutes, move to centre work, then finish with a combination across the floor. Younger groups spend more time on musicality and less on repetition. Twice a year the classes work towards the show, and rehearsals replace the last part of each session in the two weeks before.',
    whatToBring:
      'Fitted clothes you can see your line in, soft ballet shoes, hair tied back, and water. We keep spare shoes in most sizes for a first trial class.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/ballet.jpg', alt: 'Ballet class at the barre', aspectRatio: '3:2' },
    levels: [
      { nameKey: 'DANCE_LEVELS.PREPARATOIRE', agesKey: 'LEVEL_AGES.3_5_TO_5' },
      { nameKey: 'DANCE_LEVELS.BALLET_1', agesKey: 'LEVEL_AGES.6_TO_8' },
      { nameKey: 'DANCE_LEVELS.BALLET_2', agesKey: 'LEVEL_AGES.9_TO_11' },
      { nameKey: 'DANCE_LEVELS.DEGRE_1', agesKey: 'LEVEL_AGES.12_TO_15' },
      { nameKey: 'DANCE_LEVELS.ADULT_BALLET', agesKey: 'LEVEL_AGES.15_PLUS' }
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
    aboutKey: 'DANCE_ABOUT.MODERN_MUSICAL',
    aboutClass:
      'Classes combine routine-based modern choreography with the song and character work of musical theatre, building towards one number per term, performed at the annual show in June.',
    whatToBring: 'Comfortable clothes you can move freely in, trainers or dance sneakers, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/modern-musical.jpg', alt: 'Modern and musical theatre dance class', aspectRatio: '3:2' },
    levels: [
      { nameKey: 'DANCE_LEVELS.CHILDREN', agesKey: 'LEVEL_AGES.6_TO_10' },
      { nameKey: 'DANCE_LEVELS.TEENS', agesKey: 'LEVEL_AGES.11_PLUS' }
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
    aboutKey: 'DANCE_ABOUT.CONTEMPORARY',
    aboutClass:
      'Class moves from a floor-based warm-up into weight-sharing and improvisation tasks, then a set phrase that develops over several weeks.',
    whatToBring: 'Fitted, stretchy clothing, bare feet or socks, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/contemporary.jpg', alt: 'Contemporary dance class', aspectRatio: '3:2' },
    levels: [
      { nameKey: 'DANCE_LEVELS.CHILDREN', agesKey: 'LEVEL_AGES.6_TO_10' },
      { nameKey: 'DANCE_LEVELS.TEENS', agesKey: 'LEVEL_AGES.11_TO_14' },
      { nameKey: 'DANCE_LEVELS.ADVANCED_CONTEMPORARY', agesKey: 'LEVEL_AGES.15_PLUS' },
      { nameKey: 'DANCE_LEVELS.ADULT_CONTEMPORARY', agesKey: 'LEVEL_AGES.18_PLUS' }
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
    aboutKey: 'DANCE_ABOUT.MUSIC_MOVEMENT',
    aboutClass:
      'Forty minutes of music, games, and moving together as a group, with simple routines that build coordination and confidence.',
    whatToBring: 'Comfortable clothes, bare feet or socks, and a favourite small toy is welcome.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/music-movement.jpg', alt: 'Music and movement class for young children', aspectRatio: '3:2' },
    levels: [{ nameKey: 'DANCE_LEVELS.BABY_MAMA', agesKey: 'LEVEL_AGES.2_TO_3_5' }]
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
    aboutKey: 'DANCE_ABOUT.BALLET_WORKOUT',
    aboutClass:
      'A fitness-focused class using ballet vocabulary — barre work for strength and posture, then floor-based conditioning. No dance experience needed.',
    whatToBring: 'Comfortable workout clothes, grip socks or bare feet, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/ballet-workout.jpg', alt: 'Ballet-inspired fitness class', aspectRatio: '3:2' },
    levelsNoteKey: 'DANCE_LEVELS.BALLET_WORKOUT_NOTE'
  }
];
