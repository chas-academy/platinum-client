/* eslint-disable import/prefer-default-export */

export function ucFirst(string) {
  if (!string) return null;

  return [string.charAt(0).toUpperCase(), string.slice(1)].join("");
}

/* eslint-enable import/prefer-default-export */
