import TmapTimeMachine from "./tmapTimeMachine";
import ToKoreanTime from "../util/toKoreanTime";
import Func from "./getCarPreNextRevInfo";
import AddMinuteToDate from "../util/addMinuteToDate";
const GetD = async (L2, drop_x, drop_y, hos_arr_time) => {
  const L3 = [];
  let new_hos_arr_time = new Date(hos_arr_time);

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
      // console.log("resDate==", resDate);
      // console.log("tmapTime==", tmapTime);
      const d = AddMinuteToDate(resDate, -tmapTime);
      // console.log("나는d==", d);
      // console.log("나는 hos_arr_time==", new_hos_arr_time);
      if (ToKoreanTime(AddMinuteToDate(new_hos_arr_time, 20)) < ToKoreanTime(d))
        // L3.push(L2[i].car_id, L2[i].c);
        L3.push({ car_id: L2[i].car_id, c: L2[i].c });
    });
  }
  return L3;
};

export default GetD;
