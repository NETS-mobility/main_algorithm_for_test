import ToKoreanTime from "../util/toKoreanTime";
const GetPickupTime = (hosTime, a) => {
  const resDate = new Date(hosTime);
  const b = new Date(resDate - a);
  return ToKoreanTime(b);
};

export default GetPickupTime;
