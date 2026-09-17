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
  aboutClass: string;
  whatToBring: string;
  teacher: string;
  image: ImageAsset;
  schedule: ClassSession[];
}

export interface PilatesProgram {
  id: 'mat' | 'reformer' | 'reformer-1-1';
  labelKey: string;
  classSize: number | 'private';
  durationMinutes: number;
  level: string;
  descriptionKey: string;
  image: ImageAsset;
  schedule: ClassSession[];
}

export interface TimetableEntry {
  id: string;
  day: Weekday;
  startTime: string;
  endTime: string;
  className: string;
  category: ClassCategory;
  meta: string;
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
  ownerName: string;
  addressLines: string[];
  phone: string;
  email: string;
  instagramHandle: string;
  receptionHours: ReceptionHours[];
  mapEmbedUrl?: string;
  directionsUrl?: string;
  socialLinks: SocialLink[];
  portrait: ImageAsset;
  studioPhotos: (ImageAsset & { label: string })[];
}
