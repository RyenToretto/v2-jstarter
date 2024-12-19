import getRealType from './getRealType'
export default function hasIntersection(arr1, arr2) {
  if (getRealType(arr1) !== 'array' || getRealType(arr1) !== 'array') {
    return false
  }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr2.includes(arr1[i])) {
  //     return true
  //   }
  // }
  return arr1.some((v) => arr2.includes(v))
}
