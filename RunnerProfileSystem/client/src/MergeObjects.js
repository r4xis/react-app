import Math from "./Math"

const MergeObjects = (obj1, obj2) => {
  let merge = {}
  let result = []
  let key
  for (key in obj1) {
    if(obj1.hasOwnProperty(key)){
      if(obj2.hasOwnProperty(key)) {
        let obj3 = {avg_pace: Math(obj2[key].distance, obj2[key].total_time)}
        merge = Object.assign({}, obj1[key], obj2[key], obj3);
        result.push(merge)
      }
    }
  }
  return result
}

export default MergeObjects;