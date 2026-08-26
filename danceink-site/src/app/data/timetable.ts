import { TimetableEntry } from './models';

// Real weekly schedule as provided by the studio. A few interpretive calls were made
// since the source list gave no end times, AM/PM, or explicit studio labels:
// - All times read as PM (evening after-school classes), except the Tue/Thu 9-12
//   Pilates slots, which are morning classes (AM).
// - Durations inferred: 60min for Ballet/Contemporary/Modern, 50min for Pilates/Reformer/
//   Ballet Workout, 45min for the Friday Baby Mama + Pilates Teens slot.
// - Studio A = the dance room, Studio B = the reformer/pilates room, assigned by which
//   parallel list each entry appeared in on Tue/Thu (a genuine assumption, not given).
// - No Saturday classes were listed, so Saturday has no entries.
// - Monday and Wednesday run the identical 8-slot pattern (both rooms, same times).
// className values are i18n keys (translated in the template), not literal text.
export const TIMETABLE: TimetableEntry[] = [
  // Monday
  { id: 'mon-ballet-1800', day: 'mon', startTime: '18:00', endTime: '19:00', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '6-8 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'mon-ballet-1900', day: 'mon', startTime: '19:00', endTime: '20:00', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '11-14 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'mon-contemporary-2000', day: 'mon', startTime: '20:00', endTime: '21:00', className: 'DANCE_ITEMS.CONTEMPORARY', category: 'dance', meta: '11-14 · Studio A', studio: 'A', linkTo: 'contemporary' },
  { id: 'mon-contemporary-2100', day: 'mon', startTime: '21:00', endTime: '22:00', className: 'DANCE_ITEMS.CONTEMPORARY', category: 'dance', meta: 'Adults · Studio A', studio: 'A', linkTo: 'contemporary' },
  { id: 'mon-mat-1810', day: 'mon', startTime: '18:10', endTime: '19:00', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'mon-mat-1910', day: 'mon', startTime: '19:10', endTime: '20:00', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'mon-reformer-2010', day: 'mon', startTime: '20:10', endTime: '21:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'mon-reformer-2110', day: 'mon', startTime: '21:10', endTime: '22:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },

  // Tuesday — two rooms running in parallel
  { id: 'tue-reformer-1730', day: 'tue', startTime: '17:30', endTime: '18:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'tue-reformer-1830', day: 'tue', startTime: '18:30', endTime: '19:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'tue-reformer-1930', day: 'tue', startTime: '19:30', endTime: '20:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'tue-ballet-workout-2030', day: 'tue', startTime: '20:30', endTime: '21:20', className: 'DANCE_ITEMS.BALLET_WORKOUT', category: 'dance', meta: 'Studio B', studio: 'B', linkTo: 'ballet-workout' },
  { id: 'tue-ballet-1730', day: 'tue', startTime: '17:30', endTime: '18:30', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '3-5 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'tue-ballet-1830', day: 'tue', startTime: '18:30', endTime: '19:30', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '8-10 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'tue-contemporary-1930', day: 'tue', startTime: '19:30', endTime: '20:30', className: 'DANCE_ITEMS.CONTEMPORARY', category: 'dance', meta: '6-10 · Studio A', studio: 'A', linkTo: 'contemporary' },
  { id: 'tue-ballet-2030', day: 'tue', startTime: '20:30', endTime: '21:30', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: 'Adults · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'tue-contemporary-2130', day: 'tue', startTime: '21:30', endTime: '22:30', className: 'DANCE_ITEMS.CONTEMPORARY', category: 'dance', meta: '15+ · Studio A', studio: 'A', linkTo: 'contemporary' },
  { id: 'tue-reformer-0900', day: 'tue', startTime: '09:00', endTime: '10:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'tue-mat-1000', day: 'tue', startTime: '10:00', endTime: '11:00', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'tue-reformer-1100', day: 'tue', startTime: '11:00', endTime: '12:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },

  // Wednesday — same pattern as Monday
  { id: 'wed-ballet-1800', day: 'wed', startTime: '18:00', endTime: '19:00', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '6-8 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'wed-ballet-1900', day: 'wed', startTime: '19:00', endTime: '20:00', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '11-14 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'wed-contemporary-2000', day: 'wed', startTime: '20:00', endTime: '21:00', className: 'DANCE_ITEMS.CONTEMPORARY', category: 'dance', meta: '11-14 · Studio A', studio: 'A', linkTo: 'contemporary' },
  { id: 'wed-contemporary-2100', day: 'wed', startTime: '21:00', endTime: '22:00', className: 'DANCE_ITEMS.CONTEMPORARY', category: 'dance', meta: 'Adults · Studio A', studio: 'A', linkTo: 'contemporary' },
  { id: 'wed-mat-1810', day: 'wed', startTime: '18:10', endTime: '19:00', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'wed-mat-1910', day: 'wed', startTime: '19:10', endTime: '20:00', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'wed-reformer-2010', day: 'wed', startTime: '20:10', endTime: '21:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'wed-reformer-2110', day: 'wed', startTime: '21:10', endTime: '22:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },

  // Thursday — two rooms running in parallel
  { id: 'thu-reformer-1730', day: 'thu', startTime: '17:30', endTime: '18:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'thu-reformer-1830', day: 'thu', startTime: '18:30', endTime: '19:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'thu-reformer-1930', day: 'thu', startTime: '19:30', endTime: '20:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'thu-reformer-2030', day: 'thu', startTime: '20:30', endTime: '21:20', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'thu-ballet-1730', day: 'thu', startTime: '17:30', endTime: '18:30', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '3-5 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'thu-ballet-1830', day: 'thu', startTime: '18:30', endTime: '19:30', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: '8-10 · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'thu-modern-musical-1930', day: 'thu', startTime: '19:30', endTime: '20:30', className: 'DANCE_ITEMS.MODERN_MUSICAL', category: 'dance', meta: '6-10 · Studio A', studio: 'A', linkTo: 'modern-musical' },
  { id: 'thu-ballet-workout-2030', day: 'thu', startTime: '20:30', endTime: '21:20', className: 'DANCE_ITEMS.BALLET_WORKOUT', category: 'dance', meta: 'Studio A', studio: 'A', linkTo: 'ballet-workout' },
  { id: 'thu-mat-0900', day: 'thu', startTime: '09:00', endTime: '10:00', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'thu-reformer-1000', day: 'thu', startTime: '10:00', endTime: '11:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'thu-reformer-1100', day: 'thu', startTime: '11:00', endTime: '12:00', className: 'PILATES_ITEMS.REFORMER', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'reformer' },

  // Friday
  { id: 'fri-mat-1700', day: 'fri', startTime: '17:00', endTime: '17:50', className: 'PILATES_ITEMS.MAT', category: 'pilates', meta: 'Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'fri-baby-mama-1800', day: 'fri', startTime: '18:00', endTime: '18:45', className: 'CLASS_NAMES.BABY_MAMA_PILATES_TEENS', category: 'pilates', meta: 'Studio B', studio: 'B' },
  { id: 'fri-modern-musical-1900', day: 'fri', startTime: '19:00', endTime: '20:00', className: 'DANCE_ITEMS.MODERN_MUSICAL', category: 'dance', meta: '11-14 · Studio A', studio: 'A', linkTo: 'modern-musical' },
  { id: 'fri-ballet-2000', day: 'fri', startTime: '20:00', endTime: '21:00', className: 'DANCE_ITEMS.BALLET', category: 'dance', meta: 'Adults · Studio A', studio: 'A', linkTo: 'ballet' }
];
