const _computedCache = new Map()

export function computed<P, T>(key: P, runner: () => T) {
  if (_computedCache.has(key)) {
    return _computedCache.get(key)
  }

  const result = runner()
  _computedCache.set(key, result)

  return result
}