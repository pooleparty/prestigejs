/* eslint-disable import/prefer-default-export */

let lastId = 0;

export function generateUniqueId(prefix = 'ps_id_') {
  lastId += 1;
  return `${prefix}${lastId}`;
}
