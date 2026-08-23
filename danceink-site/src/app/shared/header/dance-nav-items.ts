// Provisional navigation-only content for the header dropdown and mobile menu.
// Once the Dance pages are implemented against data/dances.ts (DanceDiscipline[]),
// this should be replaced with data derived from that real source instead of being
// duplicated here.

export interface DanceNavItem {
  id: string;
  labelKey: string;
  ageLabel: string;
}

export const DANCE_NAV_ITEMS: DanceNavItem[] = [
  { id: 'ballet', labelKey: 'DANCE_ITEMS.BALLET', ageLabel: '4+' },
  { id: 'modern-dance', labelKey: 'DANCE_ITEMS.MODERN_DANCE', ageLabel: '8+' },
  { id: 'contemporary', labelKey: 'DANCE_ITEMS.CONTEMPORARY', ageLabel: '12+' },
  { id: 'musical', labelKey: 'DANCE_ITEMS.MUSICAL', ageLabel: '10+' },
  { id: 'baby-class', labelKey: 'DANCE_ITEMS.BABY_CLASS', ageLabel: '2-4' }
];

export interface PilatesNavItem {
  id: string;
  labelKey: string;
  fragment: string;
}

export const PILATES_NAV_ITEMS: PilatesNavItem[] = [
  { id: 'mat', labelKey: 'PILATES_ITEMS.MAT', fragment: 'mat' },
  { id: 'reformer', labelKey: 'PILATES_ITEMS.REFORMER', fragment: 'reformer' }
];
