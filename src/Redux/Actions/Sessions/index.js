import { AUTH } from "./Types";

/* eslint-disable import/prefer-default-export */

export function auth(IsSignedIn) {
  return { type: AUTH, IsSignedIn };
}

/* eslint-enable import/prefer-default-export */
