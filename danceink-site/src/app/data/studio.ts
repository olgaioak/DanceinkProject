import { StudioInfo } from './models';

export const STUDIO: StudioInfo = {
  brandName: 'DANCE ink',
  ownerName: 'Ioanna Kanellopoulou',
  bio: [
    'Trained in classical ballet and contemporary, certified in mat and reformer Pilates. She opened DANCE ink to keep both practices in the same room, because the students who do them together move differently.',
    'Two studios: a sprung floor with a barre and mirrors, and a smaller room with four reformers. Changing room, showers, and somewhere for parents to sit.'
  ],
  addressLines: ['Λεωφ. Παράδειγμα 24', 'Αθήνα 115 21'],
  phone: '+30 210 000 0000',
  email: 'hello@danceink.gr',
  instagramHandle: '@danceink',
  receptionHours: [
    { days: 'Mon–Fri', hours: '08:00–21:30' },
    { days: 'Sat', hours: '09:00–14:00' }
  ],
  directionsUrl: '#',
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com/danceink' },
    { label: 'Facebook', url: 'https://facebook.com/danceink' },
    { label: 'Timetable', url: '/timetable' },
    { label: 'Events', url: '/events' },
    { label: 'Terms', url: '/terms' }
  ],
  portrait: {
    src: 'assets/images/studio/portrait.jpg',
    alt: 'Portrait of Ioanna Kanellopoulou',
    aspectRatio: '4:5'
  },
  studioPhotos: [
    { label: 'Studio A', src: 'assets/images/studio/studio-a.jpg', alt: 'Studio A, sprung floor with barre and mirrors', aspectRatio: '3:2' },
    { label: 'Studio B', src: 'assets/images/studio/studio-b.jpg', alt: 'Studio B, reformer room', aspectRatio: '3:2' },
    { label: 'Reception', src: 'assets/images/studio/reception.jpg', alt: 'Reception area', aspectRatio: '3:2' }
  ]
};
