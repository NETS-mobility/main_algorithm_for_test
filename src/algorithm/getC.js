import TmapTimeMachine from "./tmapTimeMachine";
import Func from "./getCarPreNextRevInfo";
import AddMinuteToDate from "../util/addMinuteToDate";

const GetC = async (L1, res_x, res_y) => {
  const cArr = [];
  try {
    for (let i = 0; i < L1.length; i++) {
      const car_schedule = Func(i);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await TmapTimeMachine(
        car_schedule.prev_last_y,
        car_schedule.prev_last_x,
        res_y,
        res_x,
        "arrival",
        car_schedule.prev_terminate_time
      ).then((tmapTime) => {
        const resDate = new Date(car_schedule.prev_terminate_time);
        const ctime = AddMinuteToDate(resDate, tmapTime + 20).toString(); //tmap(이전예약->현재 예약 픽업 장소) + 20
        cArr.push({ car_id: L1[i].car_id, c: ctime });
      });
    }
  } catch (err) {
    return err;
  }
  return cArr;
};

export default GetC;
