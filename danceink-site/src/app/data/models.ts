export interface AgeRange {
  min: number;
  max?: number;
}

export type ClassCategory = 'dance' | 'pilates' | 'private';
export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type AspectRatio = '1:1' | '3:2' | '4:5' | '16:10' | '4:3' | '16:9';

export interface ImageAsset {
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
}

export interface ClassSession {
  day: Weekday;
  startTime: string;
  endTime: string;
  ageNote?: string;
  studio?: string;
  note?: string;
}

export type AgeGroup = '2-4' | '4-7' | '8-11' | '12+' | 'adults';

export interface DanceDiscipline {
  id: string;
  labelKey: string;
  order: number;
  ageRange: AgeRange;
  ageGroups: AgeGroup[];
  durationMinutes: number;
  maxCapacity: number;
  studio: string;
  shortDescriptionKey: string;
  aboutKey?: string;
  teacher: string;
  /** Real photo for the dance; pages show a striped placeholder while this is missing. */
  photo?: Photo;
  levels?: DanceLevel[];
  levelsNoteKey?: string;
  /** Extra content sections shown in the main column of the dance's details page. */
  detailSections?: DanceDetailSection[];
}

export interface DanceDetailSection {
  headingKey: string;
  points?: { titleKey: string; bodyKey: string }[];
  paragraphKeys?: string[];
}

export interface Photo {
  src: string;
  /** Translation key for the image description read by screen readers. */
  altKey: string;
  /** Which part of the photo to keep when it is cropped to fit (CSS object-position), e.g. '50% 100%'. */
  position?: string;
  /** Overrides the shape of the box the photo sits in (CSS aspect-ratio), e.g. '5 / 4' for a tall photo. */
  aspectRatio?: string;
}

export interface DanceLevel {
  nameKey: string;
  agesKey?: string;
}

export interface PilatesProgram {
  id: 'mat' | 'reformer' | 'reformer-1-1';
  labelKey: string;
  classSize: number | 'private';
  durationMinutes: number;
  descriptionKey?: string;
  /** Real photo for the class; the Pilates page shows a striped placeholder while this is missing. */
  photo?: Photo;
  schedule: ClassSession[];
}

export interface TimetableEntry {
  id: string;
  day: Weekday;
  startTime: string;
  endTime: string;
  className: string;
  category: ClassCategory;
  /** Age group, e.g. '6-8', '15+' or 'adults'; omitted when the class is open to all. */
  ages?: string;
  studio: string;
  linkTo?: string;
}

export type EventCategory = 'show' | 'workshop' | 'open-day';

export interface StudioEvent {
  id: string;
  category: EventCategory;
  tag?: string;
  year: number;
  featured: boolean;
  date: string;
  title: string;
  venue?: string;
  description: string;
  ctaLabel?: string;
  ctaLink?: string;
  image: ImageAsset;
}

export interface ArchivePhoto {
  id: string;
  year: number;
  image: ImageAsset;
}

export interface ReceptionHours {
  days: string; // i18n key, e.g. 'FOOTER.MON_FRI' — translated in the template
  hours: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface StudioInfo {
  brandName: string;
  addressLines: string[];
  phone: string;
  email: string;
  instagramHandle: string;
  receptionHours: ReceptionHours[];
  mapEmbedUrl?: string;
  directionsUrl?: string;
  socialLinks: SocialLink[];
  mainPhoto: StudioPhoto;
  studioPhotos: StudioPhoto[];
}

export interface StudioPhoto {
  src: string;
  /** Translation key for the image description read by screen readers. */
  altKey: string;
}

export interface FaqCategory {
  id: string;
  titleKey: string;
  items: FaqItem[];
}

export interface FaqItem {
  id: string;
  questionKey: string;
  answerKey: string;
  /** Extra words the widget search matches on (synonyms, other spellings); never shown. */
  keywordsKey?: string;
  /** Show call / email / Instagram buttons under the answer. */
  showContact?: boolean;
  /** A page on the site (or an external URL) that goes into more detail. */
  link?: FaqLink;
}

export interface FaqLink {
  labelKey: string;
  route?: string;
  queryParams?: Record<string, string>;
  href?: string;
}
