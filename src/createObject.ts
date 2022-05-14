
export interface CreateObject {
  get: (key: string) => any;
  set: (...keysWithValue) => void;
}

export function createObject(init: object): CreateObject {
  const object = init || {}

  function set(...keys) {
    if (keys.length < 2) {
      throw new Error('Pass in at least two parameters.')
    }
    if (keys.length === 2) {
      object[keys[0]] = keys[1]
    } else {
      const value = keys.pop()
      const lastKey = keys.pop()

      const headKeys = keys.reduce(
        (pre, key) => pre[key] || (pre[key] = {}),
        object
      )

      headKeys[lastKey] = value
    }
  }

  function get() {
    return object
  }
  return {
    set,
    get,
  }
}