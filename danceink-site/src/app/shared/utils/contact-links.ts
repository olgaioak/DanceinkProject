import { StudioInfo } from '../../data/models';

export function toWhatsAppUrl(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}

export function toInstagramUrl(studio: StudioInfo): string {
  return studio.socialLinks.find((link) => link.label === 'Instagram')?.url ?? '#';
}
