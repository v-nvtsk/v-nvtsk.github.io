export function isVoid(value: unknown) {
  return value === undefined || value === null || value === ''
}

export function isNotVoid(value: unknown) {
  return value !== undefined && value !== null && value !== ''
}
