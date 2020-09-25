const comma = (x) => {
  return x !== undefined && x !== 0
    ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "-";
};

export default comma;
