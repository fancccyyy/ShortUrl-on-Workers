export default function checkVaildShortUrl(shortUrl) {
  const regex = /^[a-zA-Z0-9]{5}$/;
  return regex.test(shortUrl);
}