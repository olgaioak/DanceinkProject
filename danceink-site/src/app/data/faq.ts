import { FaqCategory } from './models';
import { STUDIO } from './studio';

// Question and answer text lives in i18n (FAQ.*) so both languages stay in step.
// Answers the studio prefers to give in person (prices, payment, registration…)
// set showContact so the page and the widget show call / email / Instagram buttons.
export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'dance',
    titleKey: 'FAQ.CATEGORY_DANCE',
    items: [
      { id: 'dance-classes', questionKey: 'FAQ.DANCE_CLASSES_Q', answerKey: 'FAQ.DANCE_CLASSES_A', link: { labelKey: 'FAQ.LINK_DANCE', route: '/dance' } },
      { id: 'start-age', keywordsKey: 'FAQ.START_AGE_KEYWORDS', questionKey: 'FAQ.START_AGE_Q', answerKey: 'FAQ.START_AGE_A', link: { labelKey: 'FAQ.LINK_DANCE', route: '/dance' } },
      { id: 'adults', questionKey: 'FAQ.ADULTS_Q', answerKey: 'FAQ.ADULTS_A', link: { labelKey: 'FAQ.LINK_DANCE', route: '/dance' } },
      { id: 'beginner', questionKey: 'FAQ.BEGINNER_Q', answerKey: 'FAQ.BEGINNER_A' },
      { id: 'level', questionKey: 'FAQ.LEVEL_Q', answerKey: 'FAQ.LEVEL_A' },
      { id: 'ballet-workout', questionKey: 'FAQ.BALLET_WORKOUT_Q', answerKey: 'FAQ.BALLET_WORKOUT_A', link: { labelKey: 'FAQ.LINK_BALLET_WORKOUT', route: '/dance/ballet-workout' } },
      { id: 'baby-mama', questionKey: 'FAQ.BABY_MAMA_Q', answerKey: 'FAQ.BABY_MAMA_A', link: { labelKey: 'FAQ.LINK_BABY_MAMA', route: '/dance/music-movement' } }
    ]
  },
  {
    id: 'pilates',
    titleKey: 'FAQ.CATEGORY_PILATES',
    items: [
      { id: 'mat-vs-reformer', questionKey: 'FAQ.MAT_VS_REFORMER_Q', answerKey: 'FAQ.MAT_VS_REFORMER_A', link: { labelKey: 'FAQ.LINK_PILATES', route: '/pilates' } },
      { id: 'pilates-size', questionKey: 'FAQ.PILATES_SIZE_Q', answerKey: 'FAQ.PILATES_SIZE_A' },
      { id: 'first-reformer', questionKey: 'FAQ.FIRST_REFORMER_Q', answerKey: 'FAQ.FIRST_REFORMER_A' },
      { id: 'private', keywordsKey: 'FAQ.PRIVATE_KEYWORDS', questionKey: 'FAQ.PRIVATE_Q', answerKey: 'FAQ.PRIVATE_A', showContact: true }
    ]
  },
  {
    id: 'registration',
    titleKey: 'FAQ.CATEGORY_REGISTRATION',
    items: [
      { id: 'all-classes', keywordsKey: 'FAQ.ALL_CLASSES_KEYWORDS', questionKey: 'FAQ.ALL_CLASSES_Q', answerKey: 'FAQ.ALL_CLASSES_A', link: { labelKey: 'FAQ.LINK_TIMETABLE', route: '/timetable' } },
      { id: 'schedule', keywordsKey: 'FAQ.SCHEDULE_KEYWORDS', questionKey: 'FAQ.SCHEDULE_Q', answerKey: 'FAQ.SCHEDULE_A', link: { labelKey: 'FAQ.LINK_TIMETABLE', route: '/timetable' } },
      { id: 'morning', keywordsKey: 'FAQ.MORNING_KEYWORDS', questionKey: 'FAQ.MORNING_Q', answerKey: 'FAQ.MORNING_A', link: { labelKey: 'FAQ.LINK_PILATES_TIMETABLE', route: '/timetable', queryParams: { category: 'pilates' } } },
      { id: 'free-trial', keywordsKey: 'FAQ.FREE_TRIAL_KEYWORDS', questionKey: 'FAQ.FREE_TRIAL_Q', answerKey: 'FAQ.FREE_TRIAL_A', showContact: true },
      { id: 'book-trial', keywordsKey: 'FAQ.BOOK_TRIAL_KEYWORDS', questionKey: 'FAQ.BOOK_TRIAL_Q', answerKey: 'FAQ.BOOK_TRIAL_A', showContact: true },
      { id: 'register', keywordsKey: 'FAQ.REGISTER_KEYWORDS', questionKey: 'FAQ.REGISTER_Q', answerKey: 'FAQ.REGISTER_A', showContact: true },
      { id: 'prices', keywordsKey: 'FAQ.PRICES_KEYWORDS', questionKey: 'FAQ.PRICES_Q', answerKey: 'FAQ.PRICES_A', showContact: true },
      { id: 'payment', keywordsKey: 'FAQ.PAYMENT_KEYWORDS', questionKey: 'FAQ.PAYMENT_Q', answerKey: 'FAQ.PAYMENT_A', showContact: true },
      { id: 'missed-class', questionKey: 'FAQ.MISSED_CLASS_Q', answerKey: 'FAQ.MISSED_CLASS_A', showContact: true },
      { id: 'season', questionKey: 'FAQ.SEASON_Q', answerKey: 'FAQ.SEASON_A', showContact: true }
    ]
  },
  {
    id: 'studio',
    titleKey: 'FAQ.CATEGORY_STUDIO',
    items: [
      { id: 'location', keywordsKey: 'FAQ.LOCATION_KEYWORDS', questionKey: 'FAQ.LOCATION_Q', answerKey: 'FAQ.LOCATION_A', link: { labelKey: 'FAQ.LINK_DIRECTIONS', href: STUDIO.directionsUrl } },
      { id: 'parking', keywordsKey: 'FAQ.PARKING_KEYWORDS', questionKey: 'FAQ.PARKING_Q', answerKey: 'FAQ.PARKING_A', showContact: true },
      { id: 'what-to-wear', keywordsKey: 'FAQ.WHAT_TO_WEAR_KEYWORDS', questionKey: 'FAQ.WHAT_TO_WEAR_Q', answerKey: 'FAQ.WHAT_TO_WEAR_A', showContact: true },
      { id: 'contact', keywordsKey: 'FAQ.CONTACT_KEYWORDS', questionKey: 'FAQ.CONTACT_Q', answerKey: 'FAQ.CONTACT_A', showContact: true }
    ]
  }
];

/** The questions the corner widget offers first; the rest are on the FAQ page. */
export const FEATURED_FAQ_IDS = ['all-classes', 'schedule', 'morning', 'book-trial', 'location'];
