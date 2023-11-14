export default function accessImmutableObject(object, array) {
  let result = object;

  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    if (result instanceof Map) {
      result = result.get(key);
    } else if (typeof result === 'object' && result !== null) {
      result = result[key];
    } else {
      return undefined;
    }
  }

  return result;
}

