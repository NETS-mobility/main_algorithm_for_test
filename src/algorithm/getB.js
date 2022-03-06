const GetB = (hosTime, a) => {
  const resDate = new Date(hosTime);
  const b = new Date(resDate - a);
  return b;
};

export default GetB;
