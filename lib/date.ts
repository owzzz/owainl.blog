export function formatDate(date: string): string {
  const options = { dateStyle: 'medium' } as Intl.DateTimeFormatOptions;
  const dateToFormat = new Date(date);

  return new Intl.DateTimeFormat('en-US', options).format(dateToFormat);
}