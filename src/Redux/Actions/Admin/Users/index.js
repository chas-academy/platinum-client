import { ADMIN_USERS_SAVE_QUERY } from "./Types";

/* eslint-disable import/prefer-default-export */

export function saveQuery(AdminUsers) {
  return { type: ADMIN_USERS_SAVE_QUERY, AdminUsers };
}

/* eslint-enable import/prefer-default-export */
