import { DanceDiscipline } from './models';

// Restructured to match the real danceink.gr site's 4 dance departments
// (Ballet, Modern-Musical, Contemporary, Music & Movement — plus Pilates
// Mat/Reformer in pilates.ts). shortDescriptionKey text is translated from
// the real site for all four; capacity has no equivalent on the real
// site and remains placeholder.
// Ballet Workout was added afterwards (not on the real site); its days and hours,
// like every dance's, come from the real timetable (data/timetable.ts) and
// its capacity is placeholder.
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
    teacher: 'Ioanna Kanellopoulou',
    photo: { src: 'assets/images/dances/ballet.jpeg', altKey: 'DANCE_PHOTOS.BALLET' },
    levels: [
      { nameKey: 'DANCE_LEVELS.PREPARATOIRE', agesKey: 'LEVEL_AGES.3_5_TO_5' },
      { nameKey: 'DANCE_LEVELS.BALLET_1', agesKey: 'LEVEL_AGES.6_TO_8' },
      { nameKey: 'DANCE_LEVELS.BALLET_2', agesKey: 'LEVEL_AGES.9_TO_11' },
      { nameKey: 'DANCE_LEVELS.DEGRE_1', agesKey: 'LEVEL_AGES.12_TO_15' },
      { nameKey: 'DANCE_LEVELS.ADULT_BALLET', agesKey: 'LEVEL_AGES.15_PLUS' }
    ],
    detailSections: [
      {
        headingKey: 'BALLET_DETAIL.LEARN_HEADING',
        points: [
          { titleKey: 'BALLET_DETAIL.TECHNIQUE_TITLE', bodyKey: 'BALLET_DETAIL.TECHNIQUE_BODY' },
          { titleKey: 'BALLET_DETAIL.FLEXIBILITY_TITLE', bodyKey: 'BALLET_DETAIL.FLEXIBILITY_BODY' },
          { titleKey: 'BALLET_DETAIL.MUSICALITY_TITLE', bodyKey: 'BALLET_DETAIL.MUSICALITY_BODY' },
          { titleKey: 'BALLET_DETAIL.GRACE_TITLE', bodyKey: 'BALLET_DETAIL.GRACE_BODY' },
          { titleKey: 'BALLET_DETAIL.DISCIPLINE_TITLE', bodyKey: 'BALLET_DETAIL.DISCIPLINE_BODY' }
        ]
      },
      {
        headingKey: 'BALLET_DETAIL.JOURNEY_HEADING',
        paragraphKeys: ['BALLET_DETAIL.JOURNEY_BODY']
      },
      {
        headingKey: 'BALLET_DETAIL.BEGIN_HEADING',
        paragraphKeys: ['BALLET_DETAIL.BEGIN_BODY']
      }
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
    teacher: 'Ioanna Kanellopoulou',
    levels: [
      { nameKey: 'DANCE_LEVELS.CHILDREN', agesKey: 'LEVEL_AGES.6_TO_10' },
      { nameKey: 'DANCE_LEVELS.TEENS', agesKey: 'LEVEL_AGES.11_PLUS' }
    ],
    detailSections: [
      {
        headingKey: 'MODERN_DETAIL.LEARN_HEADING',
        points: [
          { titleKey: 'MODERN_DETAIL.TECHNIQUE_TITLE', bodyKey: 'MODERN_DETAIL.TECHNIQUE_BODY' },
          { titleKey: 'MODERN_DETAIL.STRENGTH_TITLE', bodyKey: 'MODERN_DETAIL.STRENGTH_BODY' },
          { titleKey: 'MODERN_DETAIL.MUSICALITY_TITLE', bodyKey: 'MODERN_DETAIL.MUSICALITY_BODY' },
          { titleKey: 'MODERN_DETAIL.CREATIVITY_TITLE', bodyKey: 'MODERN_DETAIL.CREATIVITY_BODY' },
          { titleKey: 'MODERN_DETAIL.CONFIDENCE_TITLE', bodyKey: 'MODERN_DETAIL.CONFIDENCE_BODY' }
        ]
      },
      {
        headingKey: 'MODERN_DETAIL.JOURNEY_HEADING',
        paragraphKeys: ['MODERN_DETAIL.JOURNEY_BODY']
      },
      {
        headingKey: 'MODERN_DETAIL.MOVEMENT_HEADING',
        paragraphKeys: ['MODERN_DETAIL.MOVEMENT_BODY']
      }
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
    teacher: 'Ioanna Kanellopoulou',
    photo: { src: 'assets/images/dances/contemporary.jpg', altKey: 'DANCE_PHOTOS.CONTEMPORARY', position: '50% 70%' },
    levels: [
      { nameKey: 'DANCE_LEVELS.CHILDREN', agesKey: 'LEVEL_AGES.6_TO_10' },
      { nameKey: 'DANCE_LEVELS.TEENS', agesKey: 'LEVEL_AGES.11_TO_14' },
      { nameKey: 'DANCE_LEVELS.ADVANCED_CONTEMPORARY', agesKey: 'LEVEL_AGES.15_PLUS' },
      { nameKey: 'DANCE_LEVELS.ADULT_CONTEMPORARY', agesKey: 'LEVEL_AGES.18_PLUS' }
    ],
    detailSections: [
      {
        headingKey: 'CONTEMPORARY_DETAIL.LEARN_HEADING',
        points: [
          { titleKey: 'CONTEMPORARY_DETAIL.TECHNIQUE_TITLE', bodyKey: 'CONTEMPORARY_DETAIL.TECHNIQUE_BODY' },
          { titleKey: 'CONTEMPORARY_DETAIL.STRENGTH_TITLE', bodyKey: 'CONTEMPORARY_DETAIL.STRENGTH_BODY' },
          { titleKey: 'CONTEMPORARY_DETAIL.FLOOR_TITLE', bodyKey: 'CONTEMPORARY_DETAIL.FLOOR_BODY' },
          { titleKey: 'CONTEMPORARY_DETAIL.MUSICALITY_TITLE', bodyKey: 'CONTEMPORARY_DETAIL.MUSICALITY_BODY' },
          { titleKey: 'CONTEMPORARY_DETAIL.CREATIVITY_TITLE', bodyKey: 'CONTEMPORARY_DETAIL.CREATIVITY_BODY' }
        ]
      },
      {
        headingKey: 'CONTEMPORARY_DETAIL.JOURNEY_HEADING',
        paragraphKeys: ['CONTEMPORARY_DETAIL.JOURNEY_BODY']
      },
      {
        headingKey: 'CONTEMPORARY_DETAIL.EMOTIONS_HEADING',
        paragraphKeys: ['CONTEMPORARY_DETAIL.EMOTIONS_BODY']
      }
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
    teacher: 'Ioanna Kanellopoulou',
    photo: { src: 'assets/images/dances/music-movement.jpg', altKey: 'DANCE_PHOTOS.MUSIC_MOVEMENT' },
    levels: [{ nameKey: 'DANCE_LEVELS.BABY_MAMA', agesKey: 'LEVEL_AGES.2_TO_3_5' }],
    detailSections: [
      {
        headingKey: 'MUSIC_MOVEMENT_DETAIL.DISCOVER_HEADING',
        points: [
          { titleKey: 'MUSIC_MOVEMENT_DETAIL.MUSIC_TITLE', bodyKey: 'MUSIC_MOVEMENT_DETAIL.MUSIC_BODY' },
          { titleKey: 'MUSIC_MOVEMENT_DETAIL.MOVEMENT_TITLE', bodyKey: 'MUSIC_MOVEMENT_DETAIL.MOVEMENT_BODY' },
          { titleKey: 'MUSIC_MOVEMENT_DETAIL.CREATIVITY_TITLE', bodyKey: 'MUSIC_MOVEMENT_DETAIL.CREATIVITY_BODY' },
          { titleKey: 'MUSIC_MOVEMENT_DETAIL.SOCIAL_TITLE', bodyKey: 'MUSIC_MOVEMENT_DETAIL.SOCIAL_BODY' },
          { titleKey: 'MUSIC_MOVEMENT_DETAIL.SENSORY_TITLE', bodyKey: 'MUSIC_MOVEMENT_DETAIL.SENSORY_BODY' },
          { titleKey: 'MUSIC_MOVEMENT_DETAIL.CONNECTION_TITLE', bodyKey: 'MUSIC_MOVEMENT_DETAIL.CONNECTION_BODY' }
        ]
      },
      {
        headingKey: 'MUSIC_MOVEMENT_DETAIL.JOURNEY_HEADING',
        paragraphKeys: ['MUSIC_MOVEMENT_DETAIL.JOURNEY_BODY']
      },
      {
        headingKey: 'MUSIC_MOVEMENT_DETAIL.DANCE_HEADING',
        paragraphKeys: ['MUSIC_MOVEMENT_DETAIL.DANCE_BODY']
      }
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
    aboutKey: 'DANCE_ABOUT.BALLET_WORKOUT',
    teacher: 'Ioanna Kanellopoulou',
    photo: { src: 'assets/images/dances/ballet-workout.jpg', altKey: 'DANCE_PHOTOS.BALLET_WORKOUT' },
    levelsNoteKey: 'DANCE_LEVELS.BALLET_WORKOUT_NOTE',
    detailSections: [
      {
        headingKey: 'BALLET_WORKOUT_DETAIL.LEARN_HEADING',
        points: [
          { titleKey: 'BALLET_WORKOUT_DETAIL.TONING_TITLE', bodyKey: 'BALLET_WORKOUT_DETAIL.TONING_BODY' },
          { titleKey: 'BALLET_WORKOUT_DETAIL.POSTURE_TITLE', bodyKey: 'BALLET_WORKOUT_DETAIL.POSTURE_BODY' },
          { titleKey: 'BALLET_WORKOUT_DETAIL.FLEXIBILITY_TITLE', bodyKey: 'BALLET_WORKOUT_DETAIL.FLEXIBILITY_BODY' },
          { titleKey: 'BALLET_WORKOUT_DETAIL.BALANCE_TITLE', bodyKey: 'BALLET_WORKOUT_DETAIL.BALANCE_BODY' },
          { titleKey: 'BALLET_WORKOUT_DETAIL.CORE_TITLE', bodyKey: 'BALLET_WORKOUT_DETAIL.CORE_BODY' }
        ]
      },
      {
        headingKey: 'BALLET_WORKOUT_DETAIL.JOURNEY_HEADING',
        paragraphKeys: ['BALLET_WORKOUT_DETAIL.JOURNEY_BODY']
      },
      {
        headingKey: 'BALLET_WORKOUT_DETAIL.FEEL_HEADING',
        paragraphKeys: ['BALLET_WORKOUT_DETAIL.FEEL_BODY']
      }
    ]
  }
];
