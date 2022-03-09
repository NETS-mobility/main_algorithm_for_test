import TmapTimeMachine from "./tmapTimeMachine";
import Func from "./getCarPreNextRevInfo";
import AddMinuteToDate from "../util/addMinuteToDate";

const GetPrevDepartureTime = async (L1, res_x, res_y, pickupTime) => {
  const prevDepartureTimeArray = [];
  try {
    for (let i = 0; i < L1.length; i++) {
      const car_schedule = Func(i);
      await new Promise((resolve) => setTimeout(resolve, 250));
      await TmapTimeMachine(
        car_schedule.prev_last_y,
        car_schedule.prev_last_x,
        res_y,
        res_x,
        "departure",
        pickupTime
      ).then((tmapTime) => {
        const resDate = new Date(pickupTime);
        const ctime = AddMinuteToDate(
          resDate,
          -tmapTime.estimatedTime
        ).toString();
        prevDepartureTimeArray.push({
          car_id: L1[i].car_id,
          prevDepartureTime: new Date(ctime),
        });
      });
    }
  } catch (err) {
    return err;
  }
  return prevDepartureTimeArray;
};

export default GetPrevDepartureTime;
