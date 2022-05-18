export function tryRequire(filepath: string) {
  try {
    return require(filepath)
  } catch (error) {
    return null
  }
}