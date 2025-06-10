export function formatDate(value: string): string {
  const date = new Date(value);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('ru-RU', options);
}
