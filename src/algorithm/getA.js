import TmapTimeMachine from "./tmapTimeMachine";
import GetArrangeTime from "./getArrangeTime";

const GetA = async (departure, arrival, way, hosTime, service_kind_id) => {
  let moveType = "";
  let a = 0;

  if (way == "집-병원") {
    moveType = "departure";
  } else {
    moveType = "arrival";
  }

  try {
    await TmapTimeMachine(
      departure?.lon,
      departure?.lat,
      arrival?.lon,
      arrival?.lat,
      moveType,
      hosTime
    ).then((tmapTime) => {
      a = tmapTime + 20 + GetArrangeTime(service_kind_id); //a1
    });
    a = a * 60000; //minutes -> milliseconds
    return a;
  } catch (err) {
    return err;
  }
};

export default GetA;
