import ToKoreanTime from "../util/toKoreanTime";
const GetB = (hosTime, a) => {
  const resDate = new Date(hosTime);
  const b = new Date(resDate - a);
  return ToKoreanTime(b);
};

export default GetB;
