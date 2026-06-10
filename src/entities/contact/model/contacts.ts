import { Links } from '@shared/config';

export type ContactId = 'telegram' | 'github' | 'email';

export interface Contact {
  id: ContactId;
  icon: string;
  label: string;
  href: string;
}

export const CONTACTS: Contact[] = [
  { id: 'telegram', icon: '✈️', label: 'Telegram', href: Links.Telegram },
  { id: 'github', icon: '🐙', label: 'GitHub', href: Links.GitHub },
  { id: 'email', icon: '✉️', label: 'Email', href: 'mailto:eugene.pokalyuk@gmail.com' },
];
