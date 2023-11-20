import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const immutablePage1 = Map(page1);
  const immutablePage2 = Map(page2);

  const merged = immutablePage1.mergeDeep(immutablePage2);

  return merged.toList();
}

