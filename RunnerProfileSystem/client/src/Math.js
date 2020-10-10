import { create, all } from "mathjs";

const Math = (distance, total_time) => {
  const math = create(all);
  let div = math.divide(total_time, distance);
  return math.multiply(div, 1000).toString().substring(0, 4);
};

export default Math;
