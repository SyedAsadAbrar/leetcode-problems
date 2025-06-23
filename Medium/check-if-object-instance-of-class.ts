// https://leetcode.com/problems/check-if-object-instance-of-class/

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined) return false;
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto.constructor === classFunction) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
