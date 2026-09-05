// random ID generator idea from:
// https://www.webdevtutor.net/blog/typescript-get-random-id

export const randomId = (length: number): string => {
  const chars: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result: string = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};
