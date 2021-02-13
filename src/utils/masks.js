export function categoryMask(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  //return name.replace(/([A-Z]+)/g, ' $1').replace(/^ /, '')
  return name.replace(/([A-Z]+)/g, " $1");
}

export function numbersMask(number) {
  return Number(number).toLocaleString();
}
