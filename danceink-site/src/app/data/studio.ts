import { StudioInfo } from './models';

// Contact details, address, and social links are real, transcribed from danceink.gr.
// Bio text moved to i18n (STUDIO_PAGE.BIO) since it's real content that needs both languages.
// mapEmbedUrl is a keyless Google Maps embed built from the address above.
// Photos are web-sized copies of the studio's own photos.
export const STUDIO: StudioInfo = {
  brandName: 'DANCE ink',
  addressLines: ['Σταδίου 48-52', 'Νέα Σμύρνη 171 23'],
  phone: '+30 21 0932 9479',
  email: 'danceink.gr@gmail.com',
  instagramHandle: '@danceink.gr',
  receptionHours: [
    { days: 'FOOTER.MON_FRI', hours: '18:00–21:00' }
  ],
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Σταδίου+48-52,+Νέα+Σμύρνη+171+23',
  mapEmbedUrl:
    'https://www.google.com/maps?q=%CE%A3%CF%84%CE%B1%CE%B4%CE%AF%CE%BF%CF%85%2048-52%2C%20%CE%9D%CE%AD%CE%B1%20%CE%A3%CE%BC%CF%8D%CF%81%CE%BD%CE%B7%20171%2023&output=embed',
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com/danceink.gr' },
    { label: 'Facebook', url: 'https://facebook.com/danceink.gr' }
  ],
  mainPhoto: { src: 'assets/images/studio/studio-main.jpg', altKey: 'STUDIO_PAGE.PHOTO_MAIN' },
  studioPhotos: [
    { src: 'assets/images/studio/studio-a.jpg', altKey: 'STUDIO_PAGE.PHOTO_STUDIO_A' },
    { src: 'assets/images/studio/studio-b.jpg', altKey: 'STUDIO_PAGE.PHOTO_STUDIO_B' },
    { src: 'assets/images/studio/reception.jpg', altKey: 'STUDIO_PAGE.PHOTO_RECEPTION' }
  ]
};
