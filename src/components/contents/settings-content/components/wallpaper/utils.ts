export const extractUrlValue = (urlString: string) => {
  const match = urlString.match(/^url\((['"]?)(.*?)\1\)$/i);
  return match ? match[2] : urlString;
}

export const getFileNameFromUrl = (url: string): string | null => {
  const cleanedUrl = url.replace(/^url\((['"]?)(.*?)\1\)?$/, '$2');
  const match = cleanedUrl.match(/\/([^\/?#]+)$/);
  return match ? match[1] : null;
}
