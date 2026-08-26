import { StudioInfo } from './models';

// Contact details, address, and social links are real, transcribed from danceink.gr.
// Bio text moved to i18n (STUDIO_PAGE.BIO) since it's real content that needs both languages.
// The map/portrait/studio photo assets have no real-site source and remain placeholder
// pending real content.
export const STUDIO: StudioInfo = {
  brandName: 'DANCE ink',
  ownerName: 'Ioanna Kanellopoulou',
  addressLines: ['Σταδίου 48-52', 'Νέα Σμύρνη 171 23'],
  phone: '+30 21 0932 9479',
  email: 'danceink.gr@gmail.com',
  instagramHandle: '@danceink.gr',
  receptionHours: [
    { days: 'FOOTER.MON_FRI', hours: '18:00–21:00' }
  ],
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Σταδίου+48-52,+Νέα+Σμύρνη+171+23',
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com/danceink.gr' },
    { label: 'Facebook', url: 'https://facebook.com/danceink.gr' }
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
