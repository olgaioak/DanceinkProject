import { DanceDiscipline } from './models';

// Content transcribed from the "All Dances" list and Ballet detail mockups.
// Ballet is the only discipline with a full detail-page design reference;
// aboutClass/whatToBring for the other four are a reasonable extrapolation
// from their list-row description and should be reviewed against real copy.
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
    shortDescription:
      'Classical technique taught slowly and properly — barre, centre, and a combination at the end. The base for everything else in the school.',
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
    id: 'modern-dance',
    labelKey: 'DANCE_ITEMS.MODERN_DANCE',
    order: 2,
    ageRange: { min: 8 },
    ageGroups: ['8-11', '12+'],
    durationMinutes: 60,
    maxCapacity: 14,
    studio: 'A',
    shortDescription:
      'Faster and louder than ballet, with routines that change every few weeks. Good for children who want to perform sooner rather than later.',
    aboutClass:
      'Classes are upbeat and routine-based — a warm-up, then blocks of choreography that build across a few weeks until ready to perform. The style leans commercial and contemporary pop.',
    whatToBring: 'Comfortable clothes you can move freely in, trainers or dance sneakers, and water.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/modern-dance.jpg', alt: 'Modern dance class', aspectRatio: '3:2' },
    schedule: [
      { day: 'wed', startTime: '18:30', endTime: '19:30' },
      { day: 'fri', startTime: '19:00', endTime: '20:00' }
    ]
  },
  {
    id: 'contemporary',
    labelKey: 'DANCE_ITEMS.CONTEMPORARY',
    order: 3,
    ageRange: { min: 12 },
    ageGroups: ['12+', 'adults'],
    durationMinutes: 75,
    maxCapacity: 12,
    studio: 'A',
    shortDescription:
      'Floorwork, weight, and improvisation. Some ballet or modern background helps, but the adult group takes complete beginners twice a year.',
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
    id: 'musical',
    labelKey: 'DANCE_ITEMS.MUSICAL',
    order: 4,
    ageRange: { min: 10 },
    ageGroups: ['8-11', '12+'],
    durationMinutes: 75,
    maxCapacity: 16,
    studio: 'A',
    shortDescription:
      'Song, character, and choreography together. Each term builds one number from a show, performed at the annual night in June.',
    aboutClass:
      'Classes combine singing, acting, and choreography to build one number per term, ready for the annual show at Pallas Theatre in June.',
    whatToBring: 'Comfortable clothes and shoes you can dance in, and a notebook for lyrics.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/musical.jpg', alt: 'Musical theatre class', aspectRatio: '3:2' },
    schedule: [
      { day: 'mon', startTime: '19:15', endTime: '20:30' },
      { day: 'sat', startTime: '12:00', endTime: '13:15' }
    ]
  },
  {
    id: 'baby-class',
    labelKey: 'DANCE_ITEMS.BABY_CLASS',
    order: 5,
    ageRange: { min: 2, max: 4 },
    ageGroups: ['2-4'],
    durationMinutes: 40,
    maxCapacity: 8,
    studio: 'A',
    shortDescription:
      'Forty minutes of music, games, and moving in a group. A parent stays in the room for the first month.',
    aboutClass:
      'Forty minutes of music, games, and moving together as a group, with simple routines that build coordination and confidence.',
    whatToBring: 'Comfortable clothes, bare feet or socks, and a favourite small toy is welcome.',
    teacher: 'Ioanna Kanellopoulou',
    image: { src: 'assets/images/dance/baby-class.jpg', alt: 'Baby dance class', aspectRatio: '3:2' },
    schedule: [
      { day: 'tue', startTime: '17:00', endTime: '17:40', studio: 'A' },
      { day: 'fri', startTime: '17:30', endTime: '18:10', studio: 'B' },
      { day: 'sat', startTime: '11:00', endTime: '11:40', studio: 'A' }
    ]
  }
];
