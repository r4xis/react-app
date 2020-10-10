const Categorization = (objects) => {
  let youngs = [];
  let middleAges = [];
  let olds = [];
  let key;
  for (key in objects) {
    if (objects[key].age < 30) {
      youngs.push(objects[key]);
    } else if (objects[key].age > 40) {
      olds.push(objects[key]);
    } else {
      middleAges.push(objects[key]);
    }
  }
  return [youngs, middleAges, olds];
};

export default Categorization;
