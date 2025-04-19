export const shortenText = (text: string, maxLength: number = 15): string => {
  const dotIndex = text.lastIndexOf('.');
  if (dotIndex === -1) return text; // нет расширения — не трогаем

  const name = text.slice(0, dotIndex);
  const ext = text.slice(dotIndex);

  if (name.length <= maxLength) {
    return text;
  }

  const keep = maxLength - 1;
  const half = Math.floor(keep / 2);

  const start = name.slice(0, half);
  const end = name.slice(-half);

  return `${start}…${end}${ext}`;
}