const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

const getUniqeItemsByKey = function <type>(arr: type[], key: string) {
  return [...new Set(arr.map((item: type) => item[key]))];
};

const array2Object = (arr: any[]) => {
  return arr.reduce((o: any, key: any) => ({ ...o, [key]: false }), {});
};

const getFilterObject = function <type>(arr: type[], key: string) {
  const uniqe = getUniqeItemsByKey<type>(arr, key);
  return array2Object(uniqe);
};

export { compose, getFilterObject };
