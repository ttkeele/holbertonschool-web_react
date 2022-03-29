import { Map } from 'immutable';

export default function getImmutableObject(object) {
  return Map(object);
}

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};
const obj = getImmutableObject(object);

console.log(obj);