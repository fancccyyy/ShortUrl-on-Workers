export default function generateShortUrl(length) {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let shortUrl = '';
  for (let i = 0; i < length; i++) {
    shortUrl += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return shortUrl;
}