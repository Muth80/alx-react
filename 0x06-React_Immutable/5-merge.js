import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

function mergeElements(page1, page2) {
  const merged = { ...page1, ...page2 };
  const result = Object.keys(merged).reduce((acc, key) => {
    acc[key] = merged[key];
    return acc;
  }, {});

  return List(Object.values(result));
}

