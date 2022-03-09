import ToKoreanTime from "../util/toKoreanTime";
import Func from "./getCarPreNextRevInfo";
const GetL2 = (prevArrivalTimeArray) => {
  const L2 = [];
  for (let i = 0; i < prevArrivalTimeArray.length; i++) {
    const car_schedule = Func(i);
    if (
      ToKoreanTime(prevArrivalTimeArray[i].prevArrivalTime) >
      car_schedule.prev_terminate_time
    ) {
      L2.push(prevArrivalTimeArray[i]);
    }
  }
  return L2;
};

export default GetL2;
