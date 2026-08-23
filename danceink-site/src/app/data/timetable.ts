import { TimetableEntry } from './models';

// One standing weekly program — transcribed in full from the "Week of 24 August"
// timetable mockup. No prev/next or per-week dates: this is the single source
// of truth for the studio's recurring schedule.
export const TIMETABLE: TimetableEntry[] = [
  { id: 'mon-ballet', day: 'mon', startTime: '18:00', endTime: '19:00', className: 'Ballet', category: 'dance', meta: '4+ · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'mon-musical', day: 'mon', startTime: '19:15', endTime: '20:15', className: 'Musical', category: 'dance', meta: '10+ · Studio A', studio: 'A', linkTo: 'musical' },
  { id: 'mon-reformer', day: 'mon', startTime: '19:30', endTime: '20:20', className: 'Reformer', category: 'pilates', meta: '4 spots · Studio B', studio: 'B', linkTo: 'reformer' },

  { id: 'tue-mat', day: 'tue', startTime: '08:00', endTime: '08:50', className: 'Pilates Mat', category: 'pilates', meta: '8 spots · Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'tue-baby', day: 'tue', startTime: '17:00', endTime: '17:40', className: 'Baby class', category: 'dance', meta: '2-4 · Studio A', studio: 'A', linkTo: 'baby-class' },
  { id: 'tue-contemporary', day: 'tue', startTime: '19:00', endTime: '20:15', className: 'Contemporary', category: 'dance', meta: '12+ · Studio A', studio: 'A', linkTo: 'contemporary' },

  { id: 'wed-mat', day: 'wed', startTime: '08:00', endTime: '08:50', className: 'Pilates Mat', category: 'pilates', meta: '8 spots · Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'wed-modern', day: 'wed', startTime: '18:30', endTime: '19:30', className: 'Modern dance', category: 'dance', meta: '8+ · Studio A', studio: 'A', linkTo: 'modern-dance' },
  { id: 'wed-reformer-1-1', day: 'wed', startTime: '20:00', endTime: '20:50', className: 'Reformer 1:1', category: 'private', meta: 'By request', studio: 'B', linkTo: 'reformer-1-1' },

  { id: 'thu-reformer', day: 'thu', startTime: '09:00', endTime: '09:50', className: 'Reformer', category: 'pilates', meta: '4 spots · Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'thu-ballet', day: 'thu', startTime: '18:00', endTime: '19:00', className: 'Ballet', category: 'dance', meta: 'Adults · Studio A', studio: 'A', linkTo: 'ballet' },
  { id: 'thu-contemporary', day: 'thu', startTime: '20:00', endTime: '21:15', className: 'Contemporary', category: 'dance', meta: '12+ · Studio A', studio: 'A', linkTo: 'contemporary' },

  { id: 'fri-mat', day: 'fri', startTime: '08:00', endTime: '08:50', className: 'Pilates Mat', category: 'pilates', meta: '8 spots · Studio B', studio: 'B', linkTo: 'mat' },
  { id: 'fri-baby', day: 'fri', startTime: '17:30', endTime: '18:10', className: 'Baby class', category: 'dance', meta: '2-4 · Studio B', studio: 'B', linkTo: 'baby-class' },
  { id: 'fri-modern', day: 'fri', startTime: '19:00', endTime: '20:00', className: 'Modern dance', category: 'dance', meta: '8+ · Studio A', studio: 'A', linkTo: 'modern-dance' },

  { id: 'sat-reformer', day: 'sat', startTime: '10:00', endTime: '10:50', className: 'Reformer', category: 'pilates', meta: '4 spots · Studio B', studio: 'B', linkTo: 'reformer' },
  { id: 'sat-baby', day: 'sat', startTime: '11:00', endTime: '11:40', className: 'Baby class', category: 'dance', meta: '2-4 · Studio A', studio: 'A', linkTo: 'baby-class' },
  { id: 'sat-musical', day: 'sat', startTime: '12:00', endTime: '13:15', className: 'Musical', category: 'dance', meta: '10+ · Studio A', studio: 'A', linkTo: 'musical' }
];
