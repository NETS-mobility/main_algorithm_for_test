import TmapTimeMachine from "./tmapTimeMachine";
import ToKoreanTime from "../util/toKoreanTime";
import Func from "./getCarPreNextRevInfo";
import AddMinuteToDate from "../util/addMinuteToDate";
const GetD = async (L2, drop_x, drop_y, hos_arr_time) => {
  const L3 = [];
  console.log(L2, drop_x, drop_y, hos_arr_time);
  let new_hos_arr_time = ToKoreanTime(new Date(hos_arr_time));
  for (let i = 0; i < L2.length; i++) {
    // const nextRes = Func(L2[i].car_id);
    const nextRes = Func(i);
    await new Promise((resolve) => setTimeout(resolve, 250));
    await TmapTimeMachine(
      drop_y,
      drop_x,
      nextRes.post_first_y,
      nextRes.post_first_x,
      "departure",
      nextRes.post_pickup_time
    ).then((tmapTime) => {
      const resDate = new Date(nextRes.post_pickup_time);
      const d = AddMinuteToDate(resDate, -tmapTime);
      if (new_hos_arr_time + 20 < ToKoreanTime(d))
        // L3.push(L2[i].car_id, L2[i].c);
        L3.push({ car_id: L2[i].car_id, c: L2[i].c });
    });
  }
  return L3;
};

export default GetD;
