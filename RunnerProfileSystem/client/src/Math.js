import { create, all } from "mathjs";

const Math = (distance, total_time) => {
  const math = create(all);
  let pace = math.divide(total_time, distance);
  pace = math.multiply(pace, 1000);
  let min = parseInt(pace).toString();
  let sec = pace - min;
  sec = math.multiply(60, sec).toString().substring(0, 2);
  pace = parseFloat(min + "." + sec);
  return pace;
};

export default Math;
