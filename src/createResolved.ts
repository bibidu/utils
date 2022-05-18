export function createResolved<T>() {
  const resolvedSet = new Set()

  return {
    resolve,
    resolved
  }

  function resolve(key: T): void {
    resolvedSet.add(key)
  }
  function resolved(key: T): boolean {
    return resolvedSet.has(key)
  }
}
